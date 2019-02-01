<template>
  <div id="app" style="padding-top:80px">
    <div class="title-name">
             <img src="/1.jpg" height="80px" style="vertical-align: top;margin-right:20px;"/>
             <span style="display:inline-block;text-align:center">春节美食系列菜谱</span>
             <div class="search-food" style="float:right;width: 300px;">
                 <van-search placeholder="请输入你想查找的菜品名称"   style="background-color:#fff;border-radius:22px;"/>
             </div>
     </div>
     <van-row class="content-row">
        <van-col span="3">
           <BetterScroll>
               <slide :foodCatetory="foodCatetory" @clickMenu="clickMenu"/>
           </BetterScroll>
        </van-col>
        <van-col span="2">
           <div class="sub-slider">
                <subSlider :subslider="foodContent" @subClickMenu="subClickMenu"/>
           </div>
           
        </van-col>
        <van-col span="19">
          <div class="foods" id="foods">
              <foodTemplate v-for="(item,index) in foodList.data" :food="item" :key="index" @getFoodDetail="getFoodDetail"></foodTemplate>
          </div>
        </van-col>
     </van-row>
     <van-popup v-model="show" @click-overlay="resolve" style="width:80%" v-show="show">
        <div class="model-box">
            <div>
         <h3 class="title">{{foodDetail.title}}</h3>
           <div class="wraper">
              <div class="albums">
                   <img :src="foodDetail.albums" alt="">
              </div>
              <div class="">
                <h4>
                   <div class="burden">
                        配料:  <span>{{foodDetail.burden}}</span>
                   </div>
                </h4>
                <h4>
                    <div class="ingredients">
                        主料:  <span>{{foodDetail.ingredients}}</span>
                   </div>
                </h4>
                <div class="tags text">
                  介绍: {{foodDetail.tags}}
                </div>
                <br/> <br/> 
                    <div class="imtro text">
                        来源: {{foodDetail.imtro}}</div>
                    </div>
                </div> 
           </div>
          <div class="step" style="margin-top:20px;">
             <div class="stepController" v-for="(item,index) in foodDetail.steps" :key="index">
                <img :src="item.img"/>
                <p>{{item.step}}</p>
             </div>
          </div>
        </div>
     </van-popup>
     <sliderTop/>
     <paging @selectChange="selectChange" :pageCount="pageCount"/>
  </div>
</template>
<script>
import {recipe} from './apiControll.js'
import api from './config.js'
import slide from './components/slider-left/slide'
import subSlider from './components/subslider/subslider'
import foodContent from './components/foodContent/foodContent'
import foodTemplate from './components/foodTemplate/foodTemplate'
import BetterScroll from './components/scroll/betterScroll'
import sliderTop from './components/slideToTop/slideTop'
import paging from './components/paging/paging'
const Recipe=new recipe()
export default {
   data(){
      return{
         foodCatetory:[],
         foodContent:{},
         foodList:[],
         foodDetail:{},
         show:false,
         pageCount:0,
         currentId:0
      }
   },
   components:{
      slide,
      subSlider,
      BetterScroll,
      foodContent,
      foodTemplate,
      sliderTop,
      paging
   },
   methods:{
      resolve(){
          this.foodDetail={}
      },
      selectChange(pageIndex){   //数据分页操作
          this.getFoodList(this.currentId,pageIndex).then(data=>{
               this.foodList=data.data.result;
               this.pageCount=data.data.result;
          })
      },
      clickMenu(e){
          this.filterFood(e);
          let subId=this.foodContent.list[0].id;
          this.subClickMenu(subId);
      },
      getFoodDetail(id){
           Recipe.queryid({
              method:'get',
              url:api.queryid,
              data:{
                id:id
              }
           }).then(data=>{
             this.foodDetail=data.data.result.data[0];
             this.show=true
           }).catch(error=>{
             console.log(error)
           })
      },
      subClickMenu(e){  //点击子菜单获取菜品
          this.getFoodList(e).then(data=>{
               this.foodList=data.data.result;
               this.pageCount=data.data.result;
              
          })
      },
      filterFood(index){
          this.foodContent= this.foodCatetory[index];
          
      },
     async getFoodList(id,pageIndex=0){
        if(!id){
           let cid =await this.getCategory();
           console.log(cid)
           id=this.currentId=cid.data.result[0].list[0].id;
        }

       return new Promise((resolve,reject)=>{
             Recipe.index({
              method:'get',
              url:api.index,
              data:{
                cid:id,
                dtype:'json',
                pn:pageIndex*10,
                rn:10,
              }
          }).then(data=>{
               resolve(data)
           
          }).catch(error=>{
          
          })
      })
        
      },
      refactoringData(){  //重构数据结构 以匹配  tab 所需数据源
         this.getCategory().then(data=>{
             data.data.result.map((item)=>{
                 let cid=
                 this.getFoodList()
             })
         }).catch(error=>{

         })
      },
      getCategory(){
        return new Promise((resolve,reject)=>{
              Recipe.category({
              method:'get',
              url:api.category,
              data:{}
            }).then(data=>{
              resolve(data)
                 // this.foodCatetory=data.data.result;
                 // this.foodContent= this.foodCatetory[0];
                  
              }).catch(error=>{

              })
           
        })
      }
          
   },
   created(){
     Promise.all([this.getCategory(),this.getFoodList()]).then(data=>{
      
            this.foodCatetory=data[0].data.result,
            this.foodContent= this.foodCatetory[0];
            this.foodList=data[1].data.result;
            this.pageCount=data[1].data.result.totalNum;
           
     })
     // this.getCategory();
    //  this.getFoodList(id)
      
   }
}
</script>

<style>
.sub-slider{
  height:100vh;
}
.text{
     text-align: justify;
     text-indent: -37px;
     margin-left: 40px;
     margin: 0 auto;
     width: 60%;
     line-height: 25px;
     
}
.title{
    margin: 20px 0;
    font-size: 25px;
}
.title-name{
    height:80px;
    line-height: 80px;
    text-align: center;
    font-size: 30px;
    color:orangered;
    background-color: aquamarine;
    position: fixed;
    width: 100%;
    /* margin-bottom: 80px; */
    top: 0px;
    z-index: 800;
    
}
.search-food{
    position: relative;
    right:30px;
    top:50%;
    transform: translateY(-50%)
}
.flex{
    display: flex;
    height:200px;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
}
.albums{
    width:30%;

    margin: 20px auto;
}
.albums img{
    width:230px;
    height:230px;
}
.model-box{
  padding: 20px;
  text-align: center;
}
</style>
