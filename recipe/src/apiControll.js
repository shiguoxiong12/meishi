import {Http} from './http.js'

class recipe extends Http{
    constructor(name){
      
        super();  
    }
    recipeDaqo({method,url,data}){           // 获取菜谱大全

       return  this.http({method,url,data})
    }
    category({method,url,data}){            //分类标签列表
        return  this.http({method,url,data})
    }
    index({method,url,data}){               //按标签搜索菜谱
        return  this.http({method,url,data})
    }
    queryid({method,url,data}){             //根据菜谱id 查看菜谱详情
        return  this.http({method,url,data})
    }
}
export {recipe}