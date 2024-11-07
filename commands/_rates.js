/*CMD
  command: /rates
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

var rating = User.getProperty("rating") 
if(rating == undefined){
return}
if (!params) {
  var rate =
    Bot.getProperty("rate " + request.message.message_id) == undefined
      ? parseFloat(0)
      : Bot.getProperty("rate " + request.message.message_id)
  Api.sendMessage({
    chat_id: "@dhyeyyyyyyyy",
    text:
      "*♥️New Rating Received ♥️\n\n👷 " +
      user.first_name +
      "Have Rated Us:~\n " +
      rating +
      "\n\n🤩 Get Your Advanced Bots & Codes Here ➡️ @" +
      bot.name +
      "*",
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "❤️‍🔥 Best Bot (" + rate + ")",
            callback_data: "/tes " + request.message.message_id
          }
        ]
      ]
    }
  })
  Bot.setProperty("rate" + request.message.message_id, rate + 1, "integer")
} else {
  var rate = Bot.getProperty("rate" + params)
if(user.telegramid == 1834957586){
  Bot.inspect(params)
}
var rvalu = Bot.getProperty("rvalue" + params) == undefined?"":Bot.getProperty("rvalue" + params)
  if (rvalu.includes(user.telegramid)) {
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "🚫 You Already Voted",
  show_alert: true
})
    return
  }
  Api.editMessageText({
    text:
      request.message.text == undefined
        ? request.message.new_text
        : request.message.text,
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "❤️‍🔥 Best Bot (" + Bot.getProperty("rate" + params) + ")",
            callback_data: "/tes " + params
          }
        ]
      ]
    },
    message_id: request.message.message_id
  })
  Bot.setProperty("rate" + params, rate + 1, "integer")
  var rvalue = Bot.getProperty("rvalue" + params)
  if (rvalue == undefined) {
    Bot.setProperty("rvalue" + params, user.telegramid, "string")
  } else {
    Bot.setProperty("rvalue" + params, rvalue + "," + user.telegramid,"string")
  }
}
