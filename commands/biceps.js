const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("biceps")
    .setDescription("mede o tamanho do seu braço"),

    async execute(interaction) {
        const rand = Math.floor(Math.random() * 101)
        await interaction.reply(`${interaction.user} tem ${rand}cm de biceps 👀`)
    }
}