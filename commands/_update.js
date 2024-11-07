/*CMD
  command: /update
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

Bot.sendMessage("Loading . . .",
{
on_result: "/updateDone", is_reply: false}
);
