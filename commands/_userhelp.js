/*CMD
  command: /userhelp
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

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var button = [ 
  [
    { text: "🎞️ ᴠɪᴅᴇᴏ ᴛᴜᴛᴏʀɪᴀʟ​", callback_data: "/howtouse" }
  ],
[
    { text: "ʙᴀᴄᴋ ᴛᴏ ʜᴏᴍᴇ ᴍᴇɴᴜ​", callback_data: "/back" }
  ]
];

Api.sendMessage({
  text: "<b>How To Use Bot?\n\nFor Message -</b> <i>Just Send Message To Bot U Can Use Edit Message Or Create Link Of Message</i>\n\n<b>For Photo - </b> <i>Just Send Photo To Bot And Get Link Of Photo</i>\n\n<b>For Video -</b> <i>Just Send Video To Bot And Get Link Of Video</i>\n\n<b>For Documents -</b> <i>Just Send Documents To Bot And Get Link Of Documents</i>",
  reply_markup: JSON.stringify({ inline_keyboard: button }),
  parse_mode: "html"
});

