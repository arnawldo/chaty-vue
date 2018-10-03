// App object holding ActionCable logic
import ActionCable from "actioncable";

const CableApp = {};

CableApp.cable = ActionCable.createConsumer("ws://localhost:3000/cable");

export default CableApp