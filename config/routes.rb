Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


  resources :users
  resources :films
  resources :rates
  # resources :purchases


  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  get "/filterbrowse/:flt", to: "films#filter_browse"
  post "/createcart", to: "films#create_cart"
  post "/testcart", to: "films#test_cart"
  post "/testpurchase", to: "purchases#test_transaction"
  post "/payment", to: "purchases#payment"
  get "/avg", to: "rates#avg"
  get "/searchfilm/:film", to: "films#search"
  post "/createrate", to: "rates#create"
  get "/purchases/:flt", to: "purchases#history"
  get "/purchases", to: "purchases#index"
  get "/copies", to: "users#copies_bought"
  patch "/updaterate", to: "rates#update"
  delete "/rate/:id", to: "rates#destroy"
end
