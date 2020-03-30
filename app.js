const Koa=require('koa')
const bodyParser=require('koa-bodyparser')

const app=new Koa()

app.use(async (ctx,next)=>{
    console.log(`请求方式：${ctx.method}，请求路径：${ctx.url}`);
    await next()
})

app.use(bodyParser())

const controller=require('./controller')

app.use(controller())

app.use(async (ctx,next)=>{
    console.log(`我的妈呀`);
})


app.listen(8080)
console.log('app started at port 8080...')
