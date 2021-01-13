const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: `135.23.222.131`,
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', function() {
    console.log('successfully connected to server');
    conn.write("Name: JAR")
  });

  //const moveUp = setInterval(() => conn.write("Move: up"), 50);

  
  conn.on('connect', moveUp);


  conn.on('data', function(message) {
    console.log(message);
  });

  return conn;
};

module.exports = {connect};