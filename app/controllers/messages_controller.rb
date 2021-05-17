class MessagesController < ApplicationController
  before_action :require_user


  def create
    message = current_user.messages.build(message_params)
    if message.save 
      redirect_to root_path                                
    end
    #ActionCable.server.broadcast "chatroom_channel_2", message: "Hello"
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end

end