Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:show, :new, :create]
  resource :session, only: [:new, :create, :destroy]
  resources :bands do
    resource :album, only: [:new]
  end
  resources :albums, except: [:index, :new] do
    resource :track, only: [:new]
  end
  resources :tracks, except: [:index, :new]
end
