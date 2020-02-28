const Command = require('../../structures/Command');
const PhoneCall = require('../../structures/phone/PhoneCall');

module.exports = class PhoneCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'phone',
			aliases: ['phone-call'],
			group: 'other',
			memberName: 'phone',
			description: 'Starts a phone call with a random server.',
			guildOnly: true
		});
	}

	async run(msg) {
		const channels = this.client.channels.cache.filter(channel => channel.type === 'text'
			&& channel.topic
			&& channel.topic.includes('<xiao:phone>')
			&& !msg.guild.channels.cache.has(channel.id));
		if (!channels.size) return msg.reply('No channels currently allow phone calls...');
		const channel = channels.random();
		try {
			const id = `${msg.channel.id}:${channel.id}`;
			this.client.phone.set(id, new PhoneCall(this.client, msg.channel, channel));
			await this.client.phone.get(id).start();
			return null;
		} catch (err) {
			return msg.reply('Failed to start the call. Try again later!');
		}
	}
};
