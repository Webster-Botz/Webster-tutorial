const {default: makeWASocket,DisconnectReason,BufferJSON, useMultiFileAuthState} = require('@adiwajshing/baileys')
const  mk = require('@hapi/boom')
const CFonts = require('cfonts')
const color = require('./lib/color')
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const axios = require('axios')
const brain = require('./web')
const pino = require('pino')

CFonts.say('Webster Bot©', {
        font: 'block',
        align: 'center',
        gradient: ['blue', 'magenta']
        })

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
readline.question(`ENTER BOT SESSION:=> `, (name) => {

    console.log(`LOGGING ON ${name}! to port -> ws://localhost:3000`)

    readline.close()

console.log(color('=> Bot successfully loaded! Database:', 'yellow')),

console.log(color('[WEBSTER]'), color('🕸️Webster-Bot🕷️ is now online!', 'yellow'))

console.log(color('[DEV]', 'cyan'), color('Welcome back, Owner! Hope you are doing well~', 'magenta'))

async function connectToWhatsApp () {

const { state, saveCreds } = await useMultiFileAuthState(`./Web-Session/${name}.session`)
//Do Not edit to avoid errors


const web =   makeWASocket({logger:pino({level:'silent'}),printQRInTerminal: true,auth: state})



web.ev.on('connection.update', (update) => {

const { connection, lastDisconnect } = update

if(connection === 'close') {

    const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut

    console.log('connection closed due to ', lastDisconnect.error, ', reconnecting ', shouldReconnect)

    // reconnect if not logged out

    if(shouldReconnect) {

        connectToWhatsApp()

    }

} else if(connection === 'open') {

    console.log(`${name} Has Been Successfully Connected To Webster Vps Server`)

}

//Anti-Block
web.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await web.sendContact(callerId, ownerNumber)
    web.sendMessage(callerId, { text: `Baka! You will be blocked automatically for calling me!`}, { quoted : pa7rick })
    await sleep(8000)
    await web.updateBlockStatus(callerId, "block")
    }
    })




web.ev.on('messages.upsert', async (mek) => {

msg = mek.messages[0]

mek = mek.messages[0]

brain(web ,msg, mek)

})


web.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
       
        try {
            let metadata = await web.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                
                grpmembernum = metadata.participants.length

            
                if (anu.action == 'add') {
                let WAuserName = num
                webtext = `Welcome to |   *${metadata.subject}*   | 

*@${WAuserName.split("@")[0]}*

Have fun with us✨

Group Description

${metadata.desc}
`
    let buttonMessage = {
    //image: await axios.get(ppgroup),
    mentions: [num],
    text: webtext,
    footer: `web`,
    headerType: 4,
    }
web.sendMessage(anu.id, buttonMessage)

                } else if (anu.action == 'remove') {
                	let WAuserName = num
                    webtext = `GoodBye 👋, @${WAuserName.split("@")[0]} We wont miss you~!`

    let buttonMessage = {
	//image: await axios.get(ppuser),
    mentions: [num],
    text: webtext,
    footer: `web`,
    headerType: 4,
    
    }
    web.sendMessage(anu.id, buttonMessage)}}
            } catch (err) {
                console.log(err)
            }
    })
    
astro.ev.on ('creds.update', saveCreds)

)
}



connectToWhatsApp()




}
)