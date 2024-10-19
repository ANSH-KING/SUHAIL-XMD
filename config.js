const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_31_10_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNSxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA2LFxuICAgICAgICAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU3LFxuICAgICAgICA0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM1LFxuICAgICAgICAzOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMyxcbiAgICAgICAgNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDM5LFxuICAgICAgICA2NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg3LFxuICAgICAgICA2MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDY5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDU0LFxuICAgICAgICA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0LFxuICAgICAgICA4MixcbiAgICAgICAgODQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMixcbiAgICAgICAgMjUxLFxuICAgICAgICAzNixcbiAgICAgICAgMTczLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM1LFxuICAgICAgICA3MixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzMixcbiAgICAgICAgMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM0ZGdk8vZ05aMFkydWZDTTRYYy9nZHNFR1I1Smd5ZUszakJ5dVVnNFB5cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMjAxNjk2NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY5RDg3RTU3QkI4MkM3OTYwQkFBRjE4RjZBMjNCN0NEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTI2OTA2MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAyMDE2OTY3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTM3REE3NTIzMTg2NTYzMjExNDJDM0UwRkU2NjRDNDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5MjY5MDYxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJ5djdCZXgyUm02LUo2UXhDSmszWFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGUwYzA0MDUtM2U2YS00NTk4LWE4NjQtNGRiOTM4NTEwNTBlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgMTAxLFxuICAgICAgNjcsXG4gICAgICAxMDIsXG4gICAgICAyMzksXG4gICAgICAxNjMsXG4gICAgICA5MixcbiAgICAgIDc4LFxuICAgICAgMjM2LFxuICAgICAgMTA4LFxuICAgICAgMjMxLFxuICAgICAgNjIsXG4gICAgICAxNTcsXG4gICAgICA4MSxcbiAgICAgIDI0OCxcbiAgICAgIDIxMSxcbiAgICAgIDI1MSxcbiAgICAgIDIwNCxcbiAgICAgIDEwMixcbiAgICAgIDY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDk3LFxuICAgICAgMTcwLFxuICAgICAgMTMwLFxuICAgICAgNjgsXG4gICAgICAxNDksXG4gICAgICA3MSxcbiAgICAgIDIwNCxcbiAgICAgIDExNCxcbiAgICAgIDIzOSxcbiAgICAgIDE3NCxcbiAgICAgIDExMSxcbiAgICAgIDE0MSxcbiAgICAgIDEyMCxcbiAgICAgIDg2LFxuICAgICAgMjksXG4gICAgICAyMTAsXG4gICAgICA3NSxcbiAgICAgIDIzNixcbiAgICAgIDExMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQMjdSTTQxM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDIwMTY5NjczOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1NTM4NDYyNzczNDc3OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4piezaXNn+KLhs2jzZ/ii4bNq/CflKXhtIDJtHPKnCDGm8m0c+G0gMqASeKYoO+4ju+4juKcqlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0krbjBJc0dFTCtheXJnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwienRRZXE4dDM2ZVBrUFdGcEwvaTB1QmlxdHJqd0luUHNlR003T0dtQi8wRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4aW1idG01UXJVQVN2aGhXWWlqNXhmTUFqbjlIblJ2T0xSUm1zYUxSSi94ckdDV1Q2QW9ncnBIM2JkT3ArTVhpOUlROUlRUEFjMXhjeU55NUpKYnJCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSTEFPYytYdENNM0lhRzkwY3MwSTcwVlEzMG9BaGZiUWxEOElIWEl1SHY0K1c2Y1JhTW1nQjBBTHEvREo2ZlFZMllEQ2RqVnFESUsrQ0dSQjB2QzBCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMjAxNjk2NzM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5MjY5MDU5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkdkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGR2QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2US9taHpKRC9oVmprVDRHMEpibE8zSXR5QVZyeFBKajYzS0o4amtYRmE4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MzQ5OTcxMzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTI2OTA2MDA2OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
