Rails.application.routes.draw do
  devise_for :users
  root to: 'home#index'
  resources :posts, only: [:show]
  get '/pages/:page', to: 'pages#show'
  get '/blog', to: 'blog#index', as: :blog_page
  get '/tutorials', to: 'tutorials#index', as: :tutorials_page

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"

  namespace :admin do
    get '/', to: 'home#index'
    resources :posts do
      member do
        post :verify
        post :publish
        post :deprecate
      end
    end
    resources :users, only: [:index]
  end

  namespace :api, defaults: { format: :json } do
    resources :posts, only: [:index]
  end
end
