Rails.application.routes.draw do
  devise_for :users
  root to: 'home#index'
  
  namespace :admin do
    get '/', to: 'home#index'
    resources :posts
    resources :users, only: [:index]
  end
end
