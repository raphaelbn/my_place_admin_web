<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-3">
        <div class="container" @keyup.enter.prevent="login">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input
                class="input"
                v-model="email"
                type="email"
                placeholder="Email"
              />
              <span class="icon is-small is-left">
                <vue-fontawesome :icon="['far', 'envelope']" />
              </span>
              <span class="icon is-small is-right">
                <vue-fontawesome :icon="['fas', 'check']" />
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                v-model="password"
                type="password"
                placeholder="Password"
              />
              <span class="icon is-small is-left">
                <vue-fontawesome :icon="['fas', 'lock']" />
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button @click="login" class="button is-success">
                Login
              </button>
            </p>
          </div>
          <p>
            You don't have an account ? You can
            <router-link to="/sign-up">create one</router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            this.$router.replace("category");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>

<style scoped></style>
