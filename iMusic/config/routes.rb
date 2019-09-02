Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create]
    resource :session, only: [:new, :create, :destroy]
  end

  root to: "root#root"
end
