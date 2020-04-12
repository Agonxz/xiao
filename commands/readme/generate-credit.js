const Command = require('../../structures/Command');
const { sortByName, embedURL } = require('../../util/Util');

module.exports = class GenerateCreditCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'generate-credit',
			aliases: ['gen-credit'],
			group: 'readme',
			memberName: 'generate-credit',
			description: 'Generates the credit list for Xiao\'s README.',
			details: 'Only the bot owner(s) may use this command.',
			ownerOnly: true,
			guarded: true
		});
	}

	run(msg) {
		let credit = [];
		for (const command of this.client.registry.commands.values()) {
			if (!command.credit || command.credit.length <= 1) continue;
			for (const cred of command.credit) {
				const found = credit.find(c => c.name === cred.name);
				if (found) {
					found.commands.push({
						name: command.name,
						reason: cred.reason,
						reasonURL: cred.reasonURL
					});
					continue;
				}
				if (cred.name === 'Dragon Fire') continue;
				credit.push({
					name: cred.name,
					url: cred.url,
					commands: [{
						name: command.name,
						reason: cred.reason,
						reasonURL: cred.reasonURL
					}]
				});
			}
		}
		credit = sortByName(credit, 'name');
		const mapped = credit
			.map(c => `- ${embedURL(c.name, c.url || '')}\n${sortByName(c.commands, 'name').map(cmd => {
				if (!cmd.reasonURL) return `	* ${cmd.name} (${cmd.reason})`;
				return `	* ${cmd.name} (${embedURL(c.reason, c.reasonURL)})`;
			}).join('\n')}`);
		return msg.channel.send({ files: [{ attachment: Buffer.from(mapped.join('\n')), name: 'credit.txt' }] });
	}
};
