const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));

exports.handler = async (event) => {
  await bot.handleUpdate(JSON.parse(event.body));
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Bot update handled" }),
  };
};
