const axios = require('axios');
const {inrl} = require('../lib');
const {CHATBOT_PM,CHATBOT_GRP,PREFIX} = require('../config');
inrl({
	on: "text"
}, async (m, match) => {
  if(m.isBot) return;
  if(m?.fromMe) return;
if(PREFIX=='false') return;
  if(CHATBOT_PM && !m.isGroup){
  let {data} = await axios(`http://api.brainshop.ai/get?bid=172372&key=nbjE0YAlyw3cpoMl&uid=[${m.sender}]&msg=[${m.client.body}]`)
  return await m.reply(data.cnt)
  } else if(CHATBOT_GRP && m.isGroup){
  let {data} = await axios(`http://api.brainshop.ai/get?bid=172372&key=nbjE0YAlyw3cpoMl&uid=[${m.sender}]&msg=[${m.client.body}]`)
  return await m.reply(data.cnt)
  }
});
