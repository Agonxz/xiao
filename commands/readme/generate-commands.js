const Command = require('../../structures/Command');

module.exports = class GenerateCommandsCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'generate-commands',
			aliases: ['gen-commands', 'generate-cmds', 'gen-cmds'],
			group: 'readme',
			memberName: 'generate-commands',
			description: 'Generates the commands list for Xiao\'s README.',
			details: 'Only the bot owner(s) may use this command.',
			ownerOnly: true,
			guarded: true,
			args: [
				{
					key: 'botList',
					prompt: 'Do you want to generate the bot list version of the command list?',
					type: 'boolean',
					default: false
				}
			]
		});
	}

	run(msg, { botList }) {
		const list = this.client.registry.groups
			.map(g => {
				const commands = g.commands.filter(c => !c.hidden && (botList ? !c.ownerOnly && !c.nsfw : true));
				return `\n### ${g.name}:\n\n${commands.map(c => {
					const extra = `${c.ownerOnly ? ' (Owner-Only)' : ''}${c.nsfw ? ' (NSFW)' : ''}`;
					return `* **${c.name}:** ${c.description}${extra}`;
				}).join('\n')}`;
			});
		const text = `Total: ${this.client.registry.commands.size}\n${list.join('\n')}`;
		return msg.channel.send({ files: [{ attachment: Buffer.from(text), name: 'commands.txt' }] });
	}
};
