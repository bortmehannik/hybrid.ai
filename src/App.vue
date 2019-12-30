<template lang="pug">
  #app
    router-view
</template>

<script>
export default {}
</script>

<style lang="stylus">
*
  box-sizing border-box
body
  background-color #FAF3F3
  font-family 'Inter'
  margin 0
  color #181C43
.container
  width 1200px
  margin 0 auto
h1, p
  text-align center
h1
  font-size 40px
  margin-bottom 25px
p
  font-size 25px
  margin-top 0
  font-weight 300
.white-bg
  background-color #ffffff
.black-bg
  background-color #1E1A3E
form
  width 50%
  margin 0 auto
  border-radius 40px
  padding 20px
.form-group
  display flex
  flex-direction column
  margin-bottom 25px
  position relative
  label
    font-size 12px
    font-weight 600
    line-height 20px
    padding-left 18px
  input
    background #F3F3FA
    border-radius 50px
    border none
    height 36px
    outline none
    padding-left 18px
    font-size 14px
    line-height 20px
    color rgba(0, 0, 0, 0.8)
  button
    height 48px
    color #ffffff
    font-weight 500
    font-size 14px
    line-height 20px
    border-radius 50px
    cursor pointer
  > i
    position absolute
    top 30px
    right 18px
    cursor pointer
  &__group
    display flex
    justify-content space-between
    padding 0 18px
    align-items center
    label
      padding-left 0
    i
      font-size 12px
      color #1E1A3E
      opacity 0.2
      cursor pointer
  &.btn-group
    margin-bottom 0
    p
      margin 0
  input.error
    background rgba(255, 102, 131, 0.2)
  small
    display none
    color #FF6683
    padding-left 18px
  &.errorGroup
    small
      display block
  &.button
    margin-top 50px
.footer
  text-align center
  margin-top 20px
  p, a
    font-weight 500
    font-size 14px
    line-height 20px
    margin-bottom 0
    color #1E1A3E
@media (max-width 980px)
  h1
    font-size 30px
    margin-bottom 15px
  p
    font-size 20px
  .container
    width 768px
  .h-group
    width 30%
  .img-container
    img
      width 30%
  .error-popup
    width 50%
@media (max-width 768px)
  h1
    font-size 22px
  p
    font-size 14px
  .container
    width 420px
  form
    width 100%
  .h-group
    width 70%
  .text-btn
    font-size 14px
  .img-container
    img
      width 50%
  .error-popup
    width 90%
@media (max-width 420px)
  h1
    margin-top 65px
    margin-bottom 20px
  form
    width 90%
  .container
    width 100%
  .img-container
    img
      width 100%
</style>
