import Jsonp from 'jsonp'
export default class Axios{
   static jsonp(data){
       return new Promise((resolve,reject)=>{
           Jsonp(data.url,{
               param:'callback'
           },function(err,res){
                      resolve(res)
                       reject(err)
           })
       })
   }
}