const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'test') {
    await interaction.reply({ content: 'Hello', ephemeral: true });
  }
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply({ content: 'Pong!', ephemeral: true });
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
							description: 'This is a description',
							value: 'img',
						},
						{
							label: 'Fun',
							description: 'This is also a description',
							value: 'fun',
						},
						{
							label: 'Backup',
							description: 'This is a description',
							value: 'bckup',
						},
						{
							label: 'Economy',
							description: 'This is a description',
							value: 'econ',
						},
						{
							label: 'Moderation',
							description: 'This is a description',
							value: 'mod',
						},
						{
							label: 'Giveaway',
							description: 'This is a description',
							value: 'gway',
						},
						{
							label: 'Info',
							description: 'This is a description',
							value: 'inf',
						},
						{
							label: 'Search',
							description: 'This is a description',
							value: 'sch',
						},
						{
							label: 'Music',
							description: 'This is a description',
							value: 'msc',
						},
						{
							label: 'Owner',
							description: 'This is a description',
							value: 'own',
						},
						{
							label: 'Suggestion',
							description: 'This is a description',
							value: 'sug',
						},
						{
							label: 'Utility',
							description: 'This is a description',
							value: 'util',
						},
					]),
			);

		await interaction.reply({ content: 'Welcome to brickbot', components: [row], ephemeral: true  });
	}
});


client.login(process.env.TOKEN);