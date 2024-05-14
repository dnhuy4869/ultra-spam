const { Client, GatewayIntentBits, AttachmentBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

const DISCORD_TOKEN = "index.js";
const DELAY_TIME = 3000;
const CHANNEL_ID = "1236546229631058040";
const MESSAGE_TO_SEND = "# ||@everyone|| <@875353052528377897><@808835845800853515><@637294780623224853><@702799926312042529><@452008651100782593><@532217212077998090><@1009339930461339668><@840558373107007508><@1111930880450121769> HAVE BEEN ADDED TO MY SPAM WAVE"

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