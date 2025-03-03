/* eslint-disable global-require */
/* eslint-disable no-console */

const express = require('express');
const helmet = require('helmet');
const v8 = require('v8');
const cors = require('cors');
const http = require('http');
const bodyParser = require('body-parser');
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("send_message", (message) => {
    console.log("Message:", message);
    io.emit("receive_message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Initialize and configure the express application
async function initializeApp() {
  try {
    const routes = require('./src/routes');
    app.use(helmet());
    app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
    app.use(cors());

    app.use([
      cors(),
      bodyParser.json({ limit: '100mb', extended: false }),
      bodyParser.urlencoded({ limit: '100mb', extended: false }),
    ]);

    app.set('port', 5002);
    app.use(routes);

    app.get('/api/health', (req, res) => {
      res.status(200).json({
        status: 'success',
        message: 'working Fine. great success',
      });
    });

    app.use((req, res) => {
      res.status(404).json({
        errors: {
          global:
            'Still working on it. Please try again later when we implement it',
        },
      });
    });

    // app.use(logResponseSize());

    server.listen(app.get('port'), () => {
      console.log(`API running on localhost:${app.get("port")}`);
      console.log(
        'total_heap_size:',
        `${v8.getHeapStatistics().total_available_size / 1024 / 1024} -> Total Available Memory in MB`,
      );
    });
  } catch (error) {
    console.log('Error initializing app:', error.message);
  }
}

initializeApp();

process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err);
  process.exit(1);
});
