<template>
  <v-app>
     <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Chatcat</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="home">Home</v-btn>
      <v-btn flat @click="login">Login</v-btn>
      <v-btn flat @click="logout">Log Out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
 

export default {
  name: 'App',
 
  data () {
    return {
      //
    }
  },
  methods: {

    login (){
      console.log('hello')
     this.$router.push({
       name:'Login'
     })
    },
    logout(){
     this.$store.dispatch('auth/setToken', null)
     this.$store.dispatch('auth/setUser', null)
     this.$router.push({
       name:'Login'
     })
    },
    home () {
     this.$router.push({
       name:'home'
     })
    }
  },
}
</script>
