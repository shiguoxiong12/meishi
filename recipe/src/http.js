import axios from 'axios'
import Vue from 'vue'
class Http {
    constructor() {    //constructor 构造方法
       
    }
   http({method,url,data}){
     return  axios({
          method:method,
          url: url,
          params:Object.assign(data,{
               key:'66976b534369631d4bcdfa5cb74d9945'
          })
       });
   }
}
export {Http}