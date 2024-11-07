/*CMD
  command: /photo
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
var photo = Bot.getProperty(second)
var des = id.slice(21, 23)
var captio = Bot.getProperty(des)
if(first == "Pic"){
if(cap == "cap"){
Api.sendPhoto({
photo: photo,
caption: captio
})
}else{
Api.sendPhoto({
photo: photo
})
return }
}
