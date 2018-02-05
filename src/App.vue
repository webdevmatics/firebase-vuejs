<template>
  <div id="app">

    <div class="navbar">
      <router-link to="/" class="navbar-brand">VueFire</router-link>
      <ul class="nav navbar-nav">

        <li>
          <router-link to="/sign-in">SignIn</router-link>
        </li>

        <li>
          <router-link to="/sign-up">SignUp</router-link>
        </li>
      </ul>
    </div>

    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
