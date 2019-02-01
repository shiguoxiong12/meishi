<template>
    <div class="foodContent">
        <div class="content" >
           <van-tabs>
                <van-tab v-for="(item,index) in foodContent.list" :key="index" :title="item.name" class="Tab">
                   <foodTemplate/>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
    import foodTemplate from '../foodTemplate/foodTemplate'
    export default {
            props:{
                foodContent:{
                   type:Object
               },
            },
            mounted(){
                console.log(this.foodContent)
            },
            components:{
              foodTemplate
            },
           data(){
               return{
                   active:0
               }
           }
    }
</script>

<style scoped>
.Tab{
    width:50%;
}
</style>