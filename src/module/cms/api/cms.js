import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;

//定义方法，请求服务端的页面查询接口
export const page_list=(page,size,params)=>{
  //请求服务端的页面查询接口
  return http.requestGet(apiUrl+'/cms/page/list/'+size+'/'+page);
}




