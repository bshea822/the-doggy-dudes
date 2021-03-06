Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :new, :create, :destroy]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :dogs, only: [:create]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :pickups, only: [:index, :create]
    end
  end

  get '/pickups', to: "pickups#index"
  get '*path', to: 'homes#index'
end
