import consumer from "./consumer"
import scroll_bottom from "../packs/application"


const clearInput = () => $("#input-message-chatroom").val("")

consumer.subscriptions.create("ChatroomChannel" , {
  connected() {
    console.log("Connected to chatroom_channel...")
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    $("#message-container").append(data.mod_message)
    clearInput()
    scroll_bottom()
  }
});
