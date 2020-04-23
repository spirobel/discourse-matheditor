require_dependency "discourse_matheditor_constraint"

DiscourseMatheditor::Engine.routes.draw do
  get "/" => "discourse_matheditor#index", constraints: DiscourseMatheditorConstraint.new
  get "/actions" => "actions#index", constraints: DiscourseMatheditorConstraint.new
  get "/actions/:id" => "actions#show", constraints: DiscourseMatheditorConstraint.new
end
