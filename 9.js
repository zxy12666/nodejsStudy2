/**
 * Created by FSZJ_ZhangXY on 2017/4/25.
 */
var fs = require('fs');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
/*
fs.readFile('./test/text1.txt','utf-8', function (err, data) {
    if (err) throw err;
    fs.readFile('./test/text2.txt','utf-8', function (err, data2) {
        if (err) throw err;
       console.log(data+" "+data2)
    });
});*/
/*var fs = require('fs');
var a,b;
fs.readFile('./test/text1.txt','utf-8', function (err, data) {
    if (err) throw err;
    a=data;
});
fs.readFile('./test/text2.txt','utf-8', function (err, data2) {
    if (err) throw err;
    b=data2
});
console.log(a+" "+b)*/

/*// 要处理的文件列表
var files = ['./test/text1.txt', './test/text2.txt'];
var str="";
function parseFile () {
    if (files.length == 0) {
        console.log(str);
        return;
    }
    var file = files.shift();
    fs.readFile(file, function (err, data) {
        str+=data;    // 这里处理文件数据
        parseFile();  // 处理完毕后，通过递归调用处理下一个文件
    });
}
// 开始处理
parseFile();*/

/*var promise = new Promise(function(resolve, reject) {
    fs.readFile('./test/text1.txt','utf-8', function (err, data) {
        resolve(data);
    });
});
var promise2 = new Promise(function(resolve, reject) {
    fs.readFile('./test/text2.txt','utf-8', function (err, data2) {
        resolve(data2);
    });
});
promise.then(function (value) {
    return value+"nodejs"
}).then(function(value){
    console.log(value)
});

promise.then(function (value) {
    promise2.then(function(value2){
        console.log(value+value2)
    });
});
Promise.all( [promise, promise2]).then(values => {
    var str="";
    for(var i=0;i<values.length;i++){
        str+=values[i];
    }
    console.log(str);
});*/

var sleep1 = async(
    function sleep() {
        return new Promise(function (resolve, reject) {
            fs.readFile('./test/text1.txt','utf-8', function (err, data) {
                resolve(data);
            });
        });
    }
);

var sleep2 = async(
    function sleep() {
        return new Promise(function (resolve, reject) {
            fs.readFile('./test/text2.txt','utf-8', function (err, data) {
                resolve(data);
            });
        });
    }
);
(async(
    function () {
        console.log('Do some thing, ' + await(sleep1())+await(sleep2()));
    }
))();