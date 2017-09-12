
import RequestService from './BaseServices';

import serverConfig from '../config';
const serviceUrl = serverConfig.server.main_url
function makeUrl(url) {
    if(url){
        return serviceUrl + url
    }
    return serviceUrl;

}
export default function getList(url,options) {
    return RequestService.get(
        makeUrl(url),
        options
    )
}