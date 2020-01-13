<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="Xiao" src="https://i.imgur.com/R0D0f39.png">  

# Xiao
[![Build Status](https://travis-ci.org/dragonfire535/xiao.svg?branch=master)](https://travis-ci.org/dragonfire535/xiao)
[![Donate on PayPal](https://img.shields.io/badge/paypal-donate-blue.svg)](https://www.paypal.me/dragonfire535)

> This bot is not available for invite.

Xiao is a Discord bot coded in JavaScript with
[discord.js](https://discord.js.org/) using the
[Commando](https://github.com/discordjs/Commando) command framework. With over
300 commands, she is one of the most feature-rich bots out there.

## Table of Contents

- [Fun Information](#fun-information)
- [Installing](#installing)
	* [Before You Begin](#before-you-begin)
	* [Windows](#windows)
	* [Mac](#mac)
	* [Ubuntu and other Debian-based systems](#ubuntu-and-other-debian-based-systems)
- [Related Bots](#related-bots)
- [Commands](#commands)
	* [Utility](#utility)
	* [Discord Information](#discord-information)
	* [Random Response](#random-response)
	* [Single Response](#single-response)
	* [Seeded Randomizers](#seeded-randomizers)
	* [Events](#events)
	* [Search](#search)
	* [Analyzers](#analyzers)
	* [Single-Player Games](#single-player-games)
	* [Multi-Player Games](#multi-player-games)
	* [Image Manipulation](#image-manipulation)
	* [Avatar Manipulation](#avatar-manipulation)
	* [Meme Generators](#meme-generators)
	* [Text Manipulation](#text-manipulation)
	* [Number Manipulation](#number-manipulation)
	* [NSFW](#nsfw)
	* [Other](#other)
	* [Roleplay](#roleplay)
- [Licensing](#licensing)
- [Credit](#credit)

## Fun Information
- 340+ Commands
- 15,000+ lines of JavaScript
- 58,000+ lines of JSON data
- 3 years of development
- 3,000+ commits

## Installing

### Before You Begin

1. Make sure you have installed [Node.js](https://nodejs.org/en/) (you will need **at least v12.0.0**) and [Git](https://git-scm.com/).
2. Clone this repository with `git clone https://github.com/dragonfire535/xiao.git`.
3. Run `cd xiao` to move into the folder that you just created.
4. Create a file named `.env` and fill it out as shown in `.env.example`.

### Windows

1. Open an **ADMIN POWERSHELL** window and run `npm i -g --production windows-build-tools`.
2. [Follow these instructions to install the dependencies for `node-canvas`](https://github.com/Automattic/node-canvas/wiki/Installation:-Windows).
3. [Follow these instructions to install ffmpeg](https://www.wikihow.com/Install-FFmpeg-on-Windows).
4. Run `npm i --production` in the folder you cloned the bot.
5. Run `npm i -g pm2` to install PM2.
6. Run `pm2 start Xiao.js --name xiao` to run the bot.

### Mac

1. Use a real (cheaper!) OS to host your bot.
2. ???
3. Profit.

### Ubuntu and other Debian-based systems

1. Run `apt update`.
2. Run `apt upgrade` to install the latest dependencies of your distro.
3. Run `apt install python` to install python.
4. Run `apt install ffmpeg` to install ffmpeg.
5. [Follow these instructions to install the dependencies for `node-canvas`](https://github.com/Automattic/node-canvas/wiki/Installation%3A-Ubuntu-and-other-Debian-based-systems).
6. Run `npm i --production` in the folder you cloned the bot.
7. Run `npm i -g pm2` to install PM2.
8. Run `pm2 start Xiao.js --name xiao` to run the bot.

## Related Bots

* [Rando Cardrissian](https://github.com/dragonfire535/rando-cardrissian) is a Cards Against Humanity bot, whose features were originally built into Xiao.

## Commands

Total: 353

### Utility:

* **eval:** Executes JavaScript code.
* **changelog:** Responds with the bot's latest 10 commits.
* **credit:** Responds with a command's credits list.
* **donate:** Responds with the bot's donation links.
* **help:** Displays a list of available commands, or detailed information for a specific command.
* **info:** Responds with detailed bot information.
* **invite:** Responds with the bot's invite links.
* **options:** Responds with a list of server options.
* **ping:** Checks the bot's ping to the Discord server.

### Discord Information:

* **avatar:** Responds with a user's avatar.
* **channel:** Responds with detailed information on a channel.
* **discriminator:** Searches for other users with a certain discriminator.
* **emoji-image:** Responds with an emoji's full-scale image.
* **emoji-list:** Responds with a list of the server's custom emoji.
* **emoji:** Responds with detailed information on an emoji.
* **first-message:** Responds with the first message ever sent to a channel.
* **id:** Responds with a user's ID.
* **message-source:** Responds with a codeblock containing a message's contents.
* **message:** Responds with detailed information on a message.
* **role:** Responds with detailed information on a role.
* **server:** Responds with detailed information on the server.
* **user:** Responds with detailed information on a user.

### Random Response:

* **8-ball:** Asks your question to the Magic 8 Ball.
* **advice:** Responds with a random bit of advice.
* **axis-cult:** Responds with a teaching of the Axis Cult.
* **bird:** Responds with a random image of a bird.
* **cat-fact:** Responds with a random cat fact.
* **cat:** Responds with a random cat image.
* **charlie-charlie:** Asks your question to Charlie.
* **choose:** Chooses between options you provide.
* **chuck-norris:** Responds with a random Chuck Norris joke.
* **coin:** Flips a coin.
* **compliment:** Compliments a user.
* **dog-fact:** Responds with a random dog fact.
* **dog:** Responds with a random dog image.
* **draw-cards:** Draws a random hand of playing cards.
* **duck:** Responds with a random duck image.
* **fact-core:** Responds with a random Fact Core quote.
* **fact:** Responds with a random fact.
* **fidget:** Responds with a random image of Fidget.
* **fortune:** Responds with a random fortune.
* **fox:** Responds with a random fox image.
* **github-zen:** Responds with a random GitHub design philosophy.
* **joke:** Responds with a random joke.
* **karen:** Responds with a random image of Karen.
* **kiss-marry-kill:** Determines who to kiss, who to marry, and who to kill.
* **light-novel-title:** Responds with a randomly generated Light Novel title.
* **magic-conch:** Asks your question to the Magic Conch.
* **meme:** Responds with a random meme.
* **name:** Responds with a random name, with the gender of your choice.
* **number-fact:** Responds with a random fact about a specific number.
* **offspring:** Determines if your new child will be a boy or a girl.
* **opinion:** Determines the opinion on something.
* **oracle-turret:** Responds with a random Oracle Turret quote.
* **pun:** Responds with a random pun.
* **quantum-coin:** Flips a coin that lands on some form of nothing.
* **quote:** Responds with a random quote.
* **random-user:** Randomly chooses a member of the server.
* **rate:** Rates something.
* **roast:** Roasts a user.
* **roll:** Rolls a dice with a maximum value of your choice.
* **security-key:** Responds with a random security key.
* **shiba:** Responds with a random image of a Shiba Inu.
* **shower-thought:** Responds with a random shower thought, directly from r/Showerthoughts.
* **smw-level:** Responds with a random Super Mario World level name.
* **subreddit:** Responds with a random post from a subreddit.
* **suggest-command:** Suggests a random command for you to try.
* **superpower:** Responds with a random superpower.
* **this-for-that:** So, basically, it's like a bot command for this dumb meme.
* **waifu:** Responds with a randomly generated waifu and backstory.
* **would-you-rather:** Responds with a random "Would you rather ...?" question.
* **xiao:** Responds with a random image of Xiao Pai.

### Single Response:

* **can-you-not:** Can YOU not?
* **dark-light:** Determines whether you use dark or light theme.
* **eat-pant:** Eat pant.
* **eggs-get-laid:** Sends the ultimate roast.
* **fly:** Sends a fake fly that looks surprisngly real.
* **give-flower:** Gives Xiao Pai a flower.
* **hi:** Hello.
* **isnt-joke:** Isn't joke...
* **its-joke:** It's joke!
* **just-do-it:** Sends a link to the "Just Do It!" motivational speech.
* **kazuma-kazuma:** Hai, Kazuma desu.
* **lenny:** Responds with the lenny face.
* **no-u:** no u
* **spam:** Responds with a picture of Spam.
* **suicide-hotline:** Responds with the phone number for the Suicide Hotline.
* **tableflip:** Flips a table... With animation!
* **unflip:** Unflips a flipped table.
* **wynaut:** Why not? Wynaut?
* **yoff:** Posts a picture that truly defines modern art.

### Seeded Randomizers:

* **butt:** Determines a user's butt quality.
* **coolness:** Determines a user's coolness.
* **guess-looks:** Guesses what a user looks like.
* **iq:** Determines a user's IQ.
* **psycho-pass:** Determines your Crime Coefficient.
* **ship:** Ships two users together.

### Events:

* **apod:** Responds with today's Astronomy Picture of the Day.
* **calendar:** Responds with today's holidays.
* **days-until:** Responds with how many days there are until a certain date.
* **doomsday-clock:** Responds with the current time of the Doomsday Clock.
* **friday-the-13th:** Determines if today is Friday the 13th.
* **google-doodle:** Responds with a Google Doodle, either the latest one or a random one from the past.
* **horoscope:** Responds with today's horoscope for a specific Zodiac sign.
* **humble-bundle:** Responds with the current Humble Bundle.
* **is-tuesday:** Determines if today is Tuesday.
* **neko-atsume-password:** Responds with today's Neko Atsume password.
* **time:** Responds with the current time in a particular location.
* **today-in-history:** Responds with an event that occurred today in history.

### Search:

* **anime:** Searches AniList for your query, getting anime results.
* **book:** Searches Google Books for a book.
* **bulbapedia:** Searches Bulbapedia for your query.
* **character:** Searches AniList for your query, getting character results.
* **define:** Defines a word.
* **derpibooru:** Responds with an image from Derpibooru.
* **deviantart:** Responds with an image from a DeviantArt section, with optional query.
* **giphy:** Searches Giphy for your query.
* **github:** Responds with information on a GitHub repository.
* **google-autofill:** Responds with a list of the Google Autofill results for a particular query.
* **google:** Searches Google for your query.
* **gravatar:** Responds with the Gravatar for an email.
* **http-cat:** Responds with a cat for an HTTP status code.
* **http-dog:** Responds with a dog for an HTTP status code.
* **imgur:** Searches Imgur for your query.
* **itunes:** Searches iTunes for your query.
* **jisho:** Defines a word, but with Japanese.
* **kickstarter:** Searches Kickstarter for your query.
* **know-your-meme:** Searches Know Your Meme for your query.
* **league-of-legends:** Responds with information on a League of Legends champion.
* **manga:** Searches AniList for your query, getting manga results.
* **map:** Responds with a map of a specific location.
* **mayo-clinic:** Searches Mayo Clinic for your query.
* **mdn:** Searches MDN for your query.
* **movie:** Searches TMDB for your query, getting movie results.
* **nasa:** Searches NASA's image archive for your query.
* **neopet:** Responds with the image of a specific Neopet.
* **neopets-item:** Responds with information on a specific Neopets item.
* **npm:** Responds with information on an NPM package.
* **osu:** Responds with information on an osu! user.
* **periodic-table:** Finds an element on the periodic table.
* **pokedex:** Searches the Pokédex for a Pokémon.
* **recipe:** Searches for recipes based on your query.
* **reddit:** Responds with information on a Reddit user.
* **rotten-tomatoes:** Searches Rotten Tomatoes for your query.
* **rule:** Responds with a rule of the internet.
* **safebooru:** Responds with an image from Safebooru, with optional query.
* **soundcloud:** Searches SoundCloud for your query.
* **stack-overflow:** Searches Stack Overflow for your query.
* **steam:** Searches Steam for your query.
* **stocks:** Responds with the current stocks for a specific symbol.
* **tenor:** Searches Tenor for your query.
* **tumblr:** Responds with information on a Tumblr blog.
* **tv-show:** Searches TMDB for your query, getting TV show results.
* **twitter:** Responds with information on a Twitter user.
* **urban:** Defines a word, but with Urban Dictionary.
* **usps-tracking:** Gets tracking information for a package shipped via USPS.
* **vocadb:** Searches VocaDB for your query.
* **wattpad:** Searches Wattpad for your query.
* **weather:** Responds with weather information for a specific location.
* **wikia:** Searches a specific Wikia wiki for your query.
* **wikihow:** Searches Wikihow for your query.
* **wikipedia:** Searches Wikipedia for your query.
* **xkcd:** Responds with an XKCD comic, either today's, a random one, or a specific one.
* **youtube:** Searches YouTube for your query.
* **yu-gi-oh:** Responds with info on a Yu-Gi-Oh! card.

### Analyzers:

* **age:** Responds with how old someone born in a certain year is.
* **character-count:** Responds with the character count of text.
* **chinese-zodiac:** Responds with the Chinese Zodiac Sign for the given year.
* **face:** Determines the race, gender, and age of a face.
* **gender:** Determines the gender of a name.
* **read-qr-code:** Reads a QR Code.
* **scrabble-score:** Responds with the scrabble score of a word.
* **severe-toxicity:** Determines the toxicity of text, but less sensitive to milder language.
* **toxicity:** Determines the toxicity of text.
* **what-anime:** Determines what anime a screenshot is from.
* **zodiac-sign:** Responds with the Zodiac Sign for the given month/day.

### Single-Player Games:

* **blackjack:** Play a game of blackjack.
* **box-choosing:** Do you believe that there are choices in life? Taken from Higurashi Chapter 4.
* **captcha:** Try to guess what the captcha says.
* **chance:** Attempt to win with a 1 in 1000 (or your choice) chance of winning.
* **doors:** Open the right door, and you win the money! Make the wrong choice, and you get the fire!
* **fishy:** Go fishing.
* **google-feud:** Attempt to determine the top suggestions for a Google search.
* **hangman:** Prevent a man from being hanged by guessing a word as fast as you can.
* **hunger-games:** Simulate a Hunger Games match with up to 24 tributes.
* **lottery:** Attempt to win the lottery with 6 numbers.
* **math-quiz:** See how fast you can answer a math problem in a given time limit.
* **quiz:** Answer a quiz question.
* **rock-paper-scissors:** Play Rock-Paper-Scissors.
* **roulette:** Play a game of roulette.
* **slots:** Play a game of slots.
* **sorting-hat:** Take a quiz to determine your Hogwarts house.
* **typing-test:** See how fast you can type a sentence in a given time limit.
* **whos-that-pokemon:** Guess who that Pokémon is.

### Multi-Player Games:

* **balloon-pop:** Don't let yourself be the last one to pump the balloon before it pops!
* **battle:** Engage in a turn-based battle against another user or the AI.
* **emoji-emoji-revolution:** Can you type arrow emoji faster than anyone else has ever typed them before?
* **gunfight:** Engage in a western gunfight against another user. High noon.
* **mafia-role:** Displays your current role during Mafia games.
* **mafia:** Who is the Mafia? Who is the detective? Will the Mafia kill them all?
* **quiz-duel:** Answer a series of quiz questions against an opponent.
* **russian-roulette:** Who will pull the trigger and die first?
* **tic-tac-toe:** Play a game of tic-tac-toe with another user.
* **word-chain:** Try to come up with words that start with the last letter of your opponent's word.

### Image Manipulation:

* **achievement:** Sends a Minecraft achievement with the text of your choice.
* **approved:** Draws an "approved" stamp over an image or a user's avatar.
* **circle:** Draws an image or a user's avatar as a circle.
* **color:** Sends an image of the color you choose.
* **contrast:** Draws an image or a user's avatar but with contrast.
* **create-qr-code:** Converts text to a QR Code.
* **distort:** Draws an image or a user's avatar but distorted.
* **fire:** Draws a fiery border over an image or a user's avatar.
* **frame:** Draws a frame around an image or a user's avatar.
* **glitch:** Draws an image or a user's avatar but glitched.
* **greyscale:** Draws an image or a user's avatar in greyscale.
* **ifunny:** Draws an image with the iFunny logo.
* **invert:** Draws an image or a user's avatar but inverted.
* **minecraft-skin:** Sends the Minecraft skin for a user.
* **needs-more-jpeg:** Draws an image or a user's avatar as a low quality JPEG.
* **newspaper:** Creates a fake newspaper with the headline and body of your choice.
* **pixelize:** Draws an image or a user's avatar pixelized.
* **pokemon-fusion:** Fuses two Generation I Pokémon together.
* **rainbow:** Draws a rainbow over an image or a user's avatar.
* **rejected:** Draws a "rejected" stamp over an image or a user's avatar.
* **robohash:** Creates a robot based on the text you provide.
* **sepia:** Draws an image or a user's avatar in sepia.
* **shields-io-badge:** Creates a badge from shields.io.
* **silhouette:** Draws a silhouette of an image or a user's avatar.
* **square:** Draws an image or a user's avatar as a square.
* **tint:** Draws an image or a user's avatar but tinted a specific color.

### Avatar Manipulation:

* **avatar-fusion:** Draws a a user's avatar over a user's avatar.
* **bob-ross:** Draws a user's avatar over Bob Ross' canvas.
* **challenger:** Draws a user's avatar over Super Smash Bros.'s "Challenger Approaching" screen.
* **dexter:** Draws a user's avatar over the screen of Dexter from Pokémon.
* **hat:** Draws a hat over a user's avatar.
* **he-lives-in-you:** Draws a user's avatar over Simba from The Lion King's reflection.
* **hearts:** Draws hearts around a user's avatar.
* **i-have-the-power:** Draws a user's avatar over He-Man's face.
* **look-at-this-photograph:** Draws a user's avatar over Nickelback's photograph.
* **look-what-karen-have:** Draws a user's avatar over Karen's piece of paper.
* **rip:** Draws a user's avatar over a gravestone.
* **sip:** Draws a user's avatar sipping tea.
* **steam-card:** Draws a user's avatar on a Steam Trading Card.
* **steam-now-playing-classic:** Draws a user's avatar over a Steam "now playing" notification (old skin).
* **steam-now-playing:** Draws a user's avatar over a Steam "now playing" notification.
* **triggered:** Draws a user's avatar over the "Triggered" meme.
* **wanted:** Draws a user's avatar over a wanted poster.
* **yu-gi-oh-token:** Draws a user's avatar over a blank Yu-Gi-Oh! Token card.

### Meme Generators:

* **3000-years:** Draws a user's avatar over Pokémon's "It's been 3000 years" meme.
* **be-like-bill:** Sends a "Be Like Bill" meme with the name of your choice.
* **beautiful:** Draws a user's avatar over Gravity Falls' "Oh, this? This is beautiful." meme.
* **cursed-sponge:** Sends a cursed sponge duplicated however many times you want.
* **dear-liberals:** Sends a "Dear Liberals" meme with words of your choice.
* **demotivational:** Draws an image or a user's avatar and the text you specify as a demotivational poster.
* **distracted-boyfriend:** Draws three user's avatars over the "Distracted Boyfriend" meme.
* **drakeposting:** Draws two user's avatars over the "Drakeposting" meme.
* **food-broke:** Draws a user's avatar over the "Food Broke" meme.
* **girl-worth-fighting-for:** Draws a user's avatar as the object of Ling's affection.
* **gru-plan:** Sends a Gru's Plan meme with steps of your choice.
* **illegal:** Makes President Trump make your text illegal.
* **kyon-gun:** Draws an image or a user's avatar behind Kyon shooting a gun.
* **lisa-presentation:** Sends a "Lisa Presentation" meme with the presentation of your choice.
* **meme-gen:** Sends a meme with the text and background of your choice.
* **new-password:** Sends a "Weak Password/Strong Password" meme with the passwords of your choice.
* **nike-ad:** Sends a "Believe in Something" Nike Ad meme with the text of your choice.
* **plankton-plan:** Sends a Plankton's Plan meme with steps of your choice.
* **sora-selfie:** Draws an image or a user's avatar behind Sora taking a selfie.
* **spongebob-burn:** Sends a "Spongebob Throwing Something into a Fire" meme with words of your choice.
* **thug-life:** Draws "Thug Life" over an image or a user's avatar.
* **to-be-continued:** Draws an image with the "To Be Continued..." arrow.
* **ultimate-tattoo:** Draws a user's avatar as "The Ultimate Tattoo".
* **vietnam-flashbacks:** Edits Vietnam flashbacks behind an image or a user's avatar.
* **worthless:** Draws a user's avatar over Gravity Falls' "Oh, this? This is worthless." meme.

### Text Manipulation:

* **base64:** Converts text to/from Base64.
* **binary:** Converts text to binary.
* **braille:** Converts text to braille.
* **brony-speak:** Converts text to brony speak.
* **clap:** Sends 👏 text 👏 like 👏 this.
* **cow-say:** Makes a cow say your text.
* **cursive:** Converts text to cursive.
* **dvorak:** Converts text to Dvorak encoding.
* **embed:** Sends text in an embed.
* **emojify:** Converts text to emoji form.
* **fancy:** Converts text to fancy letters.
* **hex:** Converts text to hex.
* **latlmes:** Creates a Latlmes fake link that redirects to a rickroll.
* **lmgtfy:** Creates a LMGTFY link with the query you provide.
* **lowercase:** Converts text to lowercase.
* **md5:** Creates a hash of text with the MD5 algorithm.
* **mocking:** SenDs TexT lIkE ThiS.
* **morse:** Converts text to morse code.
* **nobody-name:** Converts a name into the Organization XIII style.
* **owo:** OwO.
* **pig-latin:** Converts text to pig latin.
* **pirate:** Converts text to pirate.
* **portal-send:** Send a message to a portal channel.
* **repeat:** Repeat text over and over and over and over (etc).
* **reverse:** Reverses text.
* **say:** Make me say what you want, master.
* **sha-1:** Creates a hash of text with the SHA-1 algorithm.
* **sha-256:** Creates a hash of text with the SHA-256 algorithm.
* **ship-name:** Creates a ship name from two names.
* **shuffle:** Shuffles text.
* **snake-speak:** Convertsssss text to sssssnake ssssspeak.
* **spoiler-letter:** Sends text with each and every character as an individual spoiler.
* **superscript:** Converts text to tiny text.
* **tebahpla:** Reverses the alphabet of text.
* **temmie:** Converts text to Temmie speak.
* **translate:** Translates text to a specific language.
* **unspoiler:** Removes all spoilers from a message.
* **uppercase:** Converts text to uppercase.
* **upside-down:** Flips text upside-down.
* **url-decode:** Decodes URL characters to regular characters.
* **url-encode:** Encodes text to URL-friendly characters.
* **webhook:** Posts a message to the webhook defined in the bot owner's `process.env`.
* **yoda:** Converts text to Yoda speak.
* **zalgo:** Converts text to zalgo.

### Number Manipulation:

* **currency:** Converts currency from one currency to another.
* **final-grade:** Determines the grade you need to make on your final to get your desired course grade.
* **grade:** Determines your grade on an assignment on an 100-point scale.
* **gravity:** Determines weight on another planet.
* **math:** Evaluates a math expression.
* **prime:** Determines if a number is a prime number.
* **roman:** Converts a number to roman numerals.
* **scientific-notation:** Converts a number to scientific notation.
* **units:** Converts units to/from other units.

### NSFW:

* **brazzers:** Draws an image with the Brazzers logo in the corner.
* **danbooru:** Responds with an image from Danbooru, with optional query.
* **dick:** Determines your dick size.
* **flickr:** Searches Flickr for your query... Maybe.

### Other:

* **cleverbot:** Talk to Cleverbot.
* **prune:** Deletes up to 99 messages from the current channel.
* **rename-all:** Renames every member of the server.
* **strawpoll:** Generates a Strawpoll with the options you provide.

### Roleplay:

* **blush:** Blushes at a user.
* **bro-hoof:** Gives a user a bro hoof.
* **eat:** Feeds a user.
* **fist-bump:** Fist-bumps a user.
* **high-five:** High Fives a user.
* **hold-hands:** Holds hands with a user.
* **hug:** Hugs a user.
* **kill:** Kills a user.
* **kiss:** Kisses a user.
* **pat:** Pats a user.
* **poke:** Pokes a user.
* **punch:** Punches a user.
* **slap:** Slaps a user.
* **sleep:** Puts a user to sleep.
* **wake-up:** Wakes up a user.
* **wave:** Waves at a user.
* **wink:** Winks at a user.

## Licensing

The bot is licensed under the GPL 3.0 license. See the file `LICENSE` for more
information. If you plan to use any part of this source code in your own bot, I
would be grateful if you would include some form of credit somewhere.

## Credit

Xiao has a _lot_ of commands, and many of those commands use data or APIs from
outside sources. This list is a list of every single site, user, and API used
to make Xiao possible, and the commands they're used in. Thank you to everyone
here.

> Note: This _does not_ indicate support for the source. I might like them, I might detest them.

- [Face++ Cognitive Services](https://www.faceplusplus.com/)
	* face
- [Genderize.io](https://genderize.io/)
	* gender
- [QR Code Generator's QR code API](http://goqr.me/api/)
	* read-qr-code
	* create-qr-code
- [Scrabble](https://scrabble.hasbro.com/en-us)
	* scrabble-score
- [Perspective API](https://www.perspectiveapi.com/#/)
	* severe-toxicity
	* toxicity
- [WAIT: What Anime Is This?](https://trace.moe/)
	* what-anime
- [Bob Ross](https://www.bobross.com/)
	* bob-ross
- [Super Smash Bros.](https://www.smashbros.com/en_US/index.html)
	* challenger
- [Pokémon TV](https://www.pokemon.com/us/pokemon-episodes/)
	* dexter
	* wynaut
- [ClipArtHut](http://www.cliparthut.com/)
	* hat
- [PNG Arts](https://www.pngarts.com/)
	* hat
	* frame
- [misskatecuttables.com](https://www.misskatecuttables.com/)
	* hat
- [WorldArtsMe](http://worldartsme.com/)
	* hat
- [PinClipart](https://www.pinclipart.com/)
	* hat
- [RedBubble - Akbar Mna](https://www.redbubble.com/en/people/akbarmna/shop)
	* hat
- [KONOSUBA -God's blessing on this wonderful world!](http://konosuba.com/)
	* hat
	* axis-cult
	* kazuma-kazuma
- [The Lion King](https://movies.disney.com/the-lion-king)
	* he-lives-in-you
- [Jessica Knable](https://picsart.com/jessicaknable)
	* hearts
- [Mattel](https://www.mattel.com/en-us)
	* i-have-the-power
	* 8-ball
- [Nickelback - Photograph](https://www.youtube.com/watch?v=BB0DU4DoPP4)
	* look-at-this-photograph
- [KINMOZA!](http://www.kinmosa.com/)
	* look-what-karen-have
	* karen
	* eggs-get-laid
- [vician](https://www.123rf.com/profile_vician)
	* rip
- [CoolClips.com](http://search.coolclips.com/)
	* sip
- [Steam](https://store.steampowered.com/)
	* steam-card
	* steam-now-playing-classic
	* steam-now-playing
	* steam
- [SinKillerJ Tachikawa](https://www.deviantart.com/sinkillerj)
	* steam-card
- [Google Noto Fonts](https://www.google.com/get/noto/)
	* steam-card
	* steam-now-playing-classic
	* steam-now-playing
	* be-like-bill
	* demotivational
	* gru-plan
	* lisa-presentation
	* new-password
	* nike-ad
	* plankton-plan
	* spongebob-burn
	* periodic-table
- [NotAWeebDev/Misaki](https://github.com/NotAWeebDev/Misaki)
	* triggered
- [Tim's Printables](https://www.timvandevall.com/)
	* wanted
- [Yu-Gi-Oh! Trading Card Game](https://www.yugioh-card.com/en/)
	* yu-gi-oh-token
	* yu-gi-oh
- [Astronomy Picture of the Day](https://apod.nasa.gov/apod/astropix.html)
	* apod
- [Google Calendar API](https://developers.google.com/calendar/)
	* calendar
- [Bulletin of the Atomic Scientists](https://thebulletin.org/)
	* doomsday-clock
- [Google Doodles](https://www.google.com/doodles)
	* google-doodle
- [The Astrologer by Kelli Fox](https://new.theastrologer.com/)
	* horoscope
- [Humble Bundle](https://www.humblebundle.com/)
	* humble-bundle
- [Neko Atsume: Kitty Collector](http://nekoatsume.com/en/)
	* neko-atsume-password
- [List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
	* time
- [Neopets](http://www.neopets.com/)
	* time
	* neopet
	* neopets-item
- [muffinlabs - Today in History](http://history.muffinlabs.com/)
	* today-in-history
- [Minecraft](https://www.minecraft.net/en-us/)
	* achievement
	* minecraft-skin
- [Minecraft Achievement Generator](https://www.minecraftskinstealer.com/achievement/)
	* achievement
- [Minecraftia Font](https://www.dafont.com/minecraftia.font)
	* achievement
- [Redeeming God](https://redeeminggod.com/)
	* approved
- [susi1959 - PicMix](https://en.picmix.com/profile/susi1959)
	* fire
- [iFunny](https://ifunny.co/)
	* ifunny
- [Mojang API](https://wiki.vg/Mojang_API)
	* minecraft-skin
- [The Newspaper Clipping Generator](https://www.fodey.com/generators/newspaper/snippet.asp)
	* newspaper
- [Pokémon](https://www.pokemon.com/us/)
	* pokemon-fusion
	* pokedex
	* whos-that-pokemon
- [Pokemon Fusion](https://pokemon.alexonsager.net/)
	* pokemon-fusion
- [People PNG](https://peoplepng.com/)
	* rejected
- [RoboHash](https://robohash.org/)
	* robohash
- [Shields.io](https://shields.io/)
	* shields-io-badge
- [Pokémon X and Pokémon Y](https://www.pokemon.com/us/pokemon-video-games/pokemon-x-and-pokemon-y/)
	* 3000-years
- [Gravity Falls](https://disneynow.go.com/shows/gravity-falls)
	* beautiful
	* worthless
- [Spongebob Squarepants](https://www.nick.com/shows/spongebob-squarepants)
	* cursed-sponge
- [Turning Point USA](https://www.tpusa.com/)
	* dear-liberals
- [Oswald Font](https://fonts.google.com/specimen/Oswald)
	* dear-liberals
- [Antonio Guillem](http://antonioguillem.com/)
	* distracted-boyfriend
- [Drake - Hotline Bling](https://youtu.be/uxpDa-c-4Mc)
	* drakeposting
- [@liltusk](https://twitter.com/liltusk)
	* food-broke
- [Mulan](https://movies.disney.com/mulan)
	* girl-worth-fighting-for
- [Despicable Me](http://www.despicable.me/)
	* gru-plan
- [The Melancholy of Haruhi Suzumiya](http://www.haruhi.tv/)
	* kyon-gun
- [The Simpsons](http://www.simpsonsworld.com/)
	* lisa-presentation
	* eat-pant
- [Impact Font](https://www.wfonts.com/font/impact)
	* meme-gen
- [Nike](https://www.nike.com/)
	* nike-ad
- [Spongebob](https://www.nick.com/shows/spongebob-squarepants)
	* plankton-plan
	* spongebob-burn
- [Kingdom Hearts](https://www.kingdomhearts.com/home/us/)
	* sora-selfie
	* nobody-name
- [pngimg.com](https://pngimg.com/)
	* thug-life
- [JoJo's Bizzare Adventure](http://www.araki-jojo.com/)
	* to-be-continued
- [Deathbulge](http://deathbulge.com/comics)
	* ultimate-tattoo
- [Horst Faas](https://en.wikipedia.org/wiki/Horst_Faas)
	* vietnam-flashbacks
- [PAC-MAN Party](http://pacman.com/en/pac-man-games/pac-man-party)
	* balloon-pop
- [Open Trivia DB](https://opentdb.com/)
	* quiz-duel
	* quiz
- [Moby Word Lists by Grady Ward](http://www.gutenberg.org/ebooks/3201)
	* word-chain
	* hangman
- [Brazzers](https://www.brazzers.com/)
	* brazzers
- [Danbooru](https://danbooru.donmai.us/)
	* danbooru
- [Flickr API](https://www.flickr.com/services/api/)
	* flickr
- [Foreign exchange rates API](https://exchangeratesapi.io/)
	* currency
- [RogerHub Final Grade Calculator](https://rogerhub.com/final-grade-calculator/)
	* final-grade
- [Planetary Fact Sheet - Ratio to Earth Values](https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_ratio.html)
	* gravity
- [Cleverbot API](https://www.cleverbot.com/api/)
	* cleverbot
- [Straw Poll API](https://github.com/strawpoll/strawpoll/wiki/API)
	* strawpoll
- [Advice Slip](https://adviceslip.com/)
	* advice
- [Axis Order Bot](https://www.reddit.com/r/axisorderbot/wiki/index)
	* axis-cult
- [shibe.online](https://shibe.online/)
	* bird
	* shiba
- [random.cat](https://random.cat/)
	* cat
- [Chuck Norris](https://chucknorris.com/)
	* chuck-norris
- [The Internet Chuck Norris Database API](http://www.icndb.com/api/)
	* chuck-norris
- [Dog API](https://dog.ceo/dog-api/)
	* dog
- [Random-d.uk](https://random-d.uk/)
	* duck
- [Portal 2](http://www.thinkwithportals.com/)
	* fact-core
	* oracle-turret
- [Wikipedia](https://www.wikipedia.org/)
	* fact
	* wikipedia
- [Dust: An Elysian Tail](https://www.noogy.com/main.html)
	* fidget
- [Imgur API](https://apidocs.imgur.com/)
	* fidget
	* karen
	* xiao
	* blush
	* bro-hoof
	* eat
	* fist-bump
	* high-five
	* hold-hands
	* hug
	* kill
	* kiss
	* pat
	* poke
	* punch
	* slap
	* sleep
	* wake-up
	* wave
	* wink
	* imgur
- [RandomFox](https://randomfox.ca/)
	* fox
- [GitHub Zen API](https://api.github.com/zen)
	* github-zen
- [LN title generator](https://salty-salty-studios.com/shiz/ln.php)
	* light-novel-title
- [SpongeBob SquarePants](https://www.nick.com/shows/spongebob-squarepants)
	* magic-conch
- [Reddit](https://www.reddit.com/)
	* meme
	* shower-thought
	* subreddit
	* reddit
- [Numbers API](http://numbersapi.com/)
	* number-fact
- [r/Showerthoughts](https://www.reddit.com/r/showerthoughts)
	* shower-thought
- [Super Mario World](https://www.nintendo.co.jp/n02/shvc/mw/index.html)
	* smw-level
- [List of Super Mario World levels](http://old.smwiki.net/wiki/List_of_Super_Mario_World_levels)
	* smw-level
- [Superpower Wiki](https://powerlisting.fandom.com/wiki/Superpower_Wiki)
	* superpower
- [Wait, what does your startup do?](http://itsthisforthat.com/)
	* this-for-that
- [This Waifu Does Not Exist](https://www.thiswaifudoesnotexist.net/)
	* waifu
- [Rune Factory 4](http://www.runefactory4.com/index1.html)
	* xiao
	* give-flower
- [AniList API](https://anilist.gitbook.io/anilist-apiv2-docs/)
	* anime
	* character
	* manga
- [Google Books API](https://developers.google.com/books/)
	* book
- [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Main_Page)
	* bulbapedia
- [Merriam-Webster's Collegiate® Dictionary](https://dictionaryapi.com/products/api-collegiate-dictionary)
	* define
- [Derpibooru](https://derpibooru.org/)
	* derpibooru
- [DeviantArt API](https://www.deviantart.com/developers/)
	* deviantart
- [GIPHY API](https://developers.giphy.com/)
	* giphy
- [GitHub API](https://developer.github.com/v3/)
	* github
	* changelog
- [Google](https://www.google.com/)
	* google-autofill
	* google
	* google-feud
- [Google Custom Search API](https://cse.google.com/cse/all)
	* google
- [LMGTFY](https://lmgtfy.com/)
	* google
	* lmgtfy
- [Gravatar](https://en.gravatar.com/)
	* gravatar
- [HTTP Cats](https://http.cat/)
	* http-cat
- [HTTP Status Dogs](https://httpstatusdogs.com/)
	* http-dog
- [iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)
	* itunes
- [List of ISO 639-2 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes)
	* itunes
- [Jisho](https://jisho.org/)
	* jisho
- [Kickstarter](https://www.kickstarter.com/)
	* kickstarter
- [Know Your Meme](https://knowyourmeme.com/)
	* know-your-meme
- [Riot Games API](https://developer.riotgames.com/)
	* league-of-legends
- [Maps Static API](https://developers.google.com/maps/documentation/maps-static/intro)
	* map
- [Mayo Clinic](https://www.mayoclinic.org/)
	* mayo-clinic
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
	* mdn
- [The Movie Database API](https://www.themoviedb.org/documentation/api)
	* movie
	* tv-show
- [NASA Open APIs](https://api.nasa.gov/)
	* nasa
- [JellyNeo Item Database](https://items.jellyneo.net/)
	* neopets-item
- [npm](https://www.npmjs.com/)
	* npm
- [osu!api](https://github.com/ppy/osu-api/wiki)
	* osu
- [Bowserinator/Periodic-Table-JSON](https://github.com/Bowserinator/Periodic-Table-JSON)
	* periodic-table
- [PokéAPI](https://pokeapi.co/)
	* pokedex
	* whos-that-pokemon
- [Serebii.net](https://www.serebii.net/index2.shtml)
	* pokedex
	* whos-that-pokemon
- [Recipe Puppy API](http://www.recipepuppy.com/about/api/)
	* recipe
- [Rotten Tomatoes](https://www.rottentomatoes.com/)
	* rotten-tomatoes
- [Safebooru](https://safebooru.org/)
	* safebooru
- [SoundCloud API](https://developers.soundcloud.com/)
	* soundcloud
- [Stack Exchange API](https://api.stackexchange.com/docs)
	* stack-overflow
- [Alpha Vantage](https://www.alphavantage.co/)
	* stocks
- [Tenor API](https://tenor.com/gifapi/documentation)
	* tenor
- [Tumblr API](https://www.tumblr.com/docs/en/api/v2)
	* tumblr
- [Twitter API](https://developer.twitter.com/en/docs.html)
	* twitter
- [Urban Dictionary API](https://github.com/zdict/zdict/wiki/Urban-dictionary-API-documentation)
	* urban
- [USPS](https://www.usps.com/)
	* usps-tracking
- [VocaDB Web API](https://vocadb.net/swagger/ui/index)
	* vocadb
- [Wattpad API](https://www.wattpad.com/developer/docs/api)
	* wattpad
- [OpenWeatherMap API](https://openweathermap.org/api)
	* weather
- [FANDOM](https://www.fandom.com/)
	* wikia
- [wikiHow](https://www.wikihow.com/Main-Page)
	* wikihow
- [xkcd](https://xkcd.com/)
	* xkcd
- [YouTube Data API](https://developers.google.com/youtube/v3/)
	* youtube
- [YGOPRODeck API](https://db.ygoprodeck.com/api-guide/)
	* yu-gi-oh
- [iCrawl/Tohru](https://github.com/iCrawl/Tohru/blob/master/src/commands/fun/butts.js)
	* butt
- [PSYCHO-PASS](http://psycho-pass.com/)
	* psycho-pass
- [u/LennyMcLennington](https://www.reddit.com/r/discordapp/comments/8t04ag/this_image_shows_different_text_depending_on/)
	* dark-light
- [u/AelinSA](https://www.reddit.com/r/discordapp/comments/9krnhr/preach_the_message_of_the_möth_with_this_magic/)
	* dark-light
- [u/_Ebb](https://www.reddit.com/r/Ooer/comments/52z589/eat_pant_maaaaaaaan/)
	* eat-pant
- [Shia LaBeouf "Just Do It" Motivational Speech](https://www.youtube.com/watch?v=ZXsQAXx_ao0)
	* just-do-it
- [SPAM Brand](https://www.spam.com/)
	* spam
- [National Suicide Prevention Lifeline](https://suicidepreventionlifeline.org/)
	* suicide-hotline
- [07th Expansion](http://07th-expansion.net/)
	* box-choosing
- [MangaGamer.com](https://www.mangagamer.com/)
	* box-choosing
- [Higurashi When They Cry Hou - Ch.4 Himatsubushi](https://store.steampowered.com/app/526490/)
	* box-choosing
- [Moms Typewriter Font](https://www.fontsquirrel.com/fonts/MomsTypewriter)
	* captcha
- [Mythbusters](https://go.discovery.com/tv-shows/mythbusters)
	* doors
- [Monty Hall problem](https://en.wikipedia.org/wiki/Monty_Hall_problem)
	* doors
- [Google Feud](http://www.googlefeud.com/)
	* google-feud
- [BrantSteele Hunger Games Simulator](http://brantsteele.net/hungergames/reaping.php)
	* hunger-games
- [Pottermore](https://my.pottermore.com/sorting)
	* sorting-hat
- [Pottermore Sorting Hat Quiz analysis by u/N1ffler](https://www.reddit.com/r/Pottermore/comments/44os14/pottermore_sorting_hat_quiz_analysis/)
	* sorting-hat
- [My Little Pony: Friendship is Magic](https://mylittlepony.hasbro.com/en-us)
	* brony-speak
- [cowsay Online](http://cowsay.morecode.org/)
	* cow-say
- [Latlmes](https://www.latlmes.com/)
	* latlmes
- [UNDERTALE](https://undertale.com/)
	* temmie
- [Google Translate](https://translate.google.com/)
	* translate
- [The Yoda-Speak Generator](https://www.yodaspeak.co.uk/)
	* yoda
- [PayPal](https://www.paypal.com/us/home)
	* donate
