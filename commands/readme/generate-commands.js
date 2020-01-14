const Command = require('../../structures/Command');
const request = require('node-superfetch');

module.exports = class GenerateCommandsCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'generate-commands',
			aliases: ['gen-commands'],
			group: 'readme',
			memberName: 'generate-commands',
			description: 'Generates the commands list for Xiao\'s README.',
			ownerOnly: true,
			guarded: true,
			credit: [
				{
					name: 'Hastebin',
					url: 'https://hastebin.com/about.md',
					reason: 'API'
				}
			]
		});
	}

	async run(msg) {
		const list = this.client.registry.groups
			.map(g => `\n### ${g.name}:\n\n${g.commands.map(c => `* **${c.name}:** ${c.description}`).join('\n')}`);
		const { body } = await request
			.post('https://hastebin.com/documents')
			.send(list.join('\n'));
		return msg.say(`https://hastebin.com/raw/${body.key}`);
	}
};
