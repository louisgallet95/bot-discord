const Discord = require('discord.js'); 
const client = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js')


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
    if (msg.content === 'ping') {
      message.reply('pong');
    }
  });

  client.on('message', message => {
    //If the message is "what is my avatar"
    if (message.content === 'what is my avatar') {
        // Send the user's avatar URL
        message.reply('this is your avatar')
        message.reply(message.author.displayAvatarURL());
    }
  })

  client.on('message', message => {
      //If the message is "give me a gif"
      if (message.content === 'give me a gif') {
          // Send a GIF
          const attachment = new
          MessageAttachment('https://media.giphy.com/media/cJSDRt8csBx0A7YFfh/giphy.gif')
          message.channel.send(attachment)
      }
  })

  client.on('message', message => {
      //if the message is hello or hi or salut
      if (message.content === 'hello') {
          // Send Hello @user
          message.reply ('hello ' + '@'+ message.author.username)
      }
  })

client.login('token')

