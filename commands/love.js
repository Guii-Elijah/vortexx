 const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js"); //vai puxar a pasta functions.js pegando o getMember

module.exports = {
    
    run: async (client, message, args) => {
        // Get a member from mention, id, or username
        let person = getMember(message, args[0]);

        if (!person || message.author.id === person.id) {
            person = message.guild.members
                .filter(m => m.id !== message.author.id)
                .random();
        }

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        const embed = new RichEmbed()
            .setColor("#ffb6c1")
            .addField(`Porcentagem de amor de: **${person.displayName}** e **${message.member.displayName}**`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);

        message.channel.send(embed);
    }
}
  get help () {
    return {
      name: 'love',
      description: 'Adiciona um cargo',
      category: 'fun',
    }
  }
