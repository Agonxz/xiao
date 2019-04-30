const Command = require('../../structures/Command');
const { MessageEmbed } = require('discord.js');
const request = require('node-superfetch');
const { shorten, formatNumber } = require('../../util/Util');

module.exports = class YuGiOhCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'yu-gi-oh',
			aliases: ['ygo'],
			group: 'search',
			memberName: 'yu-gi-oh',
			description: 'Responds with info on a Yu-Gi-Oh! card.',
			clientPermissions: ['EMBED_LINKS'],
			credit: [
				{
					name: 'Yu-Gi-Oh! Trading Card Game',
					url: 'https://www.yugioh-card.com/en/'
				},
				{
					name: 'YGOPRODeck API',
					url: 'https://db.ygoprodeck.com/api-guide/'
				}
			],
			args: [
				{
					key: 'card',
					prompt: 'What card would you like to get information on?',
					type: 'string'
				}
			]
		});
	}

	async run(msg, { card }) {
		try {
			const { body } = await request
				.get('https://db.ygoprodeck.com/api/v4/cardinfo.php')
				.query({
					name: card,
					la: 'english'
				});
			const data = body[0][0];
			const embed = new MessageEmbed()
				.setColor(0xBE5F1F)
				.setTitle(data.name)
				.setDescription(shorten(data.desc))
				.setAuthor('Yu-Gi-Oh!', 'https://i.imgur.com/AJNBflD.png', 'http://www.yugioh-card.com/')
				.setThumbnail(data.image_url)
				.setFooter(data.id)
				.addField('❯ Type', data.type, true);
			if (data.type.includes('Monster')) {
				embed
					.addField('❯ Race', data.race, true)
					.addField('❯ Attribute', data.attribute, true)
					.addField('❯ Level', data.level, true)
					.addField('❯ ATK', formatNumber(data.atk), true)
					.addField(
						data.type === 'Link Monster' ? '❯ Link Value' : '❯ DEF',
						formatNumber(data.type === 'Link Monster' ? data.linkval : data.def),
						true
					);
			}
			return msg.embed(embed);
		} catch (err) {
			return msg.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
	}
};
