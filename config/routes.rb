Rails.application.routes.draw do
  root 'chats#index'
  get '/messages', to: 'chats#messages'

  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
