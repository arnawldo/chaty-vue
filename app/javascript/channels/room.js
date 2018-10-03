export const createRoomSubscription = (CableApp, onNewMessage) =>
    CableApp.room = CableApp.cable.subscriptions.create("RoomChannel", {
      connected: function() {},
      disconnected: function() {},
      received: function(data) {
        console.log('received this');
        console.log(data);
        onNewMessage(data['message']);
      },
      speak: function(message) {
        return this.perform('speak', {message: message});
      }
    });
