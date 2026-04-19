source 'https://rubygems.org'

group :jekyll_plugins do
  gem 'jekyll'
  gem 'jekyll-feed'
  gem 'jekyll-sitemap'
  gem 'jekyll-redirect-from'
  gem 'jemoji'
  gem 'webrick', '~> 1.8'
end

# Liquid 4.0.4 fixes a Ruby 3.2+ incompatibility (String#tainted? was removed).
# Older github-pages bundles liquid 4.0.3 which crashes on modern Ruby; pin newer.
gem 'github-pages'
gem 'liquid', '>= 4.0.4'
gem 'connection_pool', '2.5.0'

# Stdlib gems extracted in Ruby 3.4+ (needed for local dev on Ruby 3.4 / 4.x).
# GitHub Pages CI uses an older Ruby that still bundles these, so this is local-only.
gem 'csv'
gem 'base64'
gem 'bigdecimal'
gem 'logger', '~> 1.6.0'
gem 'ostruct'
gem 'mutex_m'
gem 'fiddle'
