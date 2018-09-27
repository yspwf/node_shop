const mongoose = require('mongoose');

const mogo_connect = require('./mongoose.js');


function check(str){
	if(err){
		console.log(err);
	}else{
		console.log('34223');
	}
}

/**文章**/

const ArticleShema = new mongoose.Schema({
	title: {type:String},
	catogory: {type:Number},
	tag: {type:Number},
	views: {type:Number},
	like: {type:Number},
	coverImage: {type:String},
	auther: {type:String},
	intro: {type:String},
	content: {type:String},
	createtime: {type:Date} 
});

//构建model
const Article = mongoose.model('Article', ArticleShema, 'article');


const ArticleDao = function(){};


ArticleDao.prototype.ArticleAdd = function(data){
		return new Promise((resolve, reject)=>{
			let obj = new Article(data);
			obj.save(function(error, doc){
				if(error){
					reject(error);
				}else{
					resolve(doc);
				}
			});
		});
};

ArticleDao.prototype.ArticleDel = function(where){
	return new Promise((resolve, reject)=>{
		Article.deleteMany(where, function(err, doc){
			if(err){
				reject(err);
			}else{
				resolve(doc);
			}
		});
		/*Article.remove(where, function(err, doc){
			if(err){
				reject(err);
			}else{
				resolve(doc);
			}
		});*/
	});
};


ArticleDao.prototype.ArticleList = function(){
		return new Promise((resolve, reject)=>{
			Article.find(function(err, docs){
				if(err){
					reject(err);
				}else{
					resolve(docs);
				}
			});
		});
}


module.exports = new ArticleDao();




/*
exports.ArticleAction = function(data){
	return new Promise((resolve, reject)=>{
		var test = new Article(data);
		test.save(function(error, doc){
			 if(error){
			     reject(error);
			  }else{
			     resolve(doc);
			  }
		});
	});
}




/*
const userSchema = new mongoose.Schema({
	name: {type:String},
	age:  {type:Number, defaut:0}
});

//构建model
const User = mongoose.model('User',userSchema,'user');

User.find({}).then((doc)=>{
	console.log(doc);
}).catch((err)=>{});

/*
User.create({name:'Ysp',age:18}).then((res)=>{
	console.log(res);
});
*/