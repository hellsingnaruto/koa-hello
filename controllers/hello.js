let fn_hello=async (ctx,next)=>{
    let name=ctx.params.name
    ctx.body=`我的名字是：${name}`
}

module.exports={
    'GET /hello/:name':fn_hello
}