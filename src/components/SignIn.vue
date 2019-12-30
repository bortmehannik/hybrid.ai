<template lang="pug">
  .container
    h1 Sign In
    .main
      form.white-bg(@submit.prevent="onSubmit")
        .form-group(:class="{ 'errorGroup': $v.email.$error }")
          label(
            for="email"
          ) Email
          input#email(
            type="email"
            v-model="email"
            :class="{ 'error': $v.email.$error || errors }"
            @change="$v.email.$touch()"
          )
          small.error(v-if="!$v.email.required") Email is required.
          small.error(v-if="!$v.email.email") Email is not correct.
        .form-group(:class="{ 'errorGroup': $v.password.$error }")
          .form-group__group
            label(
              for="password"
            ) Password
          input#password(
            :type="passwordFieldType"
            v-model="password"
            :class="{ 'error': $v.password.$error || errors }"
            @change="$v.password.$touch()"
          )
          i.fas.fa-eye(
            v-if="passwordFieldType === 'password'"
            @click="switchVisibility"
          )
          i.fas.fa-eye-slash(
            v-if="passwordFieldType === 'text'"
            @click="switchVisibility"
          )
        .form-group.btn-group
          button.black-bg(
            type="submit"
            :class="{ 'disabled': errors }"
          )
            span(v-if="loading") Loading...
            span(v-else) Sign In
    .footer
      p Don’t have an account yet?
      router-link(
          to="/sign-up"
      ) Sign Up
    .error-popup(
      v-if="errors"
    )
      p Wrong email or password
      button(
        @click="errors = !errors"
      )
        i.fas.fa-times
</template>

<style lang="stylus">
  .form-group
    button
      &.disabled
        opacity 0.5
        cursor not-allowed

  .error-popup
    display flex
    width 30%
    margin 0 auto
    align-items center
    background #FF6683
    border-radius 50px
    height 48px
    padding 0 20px 0 35px
    justify-content space-between
    margin-top 50px
    p
      margin 0
      font-weight 500
      font-size 14px
      line-height 20px
      color #ffffff
    button
      cursor pointer
      background transparent
      border none
      color #ffffff
      font-size 19px
</style>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: '',
      password: '',
      submitStatus: null,
      errors: false,
      passwordFieldType: 'password'
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('loginUser', user)
          .then(() => {
            this.errors = false
            this.submitStatus = 'OK'
            this.$router.push('/main')
          })
          .catch(err => {
            this.submitStatus = err.message
            this.errors = true
          })
      }
    },
    switchVisibility () {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
