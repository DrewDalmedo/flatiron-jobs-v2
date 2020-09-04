Rails.application.routes.draw do
  scope '/api' do
    resources :jobs
    resources :users, only: [:create, :show]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
