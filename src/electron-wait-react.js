const net = require("net");
const PORT = process.env.PORT ? process.env.PORT - 100 : 3000;

process.env.ELECTRON_START_URL = `http://localhost:${PORT}`;

const client = new net.Socket();

let startedElectron = false;
const tryConnection = () =>
  client.connect({ port: PORT }, () => {
    client.end();
    if (!startedElectron) {
      console.log("Starting Electron...");
      startedElectron = true;
      const exec = require("child_process").exec;
      exec("npm run electron");
    }
  });

tryConnection();

client.on("error", error => setTimeout(tryConnection, 1000));
