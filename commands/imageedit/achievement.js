const Command = require('../../structures/Command');
const snekfetch = require('snekfetch');

module.exports = class AchievementCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'achievement',
            group: 'imageedit',
            memberName: 'achievement',
            description: 'Sends a Minecraft Achievement with the text of your choice.',
            clientPermissions: ['ATTACH_FILES'],
            args: [
                {
                    key: 'text',
                    prompt: 'What should the text of the achievement be?',
                    type: 'string',
                    validate: (text) => {
                        if (text.length < 25) return true;
                        else return 'Text must be under 25 Characters.';
                    }
                }
            ]
        });
    }

    async run(msg, args) {
        const { text } = args;
        const { body } = await snekfetch
            .get('https://www.minecraftskinstealer.com/achievement/a.php')
            .query({
                i: 1,
                h: 'Achievement Get!',
                t: text
            });
        return msg.say({ files: [{ attachment: body, name: 'achievement.png' }] });
    }
};

