const express = require('express');
const app = express();
const port = 3000;
const chalk = require('chalk')
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log((chalk.blueBright)`Webserver is working`));
const { Client, Intents, MessageButton  } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log((chalk.greenBright)`Logged in as ${client.user.tag}!`);
});

const wait = require('util').promisify(setTimeout);

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply('Pinging');
		await wait(500);
		await interaction.editReply(`Pong is ${client.ws.ping}ms`);
	}
});


const { MessageActionRow, MessageSelectMenu } = require('discord.js');

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'help') {
		const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Categories')
					.addOptions([
						{
							label: 'Image',
							description: 'Shows my Image commands',
							value: 'img',
						},
						{
							label: 'Fun',
							description: 'Shows my Fun commands',
							value: 'fun',
						},
						{
							label: 'Backup',
							description: 'Shows my Backup commands',
							value: 'bckup',
						},
						{
							label: 'Economy',
							description: 'Shows my Economy commands',
							value: 'econ',
						},
						{
							label: 'Moderation',
							description: 'Shows my Moderation commands',
							value: 'mod',
						},
						{
							label: 'Giveaway',
							description: 'Shows my Giveaway commands',
							value: 'gway',
						},
						{
							label: 'Info',
							description: 'Shows my Information commands',
							value: 'inf',
						},
						{
							label: 'Search',
							description: 'Shows my Search commands',
							value: 'sch',
						},
						{
							label: 'Music',
							description: 'Shows my Music commands',
							value: 'msc',
						},
						{
							label: 'Owner',
							description: 'Shows my Owner-only commands',
							value: 'own',
						},
						{
							label: 'Suggestion',
							description: 'Shows my Suggestion commands',
							value: 'sug',
						},
						{
							label: 'Utility',
							description: 'Shows my Utility commands',
							value: 'util',
						},
					]),
			);

		await interaction.reply({ content: 'Welcome to brickbot', components: [row], ephemeral: true  });
	}
});


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'vote') {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('Vote')
					.setURL('https://discordbotlist.com/bots/brickbot')
					.setStyle('LINK'),
			);

		await interaction.reply({ content: 'Click below to vote for me on discordbotlist', components: [row] });
	}
});








client.login(process.env.TOKEN);