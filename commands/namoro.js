const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("namoro")
    .setDescription("veja sua chance de namorar uma pessoa")
    .addUserOption(option => option
        .setName('pretendente')
        .setDescription('marque seu pretendente')
        .setRequired(true)
        ),

    async execute(interaction) {
        const pret = interaction.options.getUser('pretendente')
        const rand = Math.floor(Math.random() * 101)
        await interaction.reply(`há ${rand}% de chance de ${interaction.user} e ${pret} namorarem 💘`)
    }
}