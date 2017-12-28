<template>
  <section class="container">
    <div>
      <h1>Search iTunes</h1>
      <br>
      <form @submit.prevent="submit">
        <input type="text" placeholder="Enter Artist Name"
         v-model="search" autofocus />
      </form>
       <br>
      <logo/>
      <h1 class="title">
        my-itunes
      </h1>
      <h2 class="subtitle">
        This is a app for searching music using Nuxt.js Vue.js Axios and Vuetify
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  data (){
    return {
        search:''
    }
  },
  methods: {
     submit(event){
       this.$router.push(`results/${this.search}`);
     }
  }
}
</script>

<style>
*{
  text-align: center;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
