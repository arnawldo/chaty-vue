<template>
  <div id="app">
    <li v-for="message in messages">
      {{ message.content }}
    </li>
    <form @submit="sendMessage">
      <label>Say something</label>
      <input v-model="message"
             value="message"
             type='text'
             placeholder="What's on your mind?"/>
      <button type='submit'>Send</button>
    </form>
  </div>
</template>

<script>

import CableApp from "./cable";
import axios from "axios";
import {createRoomSubscription} from "./channels/room";

export default {
  data: function () {
    return {
      messages: [],
      message: '',
      CableApp

    }
  },
  mounted () {
    axios.get('/messages')
        .then(response => (this.messages = response.data));
    this.CableApp.room = createRoomSubscription(CableApp, this.onNewMessage);

  },
  methods: {
    sendMessage: function (event) {
      const {CableApp, message} = this;
      CableApp.room.speak(message);
      this.message = '';
      event.preventDefault();
    },
    onNewMessage(newMessage) {
      const {messages} = this;
      const updatedMessages = [
        ...messages,
        newMessage
      ];
      this.messages = updatedMessages;
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
