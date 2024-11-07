/*CMD
  command: /handle
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (message == "⚡") {
    if (options && options.shrt) {
        var filesList = Bot.getProperty(options.shrt, []);
        if (filesList.length > 0) {
            return Bot.sendMessage("Tap to copy link ready!\n\n`Here is your link:\n\nhttps://t.me/" + bot.name + "/?start=" + options.shrt + "\nBot via : @dhyeygotyou`");
        } else {
            return Bot.sendMessage("Error: No files uploaded to confirm.\nUse: /upload to upload. ");
                    }
    } else {
        return Bot.sendMessage("Error: No files uploaded to confirm.\nUse /upload to upload.");
        

    }
}

var shrt = (new Date().getTime()).toString(36);
if (options && options.shrt) {
    shrt = options.shrt;
}

var filesList = Bot.getProperty(shrt, []);
var fileEntry = {};

if (request.video && request.video.file_id) {
    fileEntry = { type: "video", file_id: request.video.file_id, caption: request.caption || "" };
} else if (request.photo && request.photo.length > 0 && request.photo[0].file_id) {
    fileEntry = { type: "photo", file_id: request.photo[0].file_id, caption: request.caption || "" };
} else if (request.audio && request.audio.file_id) {
    fileEntry = { type: "audio", file_id: request.audio.file_id, caption: request.caption || "" };
} else if (request.sticker && request.sticker.file_id) {
    fileEntry = { type: "sticker", file_id: request.sticker.file_id };
} else if (request.document && request.document.file_id) {
    fileEntry = { type: "document", file_id: request.document.file_id, caption: request.caption || "" };
} else if (request.animation && request.animation.file_id) {
    fileEntry = { type: "animation", file_id: request.animation.file_id, caption: request.animation.caption || "" };
} else if (request.voice && request.voice.file_id) {
    fileEntry = { type: "voice", file_id: request.voice.file_id, caption: request.caption || "" };
}

if (Object.keys(fileEntry).length > 0) {
    filesList.push(fileEntry);
    Bot.setProperty(shrt, filesList, "json");
    Bot.runCommand('/handle', { shrt: shrt });
} else {
    Bot.sendMessage("No valid media file detected. Please send a valid media file.");
}
