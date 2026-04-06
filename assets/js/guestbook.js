(function () {
  const app = document.getElementById('guestbook-app');
  if (!app) return;

  const form = document.getElementById('guestbook-form');
  const list = document.getElementById('guestbook-list');
  const status = document.getElementById('gb-status');
  const submit = document.getElementById('gb-submit');
  if (!form || !list || !status || !submit) return;
  const runtimeHint = document.createElement('p');
  runtimeHint.className = 'guestbook-runtime-hint';
  list.insertAdjacentElement('beforebegin', runtimeHint);

  const API_ENDPOINT = '/api/guestbook';
  const lang = (app.dataset.lang || 'en').toLowerCase() === 'zh' ? 'zh' : 'en';

  const texts = {
    zh: {
      loading: '正在加载留言…',
      empty: '暂无留言，欢迎成为第一位留言者。',
      loadFailed: '留言加载失败，请稍后刷新重试。',
      nameRequired: '请填写姓名。',
      messageRequired: '请填写留言内容。',
      sending: '正在提交…',
      submitSuccess: '留言提交成功。',
      submitFailed: '提交失败，请稍后重试。',
      tooFrequent: '提交过于频繁，请稍后再试。',
      contactLabel: '联系方式',
      temporaryMode: '当前为临时留言模式（未绑定数据库）。留言会保留一段时间，但不保证长期持久。'
    },
    en: {
      loading: 'Loading messages...',
      empty: 'No messages yet. Be the first one to post.',
      loadFailed: 'Failed to load guestbook messages.',
      nameRequired: 'Please enter your name.',
      messageRequired: 'Please enter your message.',
      sending: 'Submitting...',
      submitSuccess: 'Message submitted successfully.',
      submitFailed: 'Submission failed. Please try again later.',
      tooFrequent: 'Too many requests. Please wait and retry.',
      contactLabel: 'Contact',
      temporaryMode: 'Temporary mode is active (database not bound). Messages may not be permanently retained.'
    }
  };

  function t(key) {
    return texts[lang][key] || key;
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatTime(rawValue) {
    const date = new Date(rawValue);
    if (Number.isNaN(date.getTime())) return escapeHtml(rawValue || '');
    return new Intl.DateTimeFormat(lang === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }

  function setStatus(message, type) {
    status.textContent = message || '';
    status.classList.remove('is-error', 'is-success', 'is-muted');
    if (type === 'error') status.classList.add('is-error');
    if (type === 'success') status.classList.add('is-success');
    if (type === 'muted') status.classList.add('is-muted');
  }

  function setRuntimeMode(storageMode) {
    if (storageMode === 'memory') {
      runtimeHint.textContent = t('temporaryMode');
      runtimeHint.classList.add('is-visible');
      return;
    }
    runtimeHint.textContent = '';
    runtimeHint.classList.remove('is-visible');
  }

  function renderMessages(messages) {
    if (!Array.isArray(messages) || messages.length === 0) {
      list.innerHTML = `<div class="guestbook-empty">${escapeHtml(t('empty'))}</div>`;
      return;
    }

    const html = messages
      .map((item) => {
        const name = escapeHtml(item.name || '');
        const contact = escapeHtml(item.contact || '');
        const message = escapeHtml(item.message || '').replace(/\n/g, '<br>');
        const createdAt = formatTime(item.created_at);
        const contactHtml = contact
          ? `<p class="guestbook-item__contact">${escapeHtml(t('contactLabel'))}: ${contact}</p>`
          : '';

        return `
          <article class="guestbook-item">
            <header class="guestbook-item__header">
              <h3 class="guestbook-item__name">${name}</h3>
              <time class="guestbook-item__time">${createdAt}</time>
            </header>
            ${contactHtml}
            <p class="guestbook-item__message">${message}</p>
          </article>
        `;
      })
      .join('');

    list.innerHTML = html;

    const items = Array.from(list.querySelectorAll('.guestbook-item'));
    items.forEach((item, index) => {
      item.classList.add('is-entering');
      item.style.animationDelay = `${Math.min(index * 55, 240)}ms`;
    });

    window.setTimeout(() => {
      items.forEach((item) => {
        item.classList.remove('is-entering');
        item.style.animationDelay = '';
      });
    }, 700);
  }

  async function loadMessages() {
    list.innerHTML = `<div class="guestbook-empty">${escapeHtml(t('loading'))}</div>`;

    try {
      const response = await fetch(`${API_ENDPOINT}?limit=50`, {
        headers: { Accept: 'application/json' },
        credentials: 'same-origin'
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const payload = await response.json();
      setRuntimeMode(payload.storage_mode);
      renderMessages(payload.messages || []);
    } catch (error) {
      console.error('[guestbook] load failed', error);
      list.innerHTML = `<div class="guestbook-empty guestbook-empty--error">${escapeHtml(t('loadFailed'))}</div>`;
    }
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const contact = String(formData.get('contact') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const honeypot = String(formData.get('website') || '').trim();

    if (honeypot) {
      setStatus(t('submitSuccess'), 'success');
      return;
    }
    if (!name) {
      setStatus(t('nameRequired'), 'error');
      return;
    }
    if (!message) {
      setStatus(t('messageRequired'), 'error');
      return;
    }

    submit.disabled = true;
    submit.classList.add('is-loading');
    setStatus(t('sending'), 'muted');

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify({ name, contact, message, website: honeypot })
      });

      const payload = await response.json().catch(() => ({}));
      setRuntimeMode(payload.storage_mode);

      if (!response.ok) {
        if (response.status === 429) {
          setStatus(payload.error || t('tooFrequent'), 'error');
        } else {
          setStatus(payload.error || t('submitFailed'), 'error');
        }
        return;
      }

      setStatus(t('submitSuccess'), 'success');
      form.reset();
      await loadMessages();
    } catch (error) {
      console.error('[guestbook] submit failed', error);
      setStatus(t('submitFailed'), 'error');
    } finally {
      submit.disabled = false;
      submit.classList.remove('is-loading');
    }
  });

  loadMessages();
})();
