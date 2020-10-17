const discord = require("discord.js")
const bot = new discord.Client();

bot.login("TOKEN")


bot.on("ready", () => {
    console.log(`${bot.user.username} is ready and online!`)
})

bot.on("message", (message) => {
    if (!message.content.startsWith("-")) return;
    if (message.content.startsWith("-nyancat")) {
        message.channel.send("https://tenor.com/view/nyan-nyancats-nyan-anon-anonymous-anonymous-bites-back-gif-14781718")
    }
})