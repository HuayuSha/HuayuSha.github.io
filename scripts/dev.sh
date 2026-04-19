#!/usr/bin/env bash
# =============================================================================
# scripts/dev.sh
# 用途：一键启动 Jekyll 本地开发服务器（带 livereload）
#
# 用法：
#     bash scripts/dev.sh                 # 默认 localhost:4000
#     bash scripts/dev.sh 4001            # 指定端口
#     PORT=4001 bash scripts/dev.sh       # 也可以
#
# 启动后浏览器打开 http://localhost:4000 即可。修改 .scss / .md / .html
# 会自动重建 + 浏览器自动刷新。Ctrl+C 停服。
#
# 环境前置（已由 Cursor 设好，仅说明）：
#   - Homebrew Ruby 3.3 (/opt/homebrew/opt/ruby@3.3)
#   - bundler 4.x（从 ruby@3.3 自带 gem 装的）
#   - 项目依赖：bundle install 已在 vendor/bundle 中
#
# 如果换电脑或重置环境，第一次需要：
#   brew install ruby@3.3
#   echo 'export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"' >> ~/.zshrc
#   echo 'export PATH="/opt/homebrew/lib/ruby/gems/3.3.0/bin:$PATH"' >> ~/.zshrc
#   source ~/.zshrc
#   gem install bundler
#   bundle install
# =============================================================================

set -euo pipefail

PORT="${1:-${PORT:-4000}}"

# Force Homebrew Ruby 3.3 even if shell 没 source ~/.zshrc
export PATH="/opt/homebrew/opt/ruby@3.3/bin:/opt/homebrew/lib/ruby/gems/3.3.0/bin:${PATH}"

# UTF-8 locale，避免 Ruby 在含中文路径下的字符串编码报错
export LANG="en_US.UTF-8"
export LC_ALL="en_US.UTF-8"

# 移到脚本所在仓库根目录（脚本在 scripts/ 下）
cd "$(dirname "$0")/.."

echo "[dev.sh] Ruby:    $(ruby -v)"
echo "[dev.sh] Bundler: $(bundle -v)"
echo "[dev.sh] CWD:     $(pwd)"
echo "[dev.sh] Port:    ${PORT}"
echo "[dev.sh] Open:    http://localhost:${PORT}"
echo

exec bundle exec jekyll serve -l -H localhost -P "${PORT}"
