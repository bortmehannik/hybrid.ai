<template lang="pug">
  .container
    h1 Sign Up
    .main
      form.white-bg(@submit.prevent="onSubmit")
        .form-group
          label(
            for="name"
          ) Full Name
          input#name(
            type="text"
            v-model="fullName"
          )
        .form-group(:class="{ 'errorGroup': $v.email.$error }")
          label(
            for="email"
          ) Email
          input#email(
            type="email"
            v-model="email"
            :class="{ 'error': $v.email.$error }"
            @change="$v.email.$touch()"
          )
          small.error(v-if="!$v.email.required") Email is required.
          small.error(v-if="!$v.email.email") Email is not correct.
        .form-group(:class="{ 'errorGroup': $v.password.$error }")
          .form-group__group
            label(
              for="password"
            ) Password
            .form-group__help
              p(
                :style="{ backgroundImage: `url('${imageUrl}')` }"
                v-if="showHelp"
                ) Password must contain 8+ symbols, 1 special and 2 capital letters
              i.fas.fa-question-circle(
                @mouseover="mouseOver"
                @mouseleave="mouseOver"
                )
          input#password(
            :type="passwordFieldTypeFirst"
            v-model="password"
            :class="{ 'error': $v.password.$error }"
            @change="$v.password.$touch()"
          )
          i.fas.fa-eye(
            v-if="passwordFieldTypeFirst === 'password'"
            @click="switchVisibilityFirst"
          )
          i.fas.fa-eye-slash(
            v-if="passwordFieldTypeFirst === 'text'"
            @click="switchVisibilityFirst"
          )
        .form-group(:class="{ 'errorGroup': $v.repeatPassword.$error }")
          label(
            for="r-password"
          ) Repeat Password
          input#r-password(
            :type="passwordFieldTypeSecond"
            v-model="repeatPassword"
            :class="{ 'error': $v.repeatPassword.$error }"
            @change="$v.repeatPassword.$touch()"
          )
          i.fas.fa-eye(
            v-if="passwordFieldTypeSecond === 'password'"
            @click="switchVisibilitySecond"
          )
          i.fas.fa-eye-slash(
            v-if="passwordFieldTypeSecond === 'text'"
            @click="switchVisibilitySecond"
          )
          small.error(v-if="!$v.repeatPassword.sameAsPassword") Passwords must be identical.
        .form-group.btn-group
          button.black-bg(type="submit")
            span(v-if="loading") Loading...
            span(v-else) Sign Up
          p.typo__p(v-if="submitStatus === 'OK'") Thanks for your submission!
          p.typo__p(v-if="submitStatus === 'ERROR'") Please fill the form correctly.
          p.typo__p(v-else) {{ submitStatus }}
    .footer
      p Already have an account?
      router-link(
          to="/sign-in"
      ) Sign In
</template>

<style lang="stylus">
  .form-group__help
    p
      font-size 13px
      margin 0
      position absolute
      // background #1E1A3E
      color #ffffff
      z-index 1
      padding 20px
      border-radius 8px
      width 260px
      right -3px
      top -68px
      background-repeat no-repeat
      background-size 131%
      background-position 50% 31%
</style>

<script>
import { required, email, sameAs } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      fullName: '',
      email: '',
      password: '',
      repeatPassword: '',
      submitStatus: null,
      passwordFieldTypeFirst: 'password',
      passwordFieldTypeSecond: 'password',
      showHelp: false
    }
  },
  validations: {
    fullName: {
      required
    },
    email: {
      required,
      email
    },
    password: {
      required,
      regForPassword: password => /^(?=.*[a-z0-9\s])(?=.*[^\w\s]|_)(?=.*[A-Z].*[A-Z]).{8,}$/.test(password)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        const user = {
          displayName: this.fullName,
          email: this.email,
          password: this.password
        }

        this.$store.dispatch('registerUser', user)
          .then(() => {
            console.log('Register')
            this.submitStatus = 'OK'
            this.$router.push('/main')
          })
          .catch(err => {
            this.submitStatus = err.message
          })
      }
    },
    switchVisibilityFirst () {
      this.passwordFieldTypeFirst = this.passwordFieldTypeFirst === 'password' ? 'text' : 'password'
    },
    switchVisibilitySecond () {
      this.passwordFieldTypeSecond = this.passwordFieldTypeSecond === 'password' ? 'text' : 'password'
    },
    mouseOver: function () {
      this.showHelp = !this.showHelp
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    imageUrl () {
      return require('@/assets/images/help.png')
    }
  }
}
</script>
