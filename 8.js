/**
 * Created by FSZJ_ZhangXY on 2017/4/25.
 */
var fs = require('fs');
fs.readFile("./test/file.txt",'utf-8',function(err,data){

    if (err) { console.error(err);

    } else { console.log(data);

    } });

console.log('end.');