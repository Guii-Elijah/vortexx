 
const { RichEmbed } = require("discord.js"); //puxar o discord.js
const randomPuppy = require("random-puppy"); //baixar a livraria 

module.exports = {

    run: async (client, message, args) => {
        const subReddits = ["reddit1", "reddit2","reddit3"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`De: /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}
get help (){
    return{
        name: "meme",
    category: "fun",
    description: "Sends an epic meme",
}}
