const { Telegraf, Markup ,Extra } = require('telegraf')

require('dotenv').config()

const TOKEN = process.env.TOKEN
const http = require("http")
const server = http.createServer((req , res) =>{
    res.end('server is runnig')
})




const bot = new Telegraf(TOKEN)


bot.start((ctx) => {
    ctx.reply('Wlecome to GDG Najaf Bot',
        Markup.keyboard([['mobiles', 'PC💻'], ['watches', 'tablets'], ['/help'], ['closing']])
    )
})




bot.hears('hi', (ctx) => {
    ctx.replyWithPhoto('https://picsum.photos/200/300/')
})
bot.hears('mobiles', (ctx) => {
    ctx.reply('HUAWEI Mobiles Section', Markup.inlineKeyboard([

        [Markup.button.callback('gdg-najaf', 'najaf')],
        [Markup.button.callback('gdg-baghdad', 'bg')],
        [Markup.button.callback('gdg-baghdad', 'bg3')]

    ]))
})


bot.action('najaf', (ctx) => {
    // ctx.deleteMessage()

    ctx.replyWithPhoto('https://picsum.photos/200/300/')

    ctx.answerCbQuery('تم الاستلام بنجاح')

})
bot.action('bg', (ctx) => {
    // ctx.deleteMessage()

    ctx.replyWithPhoto('https://picsum.photos/200/300/')

    ctx.answerCbQuery('تم الاستلام بنجاح')

})

bot.help((ctx) => {
    ctx.reply('contact us on 0890090')
})





// closing the keyboard
bot.hears('closing', (ctx) => {
    ctx.reply('thank you for attending this workshop, TO start click /start', Markup.removeKeyboard())
})



// reply with html tags

bot.hears('tablets', (ctx) => {
    ctx.replyWithHTML(`heloo MR <b> GDG </b> <i>hello </i> <u>undeline</u> <strong> text</strong>`)
})





process.on('unhandledRejection' , (err) =>{
    console.log('err : ' , err)
})



server.listen(process.env.PORT || 4000 , (err) => {
    if(!err){
        console.log(`server is runnig ${process.env.PORT || 4000}`)
    }
})
bot.launch()
