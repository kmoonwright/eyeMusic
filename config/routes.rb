Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users

    resources :songs, only: [:index, :show] do 
      get :search, on: :collection
    end
    resources :albums, only: [:index, :show] do 
      get :search, on: :collection
    end
    resources :artists, only: [:index, :show] do 
      get :search, on: :collection
    end
    resources :playlists, only: [:index, :show, :create, :destroy] do 
      get :search, on: :collection
    end
    resources :playlist_songs, only: [:create, :destroy]
  end

  root to: "root#root"
end
