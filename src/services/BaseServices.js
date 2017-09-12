
import 'whatwg-fetch';
import 'es6-promise';



function isObject(value) {
    return typeof value === 'object';
}
function isUndefined(value) {
    return typeof value === 'undefined';
}
function dealData(jsonData) {
    let str = '';
    if(isObject(jsonData)){
        str+='?';
        let strs = '';
        for(let i in jsonData){
            strs += `${i} = ${jsonData[i]} &`
        }
        strs.length = strs.length - 1;
        str += strs;
        return str;
    }else{
        return str;
    }
}
function fetchData(url,data,type) {
    if(type == "POST"){
        return fetch(url, {
            method: 'POST',
            credentials: 'include',
            // headers: {
            //     'Content-Type': 'application/json'
            //     'Content-Type': 'multipart/form-data'
            // },
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            mode:'no-cors',
            body: data && JSON.stringify(data) || null
        })
    }else{
        let requestUrl = data ? url + dealData(data) : url;
        return fetch(requestUrl,{
            credentials: 'include',
            headers: {
                'Accept': 'application/json, text/plain, */*'
            },
            mode:'no-cors'
        }).then(res => {
            return res.json()
        });
    }

}
export let RequestService = {
    get: function (url,data,) {
        return fetchData(url,data)
    },
    post: function (url,data) {
        return fetchData(url,data,'POST')
    },
    request: fetchData
};



export default RequestService;
