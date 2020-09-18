// function m1(){
//     var a = 1;
//     return a;
// }
// var a = m1();
// console.log(a);

function m1(){
    var a = 1;
    function m2(){
        a++;
        console.log(a);
    }
    return m2;
}
var b = m1();
b();    //2
b();    //3



function constructor(){
    var pwd = 'kyrie';
    return{
        get:function(){
            return pwd;
        },
        _set:function(newValue){
            pwd = newValue;
            return true;
        }
    }
}
var pwdMode = constructor();
console.log( pwdMode.get() );
pwdMode._set('lebron');
console.log(pwdMode.get());


var aLi = document.querySelectorAll('.list li');
// for(var i = 0, len = aLi.length; i < len; i++){
//     console.log(i);
//     aLi[i].addEventListener('click',function(){
//         console.log(aLi[i]);
//         console.log(i);
//     });
// }
// for(let i = 0,len = aLi.length; i < len; i++){
//     console.log(i);
//     aLi[i].addEventListener('click',function(event){
//         event = event || window.event;
//         console.log(aLi[i]);
//         console.log(i);
//     })
// }

// for(var i = 0,len = aLi.length; i < len; i++){
//     (function(i){
//         console.log(i);
//         aLi[i].onclick = function(){
//             console.log(i);
//             console.log(aLi[i]);
//         }
//     })(i);
// }

// for(var i = 0, len = aLi.length; i < len; i++){
//     console.log(i);
//     aLi[i].onclick = (function(i){
//         return function(){
//             console.log(i);
//             console.log(aLi[i]);
//         }
//     })(i);
// }

for(var i = 0,len = aLi.length; i < len; i++){
    aLi[i].index = i;
    aLi[i].addEventListener('click',function(){
        console.log(aLi[this.index]);
    },false);
}

let add = function(n){
    let sum = n;
    let tfo = function(m){
        sum += m;
        return tfo;
    }
    tfo.toString = function(){
        return sum;
    }
    return tfo;
};
+add(3)(2)(5)


function fun(n,o){
    console.log(o);
    return {
        fun:function(m){
            return fun(m,n);
        }
    }
}

// 闭包
function makeAdder(x){
    function add(y){
        return x + y;
    }
    return add;
}

var plusOne = makeAdder(1);
console.log( plusOne(3) );      // 4
console.log( plusOne(10) );     // 11

var plusTen = makeAdder(10);
console.log( plusTen(13) )      // 23


function user(){
    var user,password;
    function doLogin(user,password){
        user = user;
        password = password;
    }
    var publicApi = {
        login:doLogin
    }
    return publicApi;
}

var fred = user();
fred.login('fred','123456');


if( !Number.isNaN ){
    Number.isNaN = function(x){
        return x !== x;
    }
}





