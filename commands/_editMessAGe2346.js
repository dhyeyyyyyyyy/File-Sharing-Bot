/*CMD
  command: /editMessAGe2346
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

if(message){
var msg = User.getProperty("msg")
var mess = ""+msg+" "+message+""
var button = [[{text:"✏Edit Message",callback_data:"/editMessAGe"},{text:"📲Create Link",callback_data:"/CreatLInK"}]]
Api.sendMessage({
  text: mess,
  reply_markup: {inline_keyboard: button}
})
User.setProperty("msg", mess, "string")
}
