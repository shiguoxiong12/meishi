<template>
    <div class="silderBar">
       
           <ul class="slide">
               <li v-for="(item,index) in foodCatetory" :key="index"  :class="currentIndex==index ? 'currentIndex' : '' ">
                    <span @click="clickMenu(index)">{{item.name}}</span>
               </li>
          </ul>
      
    </div>
</template>

<script>
   
    export default {
        props:{

           foodCatetory:{
               type:Array
           }
        },
        data(){
           return{
               currentIndex:0
           }
        },
        components:{
          
        },
        methods:{
            clickMenu(e){
                
                this.currentIndex=e;
                this.$emit("clickMenu",e)
            }
        },
      
    }
</script>

<style scoped>
.silderBar{
    border-right:1px solid #ccc;
    background-color: pink;
    font-size: 16px;
    text-align: center;
}
.slide{
    padding-left: 0px;
}
.slide li{
    padding: 10px;
}
.currentIndex{
    color:red
}
</style>