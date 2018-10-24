Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  devise_for :users
  root to: 'home#index'
  
  namespace :admin do
    get '/', to: 'home#index'
    resources :posts
    resources :users, only: [:index]
  end

  namespace :api, defaults: { format: :json } do
    resources :posts, only: [:index]
  end
end
