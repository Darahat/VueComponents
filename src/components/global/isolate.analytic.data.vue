<template>
    <div>
        <v-card>
          <v-card-title><h2 >Player Name : {{ data.p_name }}</h2></v-card-title>
          <v-divider></v-divider>
          <v-container>
          <v-list dense >
            <v-list-tile>
              <v-list-tile-content><h3 >Player ID : </h3></v-list-tile-content>
              <v-list-tile-content class="align-end">{{ data.p_id }}</v-list-tile-content><br>
               </v-list-tile>
               <v-divider></v-divider>
              <v-list-tile>
              <v-list-tile-content><h3>Email : </h3></v-list-tile-content>
              <v-list-tile-content class="align-end">{{ data.p_email }}</v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
              <v-list-tile-content><h3>Phone : </h3></v-list-tile-content>
              <v-list-tile-content class="align-end">{{ data.p_phone }}</v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
              <v-list-tile-content><h3>Score : </h3></v-list-tile-content>
              <v-list-tile-content class="align-end">{{ data.p_score }}</v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
          </v-list>
          </v-container>
        </v-card>

    </div>
</template>
<style>
    
</style>
<script>
export default {
    props:[
        'data' 
    ],
    data() {
        return {
          
        }
    },
}
</script>
