<template>
  <div style="max-width: 980px; margin:10vh auto;" class="grey lighten-5">
    <v-layout row>
      <v-flex xs12>
        <v-card color="white darken-2">
          <v-container mt-5>
            <v-layout>
              <v-flex>
                <div>
                  <v-layout row wrap>
                    <v-flex md12 sm10>
                      <p class="title" style="margin-bottom:30px">Login</p>
                      <v-text-field :rules="['Required']" solo prepend-icon="person" v-model="email" class="animated fadeInLeft t-field"
                        label="E-mail" style="margin-bottom:10px"></v-text-field>
                      <v-text-field solo prepend-icon="lock" v-model="password" class="animated fadeInLeft t-field" required 
                        label="Password"></v-text-field>
                      <div class="t-field">
                        <v-flex xs12 sm12>
                        </v-flex>
                        <v-flex xs12 sm12>
                          <div class="red--text" v-html="error"></div>
                          <transition name="img-animation">
                            <v-btn color="blue" class="animated slideInDown white--text" @click="login">Login</v-btn>
                          </transition>
                        </v-flex>
                      </div>
                    </v-flex>
                    <span style="color:gray;margin:40px">
                      <router-link to="/Authentication/Register">Create</router-link> my Chatcat account!
                    </span>
                  </v-layout>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import authenticationService from '@/services/auth.service'
export default {
  data(){
    return{
   userLoggedIn:false,
   email: '',
  password: '',
  error: null
  }
  },
  mounted () {
    // console.log(this.$store.auth)
  },
  methods: {
    // send email and password info to database
    // after that from payload  token and user information store to local store
    async login () {
      try {
        const response = await authenticationService.login({
          email: this.email,
          password: this.password
        })
// console.log('its my token'+ response.data.token)
        try { //set payload token & user info to localstorage
          this.$store.dispatch('auth/setToken', response.data.token)
          this.$store.dispatch('auth/setUser', response.data.user)
          console.log(this.$store.state.auth.token)
          console.log(this.$store.state.auth.user)
          // if(this.$store.state.auth.isUserLoggedIn){
          // }
        }
        catch(error){
          console.log(error)
        }
        //push to home
        this.$router.push({
          name: 'home'
        })
      } catch (error) {
        // this.error = error.response.data.error
        console.log(error)
      }
    }
  },
}
</script>
<style>
@media only screen and (max-width: 600px) {
.img{
  visibility:collapse;
}
}
.img-animation-enter-active{
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
}
.img-animation-leave-active{
  animation:going 1s;
}
@keyframes going {
  from{
    transform: translateX(0)
  }
  to{
    transform:translateX(-150px);
    opacity: 0;
  }
}
@keyframes coming {
  from{
    transform: translateX(-100px);
    opacity: 0;
  }
  to{
    transform:translateX(0);
    opacity: 1;
  }
}
</style>
