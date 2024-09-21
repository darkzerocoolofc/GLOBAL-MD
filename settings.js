

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: Botmastermindofficial" //ur yt chanel name
global.socialm = "GitHub: Zerocooltech" //ur github or insta name
global.location = "Zimbabwe, Tynwald, Harare" //ur location

//new
global.botname = '© 𝐆𝐋𝐎𝐁𝐀𝐋-𝐌𝐃' //ur bot name
global.ownernumber = ['263712473551'] //ur owner number, dont add more than one
global.ownername = '© 𝚉𝙴𝚁𝙾𝙲𝙾𝙾𝙻-𝚃𝙴𝙲𝙷 𝙾𝙵𝙲' //ur owner name
global.websitex = "https://www.youtube.com/@Botmastermindofficial"
global.wagc = "https://chat.whatsapp.com/E41t3IZco4v6rDTHDxOpJs"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/GlobalTechInfo/GLOBAL-MD' //script link
global.packname = "Sticker By"
global.author = "ZEROCOOL\n\n+263712473551"
global.creator = "263712473551@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["263712473551"] // Premium User

//channel id
global.xchannel = {
	jid: '120363319098372999@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '91' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['➜','☞','㉨','✪','✯','益','⊡','☆','ෆ','✎','⎆','⫹⫺','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆','֎','ᚏ','⸙','⧉']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
