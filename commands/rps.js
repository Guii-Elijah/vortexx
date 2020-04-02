const { RichEmbed } = require("discord.js"); //livraria discord.js
const { promptMessage } = require("../../functions.js"); //vai puxar da pasta functions.js o promptMessage

const chooseArr = ["🗻", "📰", "✂"];

module.exports = {

    run: async (client, message, args) => {
        const embed = new RichEmbed()
            .setColor("#ffffff")
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setDescription("Adicione uma reação para batalhar com o bot!")
            .setTimestamp();

        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await m.clearReactions();

        embed
            .setDescription("")
            .addField(result, `${reacted} vs ${botChoice}`);

        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂" && clientChosen === "📰")) {
                    return "Vocễ ganhou!";
            } else if (me === clientChosen) {
                return "Empate!";
            } else {
                return "Você perdeu!";
            }
        }
    }
} 
  get help () {
    return {
    name: "jokenpo",
    category: "fun",
    description: "O jogo jokenpo no discord",
    usage: "rps",
    }
  }
