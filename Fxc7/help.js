
const help = (prefix, ig, name, uptime, pushname2, user, tanggal, jam, corona) => { 
	return `
	
\`\`\`Follow My Instagram\`\`\`
${ig}

https://chat.whatsapp.com/GHC5djoQJrcGBJFwYQuQoB

┏━━━━━❬ *USER ${name}* ❭━━━━━━━⊱
┃╭───────────────────────
┃├➲ \`\`\`Hai\`\`\`👋 *${pushname2}*
┣━━━━━━━━━━━━━━━━━
┃├➲ \`\`\`I am\`\`\` *${name}*
┃╰───────────────────────
┃
┃╭───────────────────────
┃├➲ \`\`\`Total Pengguna:\`\`\` *${user.length} User*
┣━━━━━━━━━━━━━━━━━
┃├➲ \`\`\`Total Donasi:\`\`\` *0%* 🙂
┃╰───────────────────────
┗━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━❬ *REGULATION ${name}* ❭━━━━━━━⊱
┃
┣⊱❥ \`\`\`AKTIF\`\`\`: ${kyun(uptime)}
┣⊱❥ \`\`\`JAM\`\`\`: *${jam} WIB*
┣⊱❥ \`\`\`TANGGAL\`\`\`: *${tanggal}*
┣⊱❥ \`\`\`VERSION\`\`\`: *4.0 TERMUX*
┃
┣⊱❥ ❌ *SPAM*
┣⊱❥ ❌ *CALL & VC*
┃ \`\`\`Melanggar??\`\`\` *Banned*
┃
┣━━━━━━━━━━━━━━━━━━━━
┃
┣⊱❥ ${corona}
┗━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━❬ *ABOUT ${name}* ❭━━━━━━⊱
┃╭────────────────────────
┃├⊱❥ *${prefix}info*
┃├⊱❥ *${prefix}donasi*
┃├⊱❥ *${prefix}owner*
┃├⊱❥ *${prefix}speed*
┃├⊱❥ *${prefix}daftar*
┃├⊱❥ *${prefix}totaluser*
┃├⊱❥ *${prefix}blocklist*
┃├⊱❥ *${prefix}banlist*
┃├⊱❥ *${prefix}bahasa*
┃├⊱❥ *${prefix}report [lapor bug]*
┃├⊱❥ *${prefix}request [Mau Req Fitur Apa?]*
┃╰────────────────────────
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━❬ *MEDIA & DOWNLOAD* ❭━━━━━━━⊱
┃͏͏͏͏͏͏͏͏͏͏͏͏͏͏╭────────────────────────
┃├⊱❥ *${prefix}fb [link video]*
┃├⊱❥ *${prefix}ytmp3 [link yt]*
┃├⊱❥ *${prefix}ytmp4 [link yt]*
┃├⊱❥ *${prefix}tiktok*
┃├⊱❥ *${prefix}fototiktok*
┃├⊱❥ *${prefix}tiktokstalk [username]*
┃├⊱❥ *${prefix}igstalk [_farhan_xcode7]*
┃├⊱❥ *${prefix}meme*
┃├⊱❥ *${prefix}memeindo*
┃├⊱❥ *${prefix}ssweb [url]*
┃├⊱❥ *${prefix}url2img [Url]*
┃├⊱❥ *${prefix}kbbi*
┃├⊱❥ *${prefix}wait*
┃├⊱❥ *${prefix}insta [Link]*
┃├⊱❥ *${prefix}trendtwit*
┃╰────────────────────────
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━❬ *CREATOR MENU* ❭━━━━━━⊱
┃╭────────────────────────
┃├⊱❥ *${prefix}stiker*
┃├⊱❥ *${prefix}gifstiker*
┃├⊱❥ *${prefix}toimg*
┃├⊱❥ *${prefix}nulis*
┃├⊱❥ *${prefix}ocr*
┃├⊱❥ *${prefix}imoji [❤️]*
┃├⊱❥ *${prefix}tts [id Haii]*
┃├⊱❥ *${prefix}ttp [Fxc7]*
┃╰─────────────────────────
┣━━━━━━━━━━━━━━━━━━━━━━━━❥
┃╭─────────────────────────
┃├⊱❥ *${prefix}ctxtneon [FXC7]*
┃├⊱❥ *${prefix}cflame3d [FXC7]*
┃├⊱❥ *${prefix}caglow [FXC7]*
┃├⊱❥ *${prefix}cgneon [FXC7]*
┃├⊱❥ *${prefix}cthunder [FXC7]*
┃├⊱❥ *${prefix}cbokeh [FXC7]*
┃├⊱❥ *${prefix}ctoxic [FXC7]*
┃├⊱❥ *${prefix}cmatrix [FXC7]*
┃├⊱❥ *${prefix}cmusic [FXC7]*
┃├⊱❥ *${prefix}cblood [FXC7]*
┃├⊱❥ *${prefix}cwater [FXC7]*
┃├⊱❥ *${prefix}clava [FXC7]*
┃├⊱❥ *${prefix}cfire [FXC7]*
┃├⊱❥ *${prefix}cmarvel [FXC7/BOT]*
┃├⊱❥ *${prefix}cavengers [FXC7/BOT]*
┃├⊱❥ *${prefix}cholo [FXC7]*
┃├⊱❥ *${prefix}cminion [FXC7]*
┃├⊱❥ *${prefix}cold [FXC7]*
┃├⊱❥ *${prefix}cneon [FXC7]*
┃├⊱❥ *${prefix}cstune3d [FXC7/BOT]*
┃├⊱❥ *${prefix}cspace3d [FXC7/BOT]*
┃├⊱❥ *${prefix}csunmory [FXC7]*
┃├⊱❥ *${prefix}cbalon [FXC7]*
┃├⊱❥ *${prefix}cglue3d [FXC7]*
┃├⊱❥ *${prefix}csraved [FXC7]*
┃├⊱❥ *${prefix}cswrite [FXC7]*
┃├⊱❥ *${prefix}cssummer [FXC7]*
┃├⊱❥ *${prefix}ccsky [FXC7]*
┃├⊱❥ *${prefix}ccloud [FXC7]*
┃├⊱❥ *${prefix}crvintage [FXC7]*
┃├⊱❥ *${prefix}cbpink [FXC7]*
┃├⊱❥ *${prefix}ctext3d [FXC7]*
┃├⊱❥ *${prefix}cglitch [FXC7/BOT]*
┃├⊱❥ *${prefix}cluxury [FXC7]*
┃├⊱❥ *${prefix}cmetal [FXC7/BOT]*
┃├⊱❥ *${prefix}cphlogo [FXC7/BOT]*
┃├⊱❥ *${prefix}quotemaker [tx/wtrmk/tema]*
┃╰────────────────────────
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━❬ *GRUP ONLY* ❭━━━━━━━━⊱
┃╭────────────────────
┃├⊱❥ *${prefix}modeanime [On/Off]*
┃├⊱❥ *${prefix}naruto*
┃├⊱❥ *${prefix}minato*
┃├⊱❥ *${prefix}boruto*
┃├⊱❥ *${prefix}hinata*
┃├⊱❥ *${prefix}sakura*
┃├⊱❥ *${prefix}sasuke*
┃├⊱❥ *${prefix}kaneki*
┃├⊱❥ *${prefix}toukachan*
┃├⊱❥ *${prefix}rize*
┃├⊱❥ *${prefix}akira*
┃├⊱❥ *${prefix}itori*
┃├⊱❥ *${prefix}kurumi*
┃├⊱❥ *${prefix}miku*
┃├⊱❥ *${prefix}anime*
┃├⊱❥ *${prefix}animecry*
┃├⊱❥ *${prefix}neonime*
┃├⊱❥ *${prefix}animekiss*
┃╰──────────────────────
┣━━━━━━━━━━━━━━━━━━━━━━━━❥
┃╭────────────────────
┃├⊱❥ *${prefix}welcome [On/Off]*
┃├⊱❥ *${prefix}grup [buka/tutup]*
┃├⊱❥ *${prefix}ownergrup*
┃├⊱❥ *${prefix}setpp*
┃├⊱❥ *${prefix}infogc*
┃├⊱❥ *${prefix}add*
┃├⊱❥ *${prefix}kick*
┃├⊱❥ *${prefix}promote*
┃├⊱❥ *${prefix}demote*
┃├⊱❥ *${prefix}setname*
┃├⊱❥ *${prefix}setdesc*
┃├⊱❥ *${prefix}linkgrup*
┃├⊱❥ *${prefix}tagme*
┃├⊱❥ *${prefix}hidetag*
┃├⊱❥ *${prefix}tagall*
┃├⊱❥ *${prefix}mentionall*
┃├⊱❥ *${prefix}fitnah*
┃├⊱❥ *${prefix}listadmin*
┃├⊱❥ *${prefix}openanime*
┃├⊱❥ *${prefix}edotense*
┃├⊱❥ *${prefix}kudeta*
┃╰──────────────────────
┣━━━━━━━━━━━━━━━━━━━━━━━━❥
┃╭────────────────────
┃├⊱❥ *${prefix}nsfw [On/Off]*
┃├⊱❥ *${prefix}nsfwloli*
┃├⊱❥ *${prefix}nsfwblowjob*
┃├⊱❥ *${prefix}nsfwneko*
┃├⊱❥ *${prefix}nsfwtrap*
┃├⊱❥ *${prefix}hentai*
┃├⊱❥ *${prefix}indohot*
┃├⊱❥ *${prefix}bokep [stepMoms]*
┃├⊱❥ *${prefix}simih [On/Off]*
┃╰────────────────────────
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━❬ *OTHER FUN & GAME* ❭━━━━━⊱
┃╭────────────────────────
┃├⊱❥ *${prefix}anjing*
┃├⊱❥ *${prefix}kucing*
┃├⊱❥ *${prefix}testime*
┃├⊱❥ *${prefix}hilih*
┃├⊱❥ *${prefix}say*
┃├⊱❥ *${prefix}tinyurl [link]*
┃├⊱❥ *${prefix}bitly [link]*
┃├⊱❥ *${prefix}apakah*
┃├⊱❥ *${prefix}kapankah*
┃├⊱❥ *${prefix}bisakah*
┃├⊱❥ *${prefix}rate*
┃├⊱❥ *${prefix}watak*
┃├⊱❥ *${prefix}hobby*
┃├⊱❥ *${prefix}jamdunia [Banyuwangi]*
┃╰────────────────────
┣━━━━━━━━━━━━━━━━━━━━━━━━❥
┃╭────────────────────
┃├⊱❥ *${prefix}gantengcek [Farhan]*
┃├⊱❥ *${prefix}cantikcek [Iriene]*
┃├⊱❥ *${prefix}artinama [Farhan]*
┃├⊱❥ *${prefix}truth*
┃├⊱❥ *${prefix}dare*
┃├⊱❥ *${prefix}katabijak*
┃├⊱❥ *${prefix}fakta*
┃├⊱❥ *${prefix}mimpi [Ular]*
┃├⊱❥ *${prefix}translate [en/Apa kabar?]*
┃├⊱❥ *${prefix}darkjokes*
┃├⊱❥ *${prefix}persengay [Topan]*
┃├⊱❥ *${prefix}pbucin [Farhan]*
┃├⊱❥ *${prefix}quotebucin*
┃├⊱❥ *${prefix}bpfont [Farhan]*
┃├⊱❥ *${prefix}textstyle [FXC7]*
┃├⊱❥ *${prefix}pantun*
┃╰────────────────────
┣━━━━━━━━━━━━━━━━━━━━━━━━❥
┃╭────────────────────
┃├⊱❥ *${prefix}quran*
┃├⊱❥ *${prefix}jadwalsholat [Banyuwangi]*
┃├⊱❥ *${prefix}infogempa*
┃├⊱❥ *${prefix}infocuaca [Banyuwangi]*
┃├⊱❥ *${prefix}infonomor*
┃├⊱❥ *${prefix}quotes*
┃├⊱❥ *${prefix}lirik [melukis senja]*
┃├⊱❥ *${prefix}chord [Melukis senja]*
┃├⊱❥ *${prefix}wiki [Adolf Hitler]*
┃├⊱❥ *${prefix}brainly [pertanyaan]*
┃├⊱❥ *${prefix}resepmasakan [Tempe]*
┃├⊱❥ *${prefix}map [Banyuwangi]*
┃├⊱❥ *${prefix}film [Fast and Farious]*
┃├⊱❥ *${prefix}joox [Monolog Pamungkas]*
┃├⊱❥ *${prefix}smule [Link Video Smule]*
┃├⊱❥ *${prefix}pinterest [gambar kucing]*
┃╰────────────────────────
┣━━━━━━━━━━━━━━━━━━━━━━━━❥
┃╭────────────────────
┃├⊱❥ *${prefix}encode64 [string]*
┃├⊱❥ *${prefix}decode64 [encrypt]*
┃╰────────────────────────
┣━━━━━━━━━━━━━━━━━━━━━━━━❥
┃╭────────────────────
┃├⊱❥ *${prefix}spamcall [nomer]*
┃├⊱❥ *${prefix}spamsms [nomer/jumlah]*
┃├⊱❥ *${prefix}spamgmail [gmail/jumlah]*
┃╰────────────────────────
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━❬ *OWNER ONLY* ❭━━━━━━━⊱
┃╭──────────────────
┃├⊱❥ *${prefix}bc*
┃├⊱❥ *${prefix}bcgc*
┃├⊱❥ *${prefix}ban*
┃├⊱❥ *${prefix}unban*
┃├⊱❥ *${prefix}block*
┃├⊱❥ *${prefix}unblock*
┃├⊱❥ *${prefix}clearall*
┃├⊱❥ *${prefix}delete*
┃├⊱❥ *${prefix}clone*
┃├⊱❥ *${prefix}getses*
┃├⊱❥ *${prefix}leave*
┃╰────────────────────────
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━❬ *SUPPORT ${name}* ❭━━━━━━⊱
┃╭────────────────────────
┃│
┃├➲ *O BOT*
┃├➲ *M. HADI FIRMANSYA*
┃├➲ *DELIA AULIA*
┃├➲ *KEVIN DAVID*
┃╰────────────────────────
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━❬ *NOTE ${name}* ❭━━━━━━━━━⊱
┃
┣⊱❥ \`\`\`Bot ini belum selesai sepenuhnya\`\`\`
┃ \`\`\`Masih dalam proses pengerjaan\`\`\`
┃ \`\`\`Jadi masih jarang aktif, dan\`\`\`
┃ \`\`\`Maaf Jika Ada Menu Yang Error\`\`\`
┃
┣⊱❥ \`\`\`Jika Lama Harap Ulangi Command\`\`\`
┃
┣⊱❥ *Gunakan Command Tanpa []*
┃
┣⊱❥ \`\`\`Dan Jika Mengalami Error\`\`\`
┃ \`\`\`Harap Lapor Owner Dengan Cara\`\`\`
┃ *${prefix}report* \`\`\`apa pesan errornya\`\`\`
┃
┣⊱❥ \`\`\`Mau Invit Bot?? Donasi Gan,\`\`\`
┃ \`\`\`Kalo Gamau Donasi Follow Ig @_farhan_xcode7\`\`\`
┃
┣⊱❥ \`\`\`Kalian Bisa Mempublish Quotes Kalian\`\`\`
┃ \`\`\`Jika Minat Hubungi Aja Owner Buat Mempublish\`\`\`
┃ \`\`\`Quotes Kalian,\`\`\`
┃ \`\`\`Dan Makasih Buat Temen" Yg Mau Di Public Quotesnya:)\`\`\`
┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`
}
exports.help = help
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}
