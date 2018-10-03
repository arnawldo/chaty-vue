class ChatsController < ApplicationController
  def index
  end

  def messages
    @messages = Message.all
    render json: @messages
  end
end
