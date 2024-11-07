/*CMD
  command: /spm
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
✅ Send User Telegram Id To Send Message:


  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(user.telegramid == "1123135015"){
Bot.run({ 
command: "/PM",
options: { tgid : message }
})
}
