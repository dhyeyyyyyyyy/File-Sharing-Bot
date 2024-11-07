/*CMD
  command: /updateDone
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

let msg_id = options.result.message_id;
Bot.editMessage("*▰▱▱▱▱▱▱▱▱▱ 0%",msg_id)
Bot.editMessage("*▰▰▱▱▱▱▱▱▱▱ 11%*",msg_id)
Bot.editMessage("*▰▰▰▱▱▱▱▱▱▱ 22%*",msg_id)
Bot.editMessage("*▰▰▰▰▱▱▱▱▱▱ 33%*",msg_id)
Bot.editMessage("*▰▰▰▰▰▱▱▱▱▱ 44%*",msg_id)
Bot.editMessage("*▰▰▰▰▰▰▱▱▱▱ 55%*",msg_id)
Bot.editMessage("*▰▰▰▰▰▰▰▱▱▱ 66%*",msg_id)
Bot.editMessage("*▰▰▰▰▰▰▰▰▱▱ 77%_",msg_id)
Bot.editMessage("*▰▰▰▰▰▰▰▰▰▱ 88%*",msg_id)
Bot.editMessage("*▰▰▰▰▰▰▰▰▰▰ 99%*.",msg_id)
Bot.editMessage("*▰▰▰▰▰▰▰▰▰▰ 101%*.",msg_id)
Bot.editMessage("*▰▰▰▰▰▰▰▰▰▰ Done 😉*.",msg_id)
Bot.editMessage("*Update Completed*",msg_id)
Bot.runCommand("main_menu")
