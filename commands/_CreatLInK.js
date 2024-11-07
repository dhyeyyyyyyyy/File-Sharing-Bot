/*CMD
  command: /CreatLInK
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
chat_id :  chat_id,
message_id : message_id
})
}
var save = User.getProperty("msg")
var rnu = generateString(15)
Bot.setProperty(rnu , save ,"string")
var shareLink =
  "https://t.me/" + bot.name + "?start="+rnu
var shareButton = [[{ title: "🏴‍☠️Share", url: "https://t.me/share/url?text=" + shareLink }]]

Bot.sendInlineKeyboard(shareButton,"*Press The Button Or Click To Copy The Link Below To Share Your Files!*\n\n" +shareLink +"\n\nPress The [Button](https://t.me/"+ bot.name +"?start="+rnu+") To Open The Link\n\n"+save+"")
