
var fn_signIn = async (ctx, next) => {
    var email = ctx.request.body.email || '',
        pwd = ctx.request.body.password || '';
        console.log(`email:${email}, pwd:${pwd}`);
        if(email === 'mgr@xx.com' && pwd==='456789'){
            console.log('sing in ok');
            ctx.render('index.html',{
                title:'free W',
                name:'Mgr'
            });
        }else{
            console.log('sing in faild');
            ctx.render('signin.html',{
                title:'free W',
                name:'Mgr',
                msg:'sing in faild'
            });
        }
}

var fn_index = async(ctx,next)=>{
    ctx.render('signin.html',{
        title :'free W'
    })
}



module.exports ={
    'POST /signin' : fn_signIn,
    'GET /' : fn_index
}