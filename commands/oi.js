const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("oi")
        .setDescription("da enter, duvido"),

    async execute(interaction) {
        await interaction.reply(`olá ${interaction.user} uwu`)
    }
}