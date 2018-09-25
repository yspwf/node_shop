const mongoose = require('mongoose');

const mogo_connect = require('./mongoose.js');


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