/*CMD
  command: /rate
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

if (params) {
  var already = User.getProperty("already")
  if (already) {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "You Already Rated Thanks 🤩",
      show_alert: true
    })
    return
  }
  User.setProperty("already", true)
  User.setProperty("rating", params, "string")
  Bot.runCommand("/rates")
  return
}
var button = [
  [{ text: "❤❤❤❤❤", callback_data: "/rate ❤❤❤❤❤" }],
  [{ text: "🧡🧡🧡🧡", callback_data: "/rate 🧡🧡🧡🧡" }],
  [{ text: "💚💚💚", callback_data: "/rate 💚💚💚" }],
  [{ text: "💙💙", callback_data: "/rate 💙💙" }],
  [{ text: "🖤", callback_data: "/rate 🖤" }]
]

Api.sendMessage({
  text: "<b>Hey</b> @" + user.username + "\n💖 <b>Please Rate Us :</b>",
  parse_mode: "Html",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: button }
})

