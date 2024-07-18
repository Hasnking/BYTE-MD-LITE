const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '923168598809'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'talkdrove@gmail.com'
global.github = 'https://github.com/HyHamza/BYTE-MD-LITE'
global.location = 'Earth'
global.gurl = 'https://chat.whatsapp.com/GRDmiNNkT6OJwbqYdj1CT4' // add your username
global.sudo = process.env.SUDO || "923168598809"
global.devs = '923168598809';
global.website = 'HyHamza.vercel.app' //wa.me/+92000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/MWjUXcJ.jpeg'
module.exports = {
  sessionName: process.env.SESSION_ID || "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUpRMnRONFM5Mk9NYlJLNVdyd01oS1FaU0hnU08xamxPeEJRRkt0U1ZYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzRubVB3KzhESXluK1RXNzdsc1ZaWTZxbjQrNGZxYTFWZ2Y1Y2hoZFRTRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtUGc5WXV3eklEc2ZyazlYb3g4aEpIMDJlMG9hM0ZBUC8xMzh2NFVZbldZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOTmN0VlpRc3BpV0thc1NsOHdPU0pYTW9DdlZJWUtqVTNMM3MwYVM2YkQ4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVDQWhuSUhoZ1JHYzF6d3Z5bVMrSUdxOEM1MlFvUEdtS3ZwSlpBYklqMHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndiazhDT2hNYUZ0akFhRTZVL0k3RDkveWpvUG1iOXBWdG9HVkdTanZNMm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU9zTE9LVVZGbnBIdWhZUi9OaU1jZXA1VVg3bmlxbTBtck1ya3FiSWIybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmhnZHRuVFZEbmlpNjlybXpCdTgvQlljNXRpdlZ0YUxqTVZXUU51cmt3UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt3NmZITEdrVEpBN01PdnNBbTZ3Mjd5bFFSSlNjQUdqaVZpMXU1UmxkM1FQblU3aW9nM3MrK2xpR3I3YzFXaVlvbko1RUxyYW9lNGlrKzk5TXpMSUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDMsImFkdlNlY3JldEtleSI6IjVzbzJrQy9jR0lCb2x1WHdiR2tJOXNocFp1cWhyL0dsTWlDVkdpbzV1Njg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkJqbE5oVU0zUTFXaGxFTzB2aHFYUWciLCJwaG9uZUlkIjoiZTg1ZTc4M2MtNmJjZS00NTYxLWI1MzctNDBkZjM2OWY0NmIyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjByYWJ1bitnYktYY282RHIwRE45eUxXNGhzRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzK0IrUlEwYkZIMWVhVXBOaGlaQXdaRDE4VEk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMkhRTlFTWFgiLCJtZSI6eyJpZCI6IjkyMzE2ODU5ODgwOToxN0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnZTNStnRUVNdTc0clFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR0tMdDNQRDROekl0QTZmVzAvRFgrNzROYVdOMzFKVWZOVDk0YzZHTTNHMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS2FEeEZXZ01HNk5zTmZEWnk5d2dQQ1BVb2ZTUlB4UGxmM1VOZTFPOFVVQW1JOCtSQTZUcFdwNWNjWTkxUjVta1ZzRVFiczdEK09ySGhmOEprWDlqREE9PSIsImRldmljZVNpZ25hdHVyZSI6IkpURWExbU1tOEJ4c3Ird2VibnJsb0xpMzEvcTRUV0VCeHowNk5PYmkzTm5GL1IzK0pOWVp6eEV3NHNyUVlWd1pBbmhNRmJYNTJOQTIrQlJxdGFqdkR3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTY4NTk4ODA5OjE3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJpaTdkencrRGN5TFFPbjF0UHcxL3UrRFdsamQ5U1ZIelUvZUhPaGpOeHQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjEyNzc5MTEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQlZWIn0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'BYTE-MD',
  packname:  process.env.PACK_NAME || 'POWERED BY PRINCE',
  
  botname:   process.env.BOT_NAME === undefined ? "X HACKER" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'prince' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'love' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 1 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'all' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*POWERED BY PRINCE* ",   
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? '0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'BYTE-MD-LITE',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
