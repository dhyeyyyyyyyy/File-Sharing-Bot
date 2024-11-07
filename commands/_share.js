/*CMD
  command: /share
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

var linktxt = "@fileflyerbot"
var linktxtwhtsp = "https://t.me/dhyeygotyou"
var button = 
  [
    {
      title: "↗️ Telegram",
      url: "https://t.me/share/url?text=" + linktxt + ""
    }, 
    {
      title: "🈯️ WhatsApp",
      url: "https://api.whatsapp.com/send?text=" + linktxtwhtsp + ""
    }
  
]
Bot.sendInlineKeyboard(button, "👇 Select a platform for sharing 👇")
