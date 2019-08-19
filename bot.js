require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(await client.generateInvite());
});

client.on('guildMemberAdd', member => {
    if (member.guild.id !== '599478586658783284') { return; }
    setTimeout(async () => {
        if (member.roles.find(role => role.name === 'Rekrut')) {
            await member.send('Nie zlozyles podania w ciagu 48h , jesli jestes zainteresowany dolaczeniem do gildii, zapraszamy na nasz discord ponownie.').catch(console.error);
            member.kick('Aplikacja nie zostala zlozona poprawnie lub zaakceptowana.');
        }
    }, 1000 * 60 * 60 * 48);
});

client.on('error', err => console.err(err.message));


client.login(process.env.TOKEN);