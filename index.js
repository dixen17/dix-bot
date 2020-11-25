const Discord = require('discord.js')
const bot = new Discord.Client()
const google = require('./commands/google')
const youtube = require('./commands/youtube')
const play = require('./commands/play')

bot.on('message', function (message){

if (play.match(message)) {
return play.action(message)
}

if (google.match(message)) {
return google.action(message)
}

if (youtube.match(message)) {
return youtube.action(message)
}
if (message.content === ('Mollusque mono-neuronal'))
message.reply('⚠⚠⚠attention a ton language⚠⚠⚠')
if (message.content === 'dixen')
message.channel.send('c est le meilleur (*ou presque*)')

bot.on('ready', function () {
bot.user.setActivity('Minecraft ou à KSP').catch(console.error)
})

bot.on('gildMemberAdd', function (member){
member.createDM().then(function (channel){
channel.send('Bienvenu' + member.displayName)
})
})
bot.login(process.env.TOKEN)
