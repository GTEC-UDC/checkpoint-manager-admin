import io from 'socket.io-client';
import feathers from '@feathersjs/client';

const socket = io('http://localhost:3031');
const client = feathers();

client.configure(feathers.socketio(socket));
client.configure(feathers.authentication({
  storage: localStorage
}));

export default client;