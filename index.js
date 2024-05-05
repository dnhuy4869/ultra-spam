const { Client, GatewayIntentBits, AttachmentBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

const DISCORD_TOKEN = "your token here";
const DELAY_TIME = 3000;
const CHANNEL_ID = "1236546229631058040";
const MESSAGE_TO_SEND = "# <@1099532384061362196><@910493184428228630><@452008651100782593><@840558373107007508>@everyone HAS BEEN SELECTED TO MY SPAM WAVE"

client.login(DISCORD_TOKEN);

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const timer = ms => new Promise(res => setTimeout(res, ms));

const main = async () => {

    while (true) {

        try {

            const channel = await client.channels.fetch(CHANNEL_ID);

            if (channel) {
                channel.send(MESSAGE_TO_SEND);
            }

        } catch (error) {
            console.error("Error when send message");
        }

        await timer(DELAY_TIME);
    }
}

main();