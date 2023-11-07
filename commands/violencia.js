const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("violencia")
    .setDescription("cometa um ato de violência contra alguém")
    .addUserOption(option => option
        .setName('alvo')
        .setDescription('escolha seu alvo')
        .setRequired(true)
        ),
        
    async execute(interaction) {
        function choose(vioList) {
            var index = Math.floor(Math.random() * vioList.length)
            return vioList[index]
        }
        const alvo = interaction.options.getUser('alvo')
        const vioList = [
        `quebrou o teclado na cabeça de ${alvo}  :keyboard: `,
        `deu uma flechada no joelho de ${alvo}  :bow_and_arrow: `,
        `acertou ${alvo} com um taco de baseball  :cricket_game: `,
        `acertou ${alvo} com uma chave inglesa  :wrench: `,
        `dividiu ${alvo} com um machado, bem ao meio  :axe: `,
        `esmagou ${alvo} no muro com um carro  :blue_car:  vruumm `,
        `deu uma raquetada na nuca de ${alvo}  :badminton: `,
        `tacou uma pedra no olho de ${alvo}  🪨 `,
        `arrancou os cabelos de ${alvo}  🧑‍🦲 `,
        `deu um puxão de calcinha em ${alvo}  👙 `,
        `deu uma tijolada em ${alvo}  🧱 `,
        `mordeu a orelha de ${alvo}  👂 `,
        `tacou um chinelo em ${alvo}  🩴 `,
        `deu uma cadeirada em ${alvo}  🪑 `,
        `tacou um relógio em ${alvo}  🕰️ `,
        `tacou o mouse em ${alvo}  🖱️ `,
        `tacou bosta de vaca em ${alvo}  🐄💩 `,
        `tacou um balde de água gelada em ${alvo}  🪣🌊 `,
        `tacou uma manga em ${alvo}  🥭 `,
        `tacou uma roda em ${alvo}  🛞 `,
        `tacou uma árvore de natal em ${alvo}  🎄 `,
        `deu um golpe de judô em ${alvo}  🥋 `,
        `fez ${alvo} desaparecer com um soco  🪄 `,
        `tacou uma engrenagem em ${alvo}  ⚙️ `,
        `acertou ${alvo} com um boomerang na ida e na volta  🪃 `,
        `passou com um carrinho de compras por cima de ${alvo}  🛒 `,
        `deu uma skatada nas costas de ${alvo}  🛹 `,
        `levou ${alvo} para outro planeta na bica  🛸 `,
        `derrubou a casa de ${alvo} com um trator  🚜 `,
        `prendeu ${alvo} em uma âncora e jogou no mar  ⚓ `,
        `tacou uma vassoura em ${alvo}  🧹 `,
        `tacou um violino em ${alvo}  🎻 `,
        `bateu em ${alvo} com um caixão  ⚰️ `
        ]
        await interaction.reply(` ${interaction.user} ${choose(vioList)}`)
    }
}
