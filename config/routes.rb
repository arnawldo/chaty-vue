Rails.application.routes.draw do
  root 'chats#index'
  get '/messages', to: 'chats#messages'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
