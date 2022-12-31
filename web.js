//=================================================//   
const {default: makeWASocket,DisconnectReason,BufferJSON,MessageType, MessageOptions, Mimetype, useMultiFileAuthState, getContentType} = require('@adiwajshing/baileys')

const fs = require('fs')

const axios = require('axios')
const moment = require('moment-timezone')
//=================================================//   
        

module.exports = brain = async(web ,msg,mek)=> {

    try{

      const mek =msg
        global.prefix
        global.blocked
        const type = getContentType(msg.message)
    const prefix = '#'
//=================================================//   

//=================================================//   
    const isQuoted = type == 'extendedTextMessage'

const from = msg.key.remoteJid

const isGroup = from.endsWith('@g.us')
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
    const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
    const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
    const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
    const date = moment.tz('Asia/Jakarta').format('DD,MM,YY')
    const quoted = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
    const body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
    const args = body.trim().split(/ +/).slice(1)
    const isCmd = body.startsWith(prefix)
    const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
    let text = body.replace(command, '')
        .slice(1)
        .trim()
    const c = args.join(' ')
    const botNumber = astro.user.id.split(':')[0]
    const tescuk = ["0@s.whatsapp.net"]
    const q = args.join(' ')
    const sender = msg.key.participant
    const groupMetadata = isGroup ? await  astro.groupMetadata(from) : ''
    const groupName = isGroup ? groupMetadata.subject : ''
    const groupMembers = isGroup ? groupMetadata.participants : ''
    const groupId = isGroup ? groupMetadata.id : ''
    const pushname = msg.pushName
    const groupName = isGroup ? groupMetadata.subject : ''
    const participants = isGroup ? await groupMetadata.participants : ''
    const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
    const groupOwner = isGroup ? groupMetadata.owner : ''
    const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const ownerNumber = [`2349027561024@s.whatsapp.net`] //Change to your number
const isOwner = ownerNumber.includes(sender)

//=================================================//         
    

const reply = async(teks) => {await astro.sendMessage(from,{text: teks},{quoted:msg})}
 

//=================================================//      
    const sendButMessage = (id, text1, footer1, but = [], options = {}) => {
        const buttonMessage = {text: text1, footer: footer1, buttons: but, headerType: 1}
        astro.sendMessage(id, buttonMessage, options)}
        
        const sendButTemplate = (id, text1, footer1, but = [], options = {}) => {
        const templateMessage = {text: text1,footer: footer1,templateButtons: but}
        astro.sendMessage(id, templateMessage, options)}
        
        const sendLstMessage = (id, text1, footer1, title1, buttonText1, sec  = [], options = {}) => {
        const listMessage = {text: text1,footer: footer1,title: title1,buttonText: buttonText1, sections: sec}
        astro.sendMessage(id, listMessage, options)}
//=================================================//   



    const color = require('./lib/color')
//=================================================//   
    if(isCmd){

         const reactionMessage = {
          react: {
              text: `✅`,
              key: msg.key,
          },
      };
      await astro.sendMessage(from, reactionMessage);
    }
//=================================================//   

  
//=================================================//   
    if (isCmd ) console.log(color('[MESS]'), color(time, 'white'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
//=================================================//   

    
    switch(command){
    
//=================================================//   
        case'hi':
        const mk = 'hi'
        console.log(mk)
        reply('hi')
        break
//=================================================//   

case 'help': case 'menu':
const lexes = `Hello ${pushname} Thank you for using Webster base by 🕷️Websterᵀᴹ`

//=================================================//   
    case'test':
        const m = 'Everything is working fine i guess'
        console.log(m)
        return reply('Everything is working fine i guess')
        break
//=================================================//   

//=================================================//   
        case'':
        if(isCmd) {

        const buttons = [
            {buttonId: ':help', buttonText: {displayText: 'Help'}, type: 1}
          ]

          const buttonMessage = {
            image: {url: 'https://static3.cbrimages.com/wordpress/wp-content/uploads/2020/06/itachi.jpg'},
            caption: `${pushname} DO YOU MEAN :help?`,
              footer: 'Webster Botz',
              buttons: buttons,
              headerType: 1
          }

           await astro.sendMessage(from, buttonMessage ,{quoted:msg})
        };
        break
//=================================================//   
        
case 'snk':
    default:
         
         
        
        if(isGroup){
            const yo = [
                {buttonId: ':help', buttonText: {displayText: 'Help'}, type: 1}
              ]
              
              const buttonMessage56 = {
                  text: "BAKA!! , The bot will only listen to commands specified in the command list. type :help if you dont want to be blocked. ",
                  footer: 'webster Botz',
                  buttons:yo,
                  headerType: 1
              }
              
            await astro.sendMessage(from, buttonMessage56)
            }
           
      
    }            
//  })(); //DONT EDIT TO AVOID ERRORS


} catch (e) {

console.log(e)
}


}


