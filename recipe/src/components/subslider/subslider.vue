<template>
    <div class="subslider">
        <van-list>
            <van-cell
                v-for="(item,index) in subslider.list"
                :key="item.id"
                :title="item.name"
                :class="currenIndex==index ? 'currenIndex' : ''"
                @click="clickSubMenu(item.id,index)"
            />
       </van-list>
    </div>
</template>

<script>
    export default {
        props:{
            subslider:{
                type:Object
            }
        },
        watch:{
           subslider(){
                this.currenIndex=0;
           }
        },
        data(){
            return{
                currenIndex:0
            }
        },
        methods:{
           clickSubMenu(id,index){
               this.currenIndex=index;
               this.$emit('subClickMenu',id)
           }
        },
        created(){
            console.log(this.subslider)
        }
    }
</script>

<style scoped>
.subslider{
    width: 100%;
    background-color: pink !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 40px;
    border-radius: 4px;
}
.subslider .van-list .van-cell{
      background-color: pink !important;
}
.currenIndex{
    color:green;
}
</style>