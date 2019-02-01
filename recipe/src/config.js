const baseUrl="/api/cook/"
export default {
    recipeDaqo:baseUrl+"query.php",// 获取菜谱大全
    category:baseUrl+"category" ,   //分类标签列表
    index:baseUrl+"index",         //按标签搜索菜谱
    queryid:baseUrl+"queryid"      //根据菜谱id 查看菜谱详情
}
