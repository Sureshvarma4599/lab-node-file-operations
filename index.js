const os = require('os')
const file=require('fs')
var data = os.userInfo()
var val=os.cpus()
var value=require('./data')
var userdata= value.data("Prograd",2020,"BE")
const crypto = require('crypto');
const secret = 'abcdefg';
const password = crypto.createHmac('sha256', secret).update('Prograd').digest('hex');

console.log("name : ",userdata.name)
console.log("year : ",userdata.Year)
console.log("qualification : ",userdata.Qualification)
console.log("Username : ",data.username)
console.log("UserId : ",data.uid)
console.log("password : ",password)

/*
file.appendFile('message.txt',( "ProGrad Details" userdata.name,

     "UserId -> " ,data.uid,
     "Name ->", userdata.name, 
     "Year ->" ,userdata.Year,
     " Qualification -> ",userdata.Qualification,
       " UserName->",data.username,
       " Password ->" , password ), (err) => { 
            if (err) throw err;
             console.log('The "data to append" was appended to file!');
             });

file.appendFile('message.txt',( ProGrad Details UserId -> ${data.uid}, Name -> ${userdata.name}, Year -> ${userdata.Year}, Qualification -> ${userdata.Qualification}, UserName-> ${data.username}, Password -> ${password} ), (err) => { if (err) throw err;
     console.log('The "data to append" was appended to file!'); });
*/
file.appendFile('message.txt',( `ProGrad Details UserId -> ${data.uid}, Name -> ${userdata.name}, Year -> ${userdata.Year}, Qualification -> ${userdata.Qualification}, UserName-> ${data.username}, Password -> ${password}` ), (err) => { if (err) throw err; console.log('The "data to append" was appended to file!'); });
