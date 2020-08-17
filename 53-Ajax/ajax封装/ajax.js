/* 
1. 请求的地址 url
2. 请求的方式method  get post
3. 请求同步还是异步 async
4. 请求的数据 data
5. 请求成功执行的函数 success

*/ 

function ajax(obj){
    var xhr = new XMLHttpRequest();
    if( obj.method == 'GET' && obj.data){
        // 将请求的数据拼接到 url 后面,需要封装一个函数 拆分data的数据
        obj.url += params(obj.data);
    }
    // 默认是true,异步请求
    if(!obj.async){
        obj.async = true;
    }
    // 准备
    xhr.open(obj.method,obj.url,obj.async);
    // 如果请求是POST,设置请求头
    if(obj.method == 'POST'){
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.send(params(obj.data));
    }else{
        xhr.send();
    }
    // 接收数据
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            // 将获取到的数据作为参数 传入 success函数
            obj.success && obj.success( xhr.responseText)
        }
    }
}

// url?name=jay&age=40;
function params(obj){
    let str = '?';
    for(let key in obj){
        str += key;
        str += '=';
        str += obj[key];
        str += '&';
    }
    return str.slice(0,str.length-1);
}


// 			/*
// 		   1. 请求的地址 url
// 		   2. 请求的数据参数 data
// 		   3. 同步请求还是异步请求 async：true/false 默认是异步
// 		   4. 请求的方法method GET POST
// 		   5. 请求成功后的回调函数 success
// 		   6. 请求失败后的回调函数 fail
// 			*/
// 		   function ajax(obj){
// 			   let xhr = new XMLHttpRequest();
// 			   if(!obj.async){
// 				   obj.async = true;
// 			   };
// 			   if(obj.method == "GET" && obj.data){
// 				   obj.url += params(obj.data);
// 			   };
// 			   xhr.open(obj.method,obj.url,obj.async);
// 			   if(obj.method == "POST"){
// 				   xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
// 				   xhr.send(params(obj.data));
// 			   }else{
// 				   xhr.send();
// 			   }
// 			   xhr.onreadystatechange = function(){
// 				   if(xhr.readyState == 4 && xhr.status == 200){
// 					   obj.success && obj.success(JSON.parse(xhr.responseText) );
// 				   }
// 			   }
// 		   }
// 			function ajax1(obj){
// 				let xhr = new XMLHttpRequest();
// 				if(!obj.async){
// 					obj.async = true;
// 				}
// 				if(obj.method == "GET"){
// 					obj.url += formData(obj.data);
// 					xhr.open(obj.method,obj.url,obj.async);
// 					xhr.send(null);
// 				}
// 				if(obj.method == "POST"){
// 					xhr.setRequestHeader("Content-Type","appliction/x-www-form-urlencoded");
// 					xhr.open(obj.method,obj.url,obj.async);
// 					xhr.send(formData(obj.data));
// 				}
// 				xhr.onreadystatechange = function(){
// 					if(xhr.readyState == 4 && xhr.status == 200){
// 						obj.success && obj.success( JSON.parse(xhr.responseText) );
// 					}
// 				}
// 		   }
// 		   let player = {
// 			   name:"kyrie",
// 			   age:26
// 		   }
// 		   function params(data){
// 			   let str = "?";
// 			   for(let key in data){
// 				   console.log(key,data[key]);
// 				   str+=key;
// 				   str+="=";
// 				   str+=data[key];
// 				   str+="&";
// 			   }
// 			   let newStr = str.substring(0,str.length-1);
// 			   return newStr;
// 		   }
// 		   function formData(data){
// 			   let [arr,str] = [[],"?"];
// 			   for(let [key,value] of Object.entries(data)){
// 				   arr.push(key,"=",value,"&");
// 			   }
// 			   arr.pop();
// 			   str += arr.join("");
// 			   return str;
// 		   }
//
// 		   ajax1({
// 			   url:"https://api.wulv5.com/music/top/list",
// 			   method:"GET",
// 			   data:{
// 				   idx:14
// 			   },
// 			   success(data){
// 				   console.log(data);
// 			   }
// 		   });
//
// 		   ajax({
// 			   url:"https://api.wulv5.com/music/personalized",
// 			   method:"GET",
// 			   success(data){
// 				   console.log(data);
// 			   }
// 		   });
//
// 		   // 利用Promise 封装
// 		   function promiseAjax(obj){
// 			   let xhr = new XMLHttpRequest();
// 			   if(!obj.async){
// 				   obj.async = true;
// 			   }
// 			   if(obj.method.toLowerCase() == "get"){
// 				   obj.url += formData(obj.data);
// 				   xhr.open(obj.method,obj.url,obj.async);
// 			   }
// 			   if(obj.method.toLowerCase() == "post"){
// 				   xhr.open(obj.method,obj.url,obj.async);
// 				   xhr.setHeaderRequest("Content-Type","application/x-www-form-urlencoded");
// 				   xhr.send(formData(obj.data));
// 			   }else{
// 				   xhr.send(null);
// 			   }
// 				return new Promise(function(resolve,reject){
// 					xhr.onreadystatechange = function(){
// 						if(xhr.readyState == 4){
// 							if(xhr.status == 200){
// 								resolve(JSON.parse(xhr.responseText))
// 							}else{
// 								reject(xhr.status);
// 							}
// 						}
// 					}
// 				})
// 		   }
// 		   let p = promiseAjax({
// 			   url:"https://api.wulv5.com/music/artists",
// 			   method:"GET",
// 			   data:{
// 				   id:6452
// 			   }
// 		   });
// 			p.then(data => {
// 				console.log(data);
// 			}).catch(err=>{
// 				console.log(err);
// 			});