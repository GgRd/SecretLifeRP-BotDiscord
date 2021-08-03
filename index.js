/////////////////////////////////////////////////////
// VARIABLES
/////////////////////////////////////////////////////

const Discord = require("discord.js");
const bot = new Discord.Client();
const configs = require("./configs.json");
const fivereborn = require('fivereborn-query');
bot.config = configs;

/////////////////////////////////////////////////////
// DEMARRER LE BOT
/////////////////////////////////////////////////////

bot.login(configs.token)
  .then(
    () => {
      console.log("Bot SecretLife RP a démarré");
      console.log("Collecte d'informations en cours... ");
    });
	
const prefix ="s!";

bot.on('message', msg => {
  if (msg.content === 's!reseaux') {
  msg.reply('Les réseaux : https://linktr.ee/SecretLifeRP ');
  }
});

bot.on('message', msg => {
  if (msg.content === 's!own') {
  msg.reply('GgRd#7752 est le créateur de ce bot !');
  }
});

 bot.on('message', message => {
    if (message.content === ("test")){
      message.reply('BRAVO TU A REUSSI TON TEST !!');
  } if (message.content === "s!help") {
      message.reply('Help envoyé en ***Message Privée***')
    let m = " ";
    m += '**Liste des Commandes** : \n';
    m += '                      \n';
    m += "*s!ip* : Pour avoir l'IP du serveur ! \n";
    m += '*s!reseaux* : Pour avoir le lien des reseaux du serveur \n';
    m += '*s!fondateurs* : Pour savoir les fondateurs du serveurs ! \n';
    m += '*s!regles* : Les règles du discord \n';
    m += '*s!discord* : Pour avoir les infos du discord \n';
    m += '                      \n';
    m += '**Merci aussi de respecté les règles faites s!regles dans le salons destiné** \n';
    message.author.sendMessage(m).catch(console.log); 
  }
  });

  bot.on("message", function (message){
    if (message.content === "ping") {
        message.channel.send ("pong");
    } else if (message.content === ("bonjour")){
        message.reply('Bonjour à toi ');
    } else if (message.content === ("cv?")){
        message.reply('Oui je vais bien et toi?');
    } else if (message.content === ("ça vas?")){
        message.reply('Oui je vais bien et toi?');
    } else if (message.content === ("ca vas?")){
        message.reply('Oui je vais bien et toi?');
    } else if (message.content === ("Cv?")){
        message.reply('Oui je vais bien et toi?');

        
    (own)
    } else if (message.content === ("merde")){
        message.reply('Attention à votre vocabulaire! :hushed: :hushed:  ');
    }
});

bot.on('message', msg => {
  if (msg.content === 's!fondateurs') {
  msg.reply('Les Fondateurs de la structures sont : Xo24#1701, luka#4309 & Mimoxi#1465');
  }
});

bot.on('message', message => {
  if (message.content === ('AH')) {
     message.channel.sendFile("https://www.eliastiksofts.com/memes/ah/assets/img/ah.gif")
     console.log("AH demandée !")
  }
});

bot.on("message", async message => {
    if(message.content.startsWith( prefix + "say")){
        if(message.member.hasPermission('MANAGE_MESSAGES')){
        message.delete();
        let msg = message.content.slice(5)
        if(!msg) return message.reply("Veuillez entrez un messaage.")
        message.channel.send(msg)
        }
    }
});
 
bot.on('message', msg => {
  if (msg.content === 's!admin') {
  msg.reply('Administrateur du bot est : @GgRd#7752');
  }
});

bot.on('message', msg => {
  if (msg.content === 's!ip') {
  msg.channel.send(`> L'IP du serveur est : 78.(chuuut le serveur est pas encore la)`);
  }
});

bot.on('message', message => {
  if (!message.guild) return
  if (message.content.startsWith('s!discord')) {
    message.channel.send(`Serveur: ${message.guild.name} \nMembres Total : ${message.guild.memberCount}`)
  }
});

bot.on('message', message => {
  if (message.content === 's!regles') {
      message.reply('Règles envoyé en ***Message Privée***')
    let m = " ";
    m += '***Soon*** :scroll: \n';
    message.author.sendMessage(m).catch(console.log); 
  }
  })

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;


    //args system that is very required!!!!
    let messageArray = message.content.split(" ")
    let args = messageArray.slice(1);

    let cmd = messageArray[0];

    if(cmd === "s!ban") {
        let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

        const reason = args[1] || "Pas de raisons définie";

        toBan.ban({
            reason: reason
        })
        message.channel.send(`${toBan} à été bannie avec succès 🔨!\nRaison du ban: ${reason}`)
    }

    if(cmd === "s!unban") {
        let toBan = await bot.users.fetch(args[0])

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

        const reason = args[1] || "Pas de raison définie";

        message.guild.members.unban(toBan, reason)

        message.channel.send(`${toBan} à été debannie avec succès 🍃!`)
    }

});

bot.on("message", message => {

    if(message.content.startsWith(prefix + "clear")){
        message.delete();
        if(message.member.hasPermission('MANAGE_MESSAGES')){
            
            let args = message.content.trim().split(/ +/g);

            if(args[1]){
                if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99){

                    message.channel.bulkDelete(args[1])
                    message.channel.send(`Vous avez suprimé ${args[1]} message(s)`)

                }
                else{
                    message.channel.send(`Vous devez indiqué une valeur entre 1 et 99 !`)
                }
            }
            else{
                message.channel.send(`Vous devez indiqué un nombre de messages a supprimer !`)
            }
            
        }
        else{
            message.channel.send(`Tu dois avoir la permission de gérer les messages pour éxécuter cette commande !`)
        }
    }
});

/////////////////////////////////////////////////////
// FONCTION (A NE PAS MODIFIER)
/////////////////////////////////////////////////////

function activity() {
  setTimeout(() => {
    fivereborn.query(configs.serverInfo[0], configs.serverInfo[1], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        bot.user.setActivity("" + data.clients + "/" + data.maxclients + " Joueur(s) connecté(es) | s!help", { type: configs.activityType });
      }
    });
    activity();
  }, 10000);
}
activity();