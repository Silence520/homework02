 const Koa = require('koa') // koa 2.x 
 const router = require('koa-simple-router')
 const serve = require('koa-static');
 const koaBody = require('koa-body');
 const convert = require('koa-convert');
 const path = require('path');
 const render = require('koa-swig');
 const co = require('co');
 const axios = require('axios');
 const app = new Koa()
 app.use(convert(serve(path.join(__dirname ,'./public'))));
// const mysql  = require('mysql');
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'thumbs'
// });
// connection.connect();

app.context.render = co.wrap(render({
	 root: path.join(__dirname, 'views'),
	 autoescape: true,
	 cache: 'memory', // disable, set to false 
	 ext: 'html',
	 varControls:['[[',']]'],
	 writeBody:false
}));

app.use(router( _ => {
	  _.get('/get', async (ctx, next) => { //更新点赞数据
	  	await axios({
		url:`http://localhost:8050/homework02/servers/server.php?id=${ctx.query.id}&number=${ctx.query.number}`,
		// headers:{'Content-Type':'application/x-www-form-urlencoded'},
		method:'get',
		}).then(function (res) {
    	   	  	ctx.body=res.data;
	  	}).catch(function (error) {
	  	  	console.log('14');
	  	});
	  })
	  _.get('/getCount', async (ctx, next) => {//获取初始数
	      	await axios({
		url:`http://localhost:8050/homework02/servers/getCount.php?id=${ctx.query.id}`,
		method:'get',
		}).then(function (res) {
    	   	 	 ctx.body=res.data;
	  	}).catch(function (error) {
	  	  	console.log('error');
	  	});
	  })
	  _.post('/index/getnum', koaBody(),  async (ctx, next) => {//获取初始数
	  	console.log(ctx.request.body)
	  	ctx.body=ctx.request.body;
	  })
	    _.get('/index/index', async(ctx, next) => {
	        	ctx.body=await ctx.render('index.html')
	  })
	  _.get('/index/data', async(ctx, next) => {
	        	ctx.body=await ctx.render('data.html')
	  })
	  _.get('/*', async(ctx, next) => {
	    	ctx.status=404;
	        	ctx.body='您的页面不翼而飞啦~~~哈哈！';
	        	// ctx.body='您的页面不翼而飞啦~~~哈哈！';
	        	// ctx.body='您的页面不翼而飞啦~~~哈哈！';
	        	// ctx.body='您的页面不翼而飞啦~~~哈哈！';
	 })

}));

app.listen(4800);