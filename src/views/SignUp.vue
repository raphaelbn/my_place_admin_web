<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-3">
        <div class="container" @keyup.enter.prevent="signUp">
          <div class="field">
            <p>Let's create a new account !</p>
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
              <button @click="signUp" class="button is-success">
                Sign Up
              </button>
            </p>
          </div>
          <span
            >or go back to <router-link to="/login">login</router-link>.</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from "firebase";
export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            this.$router.replace("home");
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
