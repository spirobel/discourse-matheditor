class DiscourseMatheditorConstraint
  def matches?(request)
    SiteSetting.discourse_matheditor_enabled
  end
end
