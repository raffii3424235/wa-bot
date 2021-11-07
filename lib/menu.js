const fs = require("fs-extra");
const { prefix } = JSON.parse(fs.readFileSync("./settings/setting.json"));

exports.textTnC = () => {
  return `bot whatsapp`;
};

exports.textMenu = (pushname) => {
  return `
Hi, ${pushname}! 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!

Creator:
~ *${prefix}sticker*
~ *${prefix}stickergif*
~ *${prefix}stickergiphy*
~ *${prefix}meme*
~ *${prefix}quotemaker*
~ *${prefix}nulis*

Islam:
~ *${prefix}infosurah*
~ *${prefix}surah*
~ *${prefix}tafsir*
~ *${prefix}ALaudio*
~ *${prefix}jsolat*

Fun Menu (Group):
~ *${prefix}simisimi*
~ *${prefix}katakasar*
~ *${prefix}klasmen*

Download:
~ *${prefix}ytmp3*
~ *${prefix}ytmp4*
~ *${prefix}facebook*

Primbon:
~ *${prefix}artinama*
~ *${prefix}cekjodoh*

Search Any:
~ *${prefix}images*
~ *${prefix}sreddit*
~ *${prefix}resep*
~ *${prefix}stalkig*
~ *${prefix}wiki*
~ *${prefix}cuaca*
~ *${prefix}chord*
~ *${prefix}lirik*
~ *${prefix}ss*
~ *${prefix}play*
~ *${prefix}movie*
~ *${prefix}whatanime*

Random Teks:
~ *${prefix}fakta*
~ *${prefix}pantun*
~ *${prefix}katabijak*
~ *${prefix}quote*
~ *${prefix}cerpen*
~ *${prefix}cersex*
~ *${prefix}puisi*

Random Images:
~ *${prefix}anime*
~ *${prefix}kpop*
~ *${prefix}memes*

Lain-lain:
~ *${prefix}tts*
~ *${prefix}translate*
~ *${prefix}resi*
~ *${prefix}covidindo*
~ *${prefix}ceklokasi*
~ *${prefix}shortlink*
~ *${prefix}bapakfont*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Owner Bot:
~ *${prefix}ban* - banned
~ *${prefix}bc* - promosi
~ *${prefix}leaveall* - keluar semua grup
~ *${prefix}clearall* - hapus semua chat

Hope you have a great day!`;
};

exports.textAdmin = () => {
  return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

~ *${prefix}add*
~ *${prefix}kick* @tag
~ *${prefix}promote* @tag
~ *${prefix}demote* @tag
~ *${prefix}mutegrup*
~ *${prefix}tagall*
~ *${prefix}setprofile*
~ *${prefix}del*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
~ *${prefix}kickall*
*Owner Group adalah pembuat grup.*
`;
};
