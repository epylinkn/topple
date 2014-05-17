Rails.application.routes.draw do
  root to: 'home#index'

  get '/play' => 'home#play'

  resources :cards
end
