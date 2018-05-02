const fs = require('fs');
const Discord = require('discord.js');
const path =require('path');

const configList = fs.readFileSync('./data/conf.json');
const configJson = JSON.parse(configList);

const client = new Discord.Client();
const dcconList = fs.readFileSync('./data/dccon.json');
const dcconGist = 'https://gist.github.com/hdrsd/9bc61d30d46fe16194f7dccebe9f0292';
const dcconJson = JSON.parse(dcconList);


client.on('ready', ()=> {console.log('Server is running now')});

client.on('message', async msg => {
    if(dcconJson.hasOwnProperty(msg)){
        msg.channel.send({file: dcconJson[msg]});
    }
    if(msg.content == '커비챤'){
        msg.channel.send(configJson["kirby"]);
    }
    else if(msg.content == "!리스트"){
        msg.channel.send(dcconGist);
    }
});

client.login(configJson["token"]);
