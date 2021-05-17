import consumer from "./consumer"

consumer.subscriptions.create({channel: "ChatroomChannel", room_id: 2 }, {
  connected() {
    console.log("Connected to chatroom_channel")
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    //$("#message-container").append(data.foo)
    console.log("data",data)
  }
});
