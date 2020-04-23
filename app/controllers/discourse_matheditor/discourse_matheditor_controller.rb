module DiscourseMatheditor
  class DiscourseMatheditorController < ::ApplicationController
    requires_plugin DiscourseMatheditor

    before_action :ensure_logged_in

    def index
    end
  end
end
