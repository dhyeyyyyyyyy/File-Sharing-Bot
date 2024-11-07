/*CMD
  command: /broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🌎Enter Message 

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var key= "1123135015"
if (user.telegramid == key ){
var fullBotUsers = Bot.getProperty("wholeUsers")
for (var index in fullBotUsers) {
  var info = fullBotUsers[index]
     Api.sendMessage({
    chat_id: info,
    text: ""+message +"", parse_mode: "Markdown"
  })
}
  Bot.sendMessage("✅ Message Sent Instantly 【"+fullBotUsers.length+"】 ")
  return}
  Bot.sendMessage("Ooops")
      
 
