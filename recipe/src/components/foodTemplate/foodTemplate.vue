<template>
    <div class="food">
       <div>
         <h3 class="title">{{food.title}}</h3>
         <div class="wraper">
              <div class="albums">
                   <img :src="food.albums" alt="">
              </div>
              <div class="">
                <h4>
                   <div class="burden">
                        配料:  <span>{{food.burden}}</span>
                   </div>
                </h4>
                <h4>
                    <div class="ingredients">
                        主料:  <span>{{food.ingredients}}</span>
                   </div>
                </h4>
                <div class="tags text">
                  介绍: {{food.tags}}
                </div>
                <br/> <br/> 
                    <div class="imtro text">
                        来源: {{food.imtro}}</div>
                    </div>
                </div> 
         </div>
         <van-button plain type="primary" @click="getFoodDetail(food.id)" class="getDetailBtn">点击查看详细做法</van-button>
    </div>
</template>

<script>
    export default {
        props:{
            food:{
                type:Object
            }
        },
        created(){
          
        },
        methods:{
            getFoodDetail(id){
                this.$emit("getFoodDetail",id)
            }
        }
    }
</script>

<style scoped>
.food{
    width: 800px;
    margin: 20px auto;
    font-size: 14px;
    text-align: center;
    border:1px solid #ccc;
    border-radius: 4px;
    box-shadow: 10px 10px 10px pink;
    padding: 30px;
    box-sizing: border-box;
    user-select: none;
}
.text{
    text-align: justify;
    text-indent: -37px;
    margin-left: 40px;
    margin:0 auto;
}
.title{
    margin: 20px 0;
}
.getDetailBtn{
    margin:30px 0;
    height:50px;
    border-radius:25px;
}
.getDetailBtn:hover{
    color:red;
    cursor: pointer;
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
</style>