const EventEmitter = require('events');

class Network extends EventEmitter {
  constructor() {
	super();
	this.on('event', arg=>console.log(`Network: an event happened with this message: ${arg.message}`));
  }
  send(type, text) {
	this.emit(type, {message: text});
  }
}

module.exports = Network;