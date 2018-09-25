const mongoose = require('mongoose');
const Url = "mongodb://127.0.0.1:27017/shop";

/*
mongoose.connect(Url, (err)=>{
	if(err){
		console.log(err);
	}else{
		console.log('success');
	}
});

*/
mongoose.connect(Url,{server:{auto_reconnect: true}});
//const db = mongoose.connection;
mongoose.connection.on('open',() => {
    console.log('======mongooDB数据库连接成功======');
    //log.info('mongooDB数据库连接成功.端口号：' + 27017); //自定义日志存储
});

mongoose.connection.on('error',function (error) {
    console.error('mongooDB数据库连接错误：' + error);
    //log.debug('mongooDB数据库连接成功.' + error); //自定义日志存储
    mongoose.disconnect();
});

mongoose.connection.on('close',function () {
    console.log('mongooDB数据库断开，请重新连接.');
    //log.trace('mongooDB数据库断开，请重新连接.');
    mongoose.connect(Url, {server:{auto_reconnect:true}});
});



































