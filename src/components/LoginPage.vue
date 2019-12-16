<template>
  <div class="card-content">
    <nav-bar></nav-bar>
    <div class="LoginForm">
    <b-field label="Username" expanded>
      <b-input v-model="form.username" v-bind="username" maxlength="30" expanded></b-input>
    </b-field>
    <b-field label="Password" expanded>
      <b-input type="password" v-model="form.password" maxlength="16" password-reveal></b-input>
    </b-field>
    <b-field v-if="$v.form.$dirty && $v.form.$invalid">
      <b-message type="is-danger" has-icon v-if="!$v.form.username.required">Please insert your username.</b-message>
      <b-message
        type="is-danger"
        has-icon
        v-if="!$v.form.username.minLength"
      >Username must contain only email address only!</b-message>
      <b-message type="is-danger" has-icon v-if="!$v.form.password.required">Please insert your password</b-message>
      <b-message
        type="is-danger"
        has-icon
        v-if="!$v.form.password.minLength"
      >Password must be more than 8 letters!</b-message>
    </b-field>


    <b-field class="buttons" grouped>
      <b-button type="is-primary" @click="touch">Login</b-button>
      <b-button type="is-primary" @click="reset">Reset</b-button>
    </b-field>


    <p>Spoiler Alert! : username is winai@gmail.com but password can be any thing!</p>    

    <p>Dirty : {{ $v.form.$dirty }}</p>
    <p>Invalid : {{ $v.form.$invalid }}</p>
    <p>Require username: {{ $v.form.username.required }}</p>
    <p>User name minLength 8: {{ $v.form.username.minLength }}</p>
    <p>Require password: {{ $v.form.password.required }}</p>
    <p>Password minLength 8: {{ $v.form.password.minLength }}</p>
    <p>Login result : {{ this.loginResult }}</p>

    </div>
  </div>
</template>
<script>
import NavBar from "./NavBar.vue";

import { required,minLength,email } from "vuelidate/lib/validators";



export default {
  components: {
    NavBar
  },
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  validations: {
    form: {
      username: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      },

        loginResult: {}

    }
    
  },

    

  methods: {

     

    touch() {
      this.$v.form.$touch();

     

      if(this.form.username == 'winai@gmail.com'){

      
          this.$router.push("/MainPage");
      
      }


    },
    reset() {
      this.$v.form.$reset();
    }
  }
};
</script>