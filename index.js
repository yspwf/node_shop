const Koa = require('koa');
const app = new Koa();


/**koa-router    路由引入   **/
const KoaRouter = require('koa-router');
const Router = new KoaRouter();



/** post数据解析 **/
const BodyParser = require('koa-bodyparser');
app.use(BodyParser());


/** 时间 moment **/
const moment = require('moment');


/** 引入控制器  **/
const ArticleController = require('./controller.js');


Router.get("/", async (ctx, next)=>{
	ctx.body="首页";
})

Router.get("/articlelist", async (ctx, next)=>{
	let res = await ArticleController.ArticleList();
	//console.log(res);
	ctx.body = res;
});
Router.post("/articleadd", async (ctx, next)=>{
	const msg = {};
	const data = ctx.request.body;
	if(data.title == ''){
		msg.success = false;
		msg.errormsg = "标题不能为空！";
		ctx.body = msg;
	}
	if(data.catogory == ''){
		msg.success = false;
		msg.errormsg = "分类不能为空！";
		ctx.body = msg;
	}
	if(data.tag == ''){
		msg.success = false;
		msg.errormsg = "标签不能为空！";
		ctx.body = msg;
	}
	if(data.coverImage == ''){
		msg.success = false;
		msg.errormsg = "封面不能为空！";
		ctx.body = msg;
	}
	if(data.intro == ''){
		msg.success = false;
		msg.errormsg = "简介不能为空！";
		ctx.body = msg;
	}
	if(data.content == ''){
		msg.success = false;
		msg.errormsg = "内容不能为空！";
		ctx.body = msg;
	}

	data.createtime = moment().format("YYYY-MM-DD HH:mm:ss");

	let res = await ArticleController.ArticleAdd(data);
	if(res != ''){
		msg.success = true;
		msg.errormsg = "";
		ctx.body = msg;
	}
	//console.log(ctx.request.body);
	//ctx.body ="添加";
});


Router.get("/articledel", async (ctx, next)=>{
	//console.log(ctx.request.query);
	const data = ctx.request.query;
	let res = await ArticleController.ArticleDel(data);
	console.log(res);
	//ctx.body ="删除";
});


Router.post("/articleup", async (ctx, next)=>{
	ctx.body ="修改";
});

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

