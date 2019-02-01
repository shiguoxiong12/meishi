<template>
    <div class="paging" style="line-height: 70px;">
          <van-pagination 
            v-model="currentPage" 
            :page-count="pageCount"
            mode="simple" 
            @change="selectChange"
            />
    </div>
</template>

<script>
    export default {
        props:{
          pageCount:{
              type:Number
          }
        },
        data(){
            return{
                currentPage:1
            }
        },
        methods:{
            selectChange(e){
                this.$emit('selectChange',e)
            }
        }
    }
</script>

<style scoped>

</style>