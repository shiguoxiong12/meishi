<template>
    <div class="scrollWraper" ref="scroll">
        <slot></slot>
    </div>
</template>

<script>
   import BScroll from 'better-scroll'
    export default {
        created(){

        },
        mounted(){

            let scroll = new BScroll('.scrollWraper',{
                scrollY: true,
                click: true
            })
        }
    }
</script>

<style scoped>
.scrollWraper{
    height:100vh;
}
</style>