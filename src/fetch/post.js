//post.js
import 'whatwg-fetch';
import 'es6-promise';

export function post(url){
	var result = fetch(url,{
		headers: {
			'content-type': 'application/json'
		}
		method: 'POST',
		body: JSON.stringify(body)
	}).then( res=>{
		return res.json()
	}).then( data=>{
		console.log(data);
	}).catch(e=>{
		console.log("数据请求失败！");
	})
	return result;
}
