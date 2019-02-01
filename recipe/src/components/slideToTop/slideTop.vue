<template>
  
    <div class="slideTop" @click="runTop()"  v-show="scrollTop>1800">
        <img src="top.jpg" alt="一键回到顶部" title="一键回到顶部">
        <span>点我回到顶部</span>
    </div>
</template>

<script>
  
    export default {
        data(){
            return{
                scrollTop:0
            }
        },
        methods:{
            runTop(){
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
        },
        created(){
               document.addEventListener('scroll',(e)=>{
                    this.scrollTop=e.path[1].scrollY;
               })
        }
    }
</script>

<style scoped>
.slideTop{
    position: fixed;
    bottom:90px;
    left:30px;
    width:150px;
    height:60px;
    z-index: 999;
    color:blueviolet;
    cursor: pointer;
}
img{
    width:60px;
    height:60px;
    vertical-align: middle;
}
</style>