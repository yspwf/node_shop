const Koa = require('koa');
const app = new Koa();


/**koa-router    路由引入   **/
const KoaRouter = require('koa-router');
const Router = new KoaRouter();

Router.get("/", async (ctx, next)=>{
	ctx.body="首页";
})



/*
app.use(async ctx=>{
	ctx.body ="hello koa";
});
*/

/**  使用 koa-router  路由组件   */
app.use(Router.routes()).use(Router.allowedMethods());


app.listen(8080, ()=>{
	console.log('server is runing........');
});

