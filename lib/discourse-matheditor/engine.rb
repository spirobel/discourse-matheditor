module DiscourseMatheditor
  class Engine < ::Rails::Engine
    engine_name "DiscourseMatheditor".freeze
    isolate_namespace DiscourseMatheditor

    config.after_initialize do
      Discourse::Application.routes.append do
        mount ::DiscourseMatheditor::Engine, at: "/discourse-matheditor"
      end
    end
  end
end
