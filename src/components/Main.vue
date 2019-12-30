<template lang="pug">
  .container
    button(
      @click="logout"
    ) Выход
    h1 Hello, {{ setUser }}
    .img-container
      img(
        src="@/assets/images/woman.png"
      )
</template>

<style lang="stylus" scoped>
.img-container
  text-align center
  margin-top 30px
  img
      width 20%
button
  position absolute
  top 15px
  right 0
  font-size 15px
@media (max-width 420px)
  h1
    margin-top 115px
    margin-bottom -50px
  .img-container
    img
        width 100%
</style>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/sign-in')
    }
  },
  computed: {
    setUser () {
      return this.$store.getters.user.name
    }
  }
}
</script>
