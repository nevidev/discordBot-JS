const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("pesca")
    .setDescription("o que será que vc pesca?"),
    
    async execute(interaction) {
        function choose(fishList) {
            var index = Math.floor(Math.random() * fishList.length)
            return fishList[index]
        }
        const fishList = [
        'um salmão  :tropical_fish: ',
        'um baiacú  :blowfish: ',
        'um sapo  :frog: ',
        'um tubarão  :shark: ',
        'um peixe  :fish: ',
        'um peixe-gato  :smirk_cat: ',
        'uma sereia  :mermaid: ',
        'um polvo  :octopus: ',
        'um jacaré  :crocodile: ',
        'uma tartaruga  🐢 ',
        'um golfinho  🐬 ',
        'uma baleia  🐋 ',
        'uma lagartixa  🦎 ',
        'uma foca  🦭 ',
        'uma lontra  🦦 ',
        'uma lagosta  🦞 ',
        'um camarão  🦐 ',
        'um caranguejo  🦀 ',
        'um cocô  💩 ',
        'uma lula  🦑 '
        ]
        await interaction.reply(` :fishing_pole_and_fish: ${interaction.user} você pescou ${choose(fishList)} de ${Math.floor(Math.random() * 151)}cm!`)
    }
}
