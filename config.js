module.exports = {
  showStats: true, // Booleen | true / e
	website: {
		protocol: 'https://', // https:// or http://
		domain: 'www.felysia.xyz', // website link without protocol ex. bot-website.tejas1794.repl.co
		port: 3000,
    cookieSecret: 'www.felysia.xyz' // Cookie secret | charaters used store client data
	},
  bot: {
    name: 'Felysia', // Bot Name
    token: 'OTQ5Nzk0MDc2NTg3MzYwMjg3.YiPiqg.B2ZFROUwNwhCBX4kNJxBdKG-xp0', // Bot token if showing Stats
    logo: 'https://media.discordapp.net/attachments/949798479235006524/966578584695218187/FB_IMG_1635077819712.jpg', //Bot Logo used in embeds and favicon
    description: 'Felysia is tools to help Digital Artists and Illustrator improve', //description of your bot used in embed and website
    support: 'https://discord.gg/uZTCtPcT5f', // support server url of your bot
    invite: 'https://discord.com/oauth2/authorize?client_id=949794076587360287&permissions=415068706880&scope=applications.commands%20bot', // invite link of your bot
    botlist: 'https://top.gg/bot/949794076587360287', // Voting website Ex. top.gg
    feature1: {
      main: 'Improve Your Skill', // Feature 1 Heading
      description: 'If you feel stack in your position right now? maybe you should take look at many cool Artwork for reference, We were gonna facility you' // Feature 1 Description
    },
    feature2: {
      main: '200+ Reference', // Feature 2 Heading
      description: 'Felysia have tons of Reference you can check and always be more in future ' // Feature 1 Description
    },
    feature3: {
      main: 'Easy To Use', // Feature 3 Heading
      description: 'Felysia develop to be more effective on Discord, so, we were separated reference by its theme' // Feature 1 Description
    }
  },
  img: {
    img1: 'https://media.discordapp.net/attachments/949798479235006524/966585272424869908/Screenshot_20220421-132219_Discord-picsay.jpg', // help cmd image of your bot ex. https://cdn.discordapp.com/attachments/868823136538333184/889852973713354823/Capture.PNG
    img2: 'https://media.discordapp.net/attachments/949798479235006524/966585272680742942/Screenshot_20220421-132242_Discord-picsay.jpg' // most famous command image of your bot Ex. https://cdn.discordapp.com/attachments/868823136538333184/889853204697849926/Capture.PNG
  }
  
};
