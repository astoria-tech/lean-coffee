Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :cards, as: :cards
    end
  end
end
