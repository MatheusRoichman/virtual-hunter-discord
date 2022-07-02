require("dotenv").config();

const { Client, Intents }=require("discord.js");

const client = new Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.once("ready", () =>{
    console.log("BOT IS ONLINE");
})

client.on('message', message => {
    if(message.content.toLocaleLowerCase()==='ping') 
    message.channel.send('pong' + ' '  + message.author.username);
})

client.login(process.env.TOKEN);