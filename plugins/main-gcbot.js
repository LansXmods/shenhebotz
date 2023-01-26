let handler = async (m, { conn, usedPrefix }) => { 
      conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 25000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `Untuk menghindari admin group marah:'v silahkan cek chat private bot untuk link group bot`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
      conn.reply(m.sender, `Group LansModz : https://chat.whatsapp.com/F9St301rfmhE7xOFBKmvG2`, m)
}
handler.help = ['gcbot'] itu
handler.tags = ['main', 'new']
handler.command = /^(gcbot)$/i

module.exports = handler