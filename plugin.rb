# frozen_string_literal: true

# name: DiscourseMatheditor
# about: This Plugin makes it easier to enter math symbols, equations, etc.
# version: 0.1
# authors: spirobel
# url: https://github.com/spirobel
register_asset 'stylesheets/common/mathlive.css'
register_asset 'stylesheets/common/discourse-matheditor.scss'
register_asset 'stylesheets/desktop/discourse-matheditor.scss', :desktop
register_asset 'stylesheets/mobile/discourse-matheditor.scss', :mobile

enabled_site_setting :discourse_matheditor_enabled

PLUGIN_NAME ||= 'DiscourseMatheditor'

load File.expand_path('lib/discourse-matheditor/engine.rb', __dir__)

after_initialize do
  # https://github.com/discourse/discourse/blob/master/lib/plugin/instance.rb
end
