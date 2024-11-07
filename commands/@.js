/*CMD
  command: @
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

if (request.video) {
var characters = "F1jfsyEo5zQplQduAxDdZUgA2qMu7uZc8y7isrDbpKrg114732914641873068607DKmfAl"

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}
var cp = request.caption
var filid = request.video.file_id
var rnu = generateString(15)
Bot.setProperty(rnu , filid ,"string")
var shareLink =
  "https://t.me/" + bot.name + "?start=Video"+rnu
var shareButton = [
  [{ text: "🏴‍☠️Share", url: "https://t.me/share/url?text=" + shareLink }]
]
if(cp){
var t = 
Libs.ResourcesLib.anotherChatRes("cap","global")
t.add(1)
Bot.setProperty(t.value() , cp ,"string")
var shnk =
  "https://t.me/" + bot.name + "?start=Vid"+rnu+"cap"+t.value()
Api.sendMessage({
  text:
    "*Press The Button Or Click To Copy The Link Below To Share Your Video!*\n\n" +
    shnk +
    "\n\nPress The [Button](https://t.me/"+ bot.name +"?start=Vid"+rnu+"cap"+t.value()+") To Open The Link",
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: shareButton }
})
}else{
Api.sendMessage({
  text:
    "*Press The Button Or Click To Copy The Link Below To Share Your Video!*\n\n" +
    shareLink +
    "\n\nPress The [Button](https://t.me/"+ bot.name +"?start=Vid"+rnu+") To Open The Link",
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: shareButton }
})
}
}
