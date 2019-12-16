<template>
  <div class="main">
      <NavBar></NavBar>
    <center>
      <div class="menu_panel">
        <h1>Welcome, to LandingPage</h1>
        <p>Hello, My name is Jobs.</p>
        <p>I like coding, programing and playing video games</p>
        <p>Please you must LOGIN! first to be able to view my project Otherwise you can't see it</p>
       
        <router-link :to="'/Test'" v-show="false">TEST</router-link>
      
      </div>
    </center>
  </div>
</template>

<script>


import NavBar from "./NavBar.vue";

export default {
  name: "ChooseSide",
  props: {
    msg: String
  }, 
  components: {

      NavBar,

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  height: 100%;
  margin: 0;
  background-image: url("../assets/main_bg.jpg");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.menu_panel {
  text-align: center;
  opacity: 0.9;
  background-image: url("../assets/white_bg.jpg");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  width: 50%;
  padding: 5%;
  border: 1px solid black;
  border-radius: 5%;
}

.choose_hunter {
  text-align: center;
  opacity: 1;
  background-image: url("../assets/paper_bg.jpg");
  padding: 5%;
  border: 1px solid black;
  border-radius: 3%;
}

.description {

  background-image: url("../assets/black_bg.jpg");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  text-shadow: 1px 1px black;
  height: 100%;
  padding: 5%;
  border-radius: 2%;
  border: 1px solid black;
  

}

.choose_demon {
  text-align: center;
  background-image: url("../assets/paper_bg.jpg");
  padding: 5%;
  border: 1px solid black;
  border-radius: 3%;

  
}

.LoginForm {

    padding: 5%;
    background-color: white;

}

.showUsername {

    background-color: black;
    color: white;

}

</style>
