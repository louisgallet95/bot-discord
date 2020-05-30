const { prefix, token } = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageAttachment } = require("discord.js");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", (message) => {
  if (msg.content === `${prefix}ping`) {
    message.reply("pong");
  }
});

client.on("message", (message) => {
  //if the message is hello or hi or salut
  if (message.content === `${prefix}hello`) {
    // Send Hello @user
    message.reply("hello " + "@" + message.author.username);
  }
});

client.login(token);
