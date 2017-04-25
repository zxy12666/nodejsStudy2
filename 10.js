/**
 * Created by FSZJ_ZhangXY on 2017/4/25.
 */
var async = require('asyncawait/async');
var await = require('asyncawait/await');

function sleep(timeout) {
    return new Promise(function (resolve, reject) {
       setTimeout(function () {
       resolve();
     }, timeout);
   });
}

(async(
    function () {
        console.log('Do some thing, ' + new Date());
        await(sleep(3000));
        console.log('Do other things, ' + new Date());
    }
))();