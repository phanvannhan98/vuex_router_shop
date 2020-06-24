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
          <td><input v-model="password" type="text" /></td>
        </tr>
        <tr>
          <td></td>
          <td><input type="submit" value="REGISTER" /></td>
        </tr>
        <tr>
          <td></td>
          <td><input type="button" value="LOGOUT" @click="onLogout" /></td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      const { username, password } = this
      console.log({ username, password })

      firebase
        .auth()
        .createUserWithEmailAndPassword(username, password)
        .then(d => console.log(d))
        .catch(err => console.log(err))
    },
    onLogout() {
      firebase.auth().signOut()
    }
  }
}
</script>

<style lang="scss" scoped></style>
