 const Koa = require('koa') // koa 2.x 
 const router = require('koa-simple-router')
 const serve = require('koa-static');
 const convert = require('koa-convert');
 const path = require('path');
 const render = require('koa-swig');
 const co = require('co');
 const axios = require('axios');
 const app = new Koa()
 
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
		method:'get',
		data:{
			'id':ctx.query.id,
			'number':ctx.query.number,
		         }
		}).then(function (res) {
	  	  	console.log(res.data)
    	   	  ctx.body=res.data;
	  	  })
	  	  .catch(function (error) {
	  	  	console.log('14');
	  	  });
	  })
	  _.get('/getCount',  async (ctx, next) => {//获取初始数
	      	await axios({
		url:`http://localhost:8050/homework02/servers/getCount.php?id=${ctx.query.id}`,
		method:'get',
		})
	  	  .then(function (res) {
	  	  	console.log(res.data)
    	   	 	 ctx.body=res.data;
	  	  })
	  	  .catch(function (error) {
	  	  	console.log('14');
	  	  });

	  })
	    _.get('/index/index', async(ctx, next) => {
	        	ctx.body=await ctx.render('index.html')
	  })
	  _.get('/index/data', async(ctx, next) => {
	        	ctx.body=await ctx.render('data.html')
	  })
}));

app.use(convert(serve(path.join(__dirname ,'./public'))));
app.listen(4800);