<template>
    <div>
    <v-container>
        <v-card>
           
          <v-card-title><h2>Name : {{ this.$route.params.title }}</h2></v-card-title>
          <v-divider></v-divider>
          <v-container>
          <v-list dense >
            <v-list-tile>
              <v-list-tile-content><h3 >ID : </h3></v-list-tile-content>
              <v-list-tile-content class="align-end">{{ this.$route.params.quize_id }}</v-list-tile-content><br>
               </v-list-tile>
               <v-divider></v-divider>
               <v-list-tile>
              <v-list-tile-content><h3 >Time Taken : </h3></v-list-tile-content>
              <v-list-tile-content class="align-end">{{ this.$route.params.time_taken }}</v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
              <v-list-tile-content><h3>Total Score : </h3></v-list-tile-content>
              <v-list-tile-content class="align-end">{{ this.$route.params.total_score }}</v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
              <v-list-tile-content><h3>Highest Score : </h3></v-list-tile-content>
              <v-list-tile-content class="align-end">{{ this.$route.params.highest_score }}</v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
              <v-list-tile-content><h3>Date Taken : </h3></v-list-tile-content>
              <v-list-tile-content class="align-end">{{ this.$route.params.date_taken }}</v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
          </v-list>
          </v-container>
        </v-card>
</v-container>
    </div>
</template>
<style>
</style>
<script>
export default {
    data(){
        return{
            id: this.$route.params.quize_id,
            title: this.$route.params.title,
            route: this.$route.params,
        }
    },
    // computed: {
    //   title(){
    //    return this.title = this.$route.params.title;
    //   },
    //   id () {
    //     return this.id
    //   }
    // },
    destroyed() {
        console.log('i am destroyed')
    },
    created(){
         console.log('I am created')
    },
     beforeCreate(){
        console.log('i am before create')
    },
    mounted(){
      console.log('i am mounted')
    },
    beforeMount(){
        console.log('i am before Mount')
    },
    beforeUpdate(){
        console.log('i am before Update')
    },
    updated(){
        console.log('i am updated')
    },
    beforeDestroy(){
        console.log('i am before Destroy')
    },
    data() {
        return {

        }
    },
}
</script>
