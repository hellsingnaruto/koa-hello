let fn_index= async (ctx,next)=>{
    ctx.body=`
    <h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>
    `
    next()
}

let fn_signin=async (ctx,next)=>{
    let name=ctx.request.body.name || ''
    let password=ctx.request.body.password || ''
    console.log(`用户名：${name}，密码：${password}`);
    if(name==='koa' && password==='123456'){
        ctx.body=`欢迎回来，${name}`
    }else{
        ctx.body=`
        <h1>登陆失败！</h1>
        <p><a href="/">再试一次</a></p>
        `
    }
}

module.exports={
    'GET /':fn_index,
    'POST /signin':fn_signin
}