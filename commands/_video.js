/*CMD
  command: /video
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

var id = params
var first = id.slice(0, 3)
var second = id.slice(3, 18)
var cap = id.slice(18, 21)
var video = Bot.getProperty(second)
var des = id.slice(21, 23)
var captio = Bot.getProperty(des)
if(first == "Vid"){
if(cap == "cap"){
Api.sendVideo({
video: video,
caption: captio
})
}else{
Api.sendVideo({
video: video
})
return }
}
