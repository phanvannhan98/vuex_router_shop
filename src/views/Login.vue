<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <table>
        <tr>
          <td>US:</td>
          <td><input v-model="username" type="text" /></td>
        </tr>
        <tr>
          <td>PASS:</td>
          <td><input v-model="password" type="password" /></td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input class="btn btn-success" type="submit" value="LOGIN" />
            <router-link class="btn btn-warning" to="/register" type="button"
              >REGISTER</router-link
            >
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <p style="color: red">{{ error }}</p>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      username: '',
      password: '',
      prevRoute: ''
    }
  },
  created() {
    console.log(this.isAuthenticated)

    if (this.isAuthenticated) {
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState('utils', ['error']),
    ...mapState('user', ['isAuthenticated'])
  },
  methods: {
    ...mapActions('user', ['checkLogin']),
    onSubmit() {
      const { username, password } = this
      this.checkLogin({ username, password })
    }
  },
  watch: {
    isAuthenticated(newVal) {
      if (newVal) {
        this.$router.push(this.prevRoute)
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log({ to, from, next })

    next(v => (v.prevRoute = from.path))
  }
}
</script>

<style lang="scss" scoped></style>
