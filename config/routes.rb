Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


  # resources :users
  # resources :films
  resources :rates, only: [:show]
  # resources :purchases

# user/session routes
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  get "/copies", to: "users#copies_bought"

# film routes
  get "/filterbrowse/:flt", to: "films#filter_browse"
  post "/createcart", to: "films#create_cart"
  get "/searchfilm/:film", to: "films#search"

# purchase routes
  post "/payment", to: "purchases#payment"
  get "/purchases/:flt", to: "purchases#history"


 # rate routes 
  post "/createrate", to: "rates#create"
  patch "/updaterate", to: "rates#update"
  delete "/rate/:id", to: "rates#destroy"
  
end
