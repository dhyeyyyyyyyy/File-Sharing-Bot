/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var fullBotUsers = Bot.getProperty("wholeUsers", [])
var already = User.getProperty("already")
if (!already) {
  User.setProperty("already", "DONE", "string")
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
Bot.sendMessageToChatWithId(1123135015,"🌎New User\n╰┈➤ Name : "+user.first_name+"\n╰┈➤ Id : "+user.telegramid+"\n╰┈➤ Username : @"+user.username+"")
}


Api.sendMessage({
  chat_id: user.telegramid,
  text:
    "*🔰 Welcome In Our Premium Bot\n------------------------------------------------\n➡️ *[Main Channel](https://t.me/dhyeygotyou)*\n➡️ *[OTT Group](https://t.me/dhyeygotmovies)*\n➡️* [Old Cartoons](https://t.me/dhyeygotcartoons)*\n-------------------------------------------------\n🛃 Before Using This Bot, After completing all tasks Click on ✅ Jᴏɪɴᴇᴅ!*",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [[{ text: "✅ Jᴏɪɴᴇᴅ", callback_data: "/upload" }]]
  },
  disable_web_page_preview: true
})
if(!params){
Api.sendMessage({ text: "\nWelcome 👋🏻 Hi "+user.first_name+"!! 👑" + "💫",
reply_markup: JSON.stringify({
hide_keyboard: true
})
})
return;
}
if (params) {
    var files = Bot.getProperty(params);
    if (files && files.length > 0) {
        files.forEach(file => {
            switch (file.type) {
                case "video":
                    Api.sendVideo({ video: file.file_id, caption: file.caption || undefined });
                    break;
                case "photo":
                    Api.sendPhoto({ photo: file.file_id, caption: file.caption || undefined });
                    break;
                case "audio":
                    Api.sendAudio({ audio: file.file_id, caption: file.caption || undefined });
                    break;
                case "sticker":
                    Api.sendSticker({ sticker: file.file_id });
                    break;
                case "document":
                    Api.sendDocument({ document: file.file_id, caption: file.caption || undefined });
                    break;
                case "animation":
                    Api.sendAnimation({ animation: file.file_id, caption: file.caption || undefined });
                    break;
                case "voice":
                    Api.sendVoice({ voice: file.file_id, caption: file.caption || undefined });
                    break;
            }
        });
    } else {
        Bot.sendMessage("Transfer in progress...");
    }
}
if (!params) {
  Api.sendPhoto({
    photo: " your Link",//Your Photo Link 
    caption:
      "<b>Hey! I Am File Share Bot</b>\n\n⚠️Note: <i>Use This Bot For Sharing Message/File/Photo and Videos!</i>\n\n<b> ©️Coded by <a href='https://t.me/dhyeygotyou'>Bot​</a> </b>",
    reply_markup: JSON.stringify({ inline_keyboard: button }),
    parse_mode: "html"
  })
  return
}
var id = params
var first = id.slice(0, 3)
if(first == "Pic"){
Bot.runCommand("/photo "+id)
return }
if(first == "Vid"){
Bot.runCommand("/video "+id)
return }
if(first == "Doc"){
Bot.runCommand("/document "+id)
return }
var result = Bot.getProperty(id)
Api.sendMessage({
  text:
    "*"+result+"*",
  parse_mode: "Markdown"
})
