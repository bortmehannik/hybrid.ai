<template lang="pug">
    .container
        h1 Ready for a great User experience?
        p Bring your media to the next level!
        .h-group
            router-link.white-bg.text-btn(
                to="sign-up"
            ) Sign Up
            router-link.black-bg.arrow-btn(
                to="sign-in"
            ) <i class="fas fa-arrow-right"></i>
        .img-container
            img(
                src="@/assets/images/woman_home.png"
            )
</template>
<script>
export default {}
</script>

<style lang="stylus" scoped>
    .h-group
        width 20%
        margin 0 auto
        display flex
        justify-content space-evenly
    .text-btn
        border-radius 50px
        width 120px
        height 48px
        display flex
        align-items center
        justify-content center
        text-decoration none
        color #000000
    .arrow-btn
        font-size 23px
        color #ffffff
        width 48px
        height 48px
        display flex
        align-items center
        justify-content center
        border-radius 100px
        text-decoration none
    .img-container
        text-align center
        margin-top 30px
        img
            width 20%
</style>
