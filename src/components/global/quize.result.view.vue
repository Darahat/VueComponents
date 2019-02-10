// # Title - Time Taken - Total score - Highest Score - Date Taken

<template>
    <div>
        <v-card>
         <v-card-title>
       <h4>  Player Name : {{gameResult.player_name}} </h4>
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="search"
          label="Search"
          single-line
          hide-details
          v-model="search"
        ></v-text-field>
        </v-card-title>
        <v-data-table  v-bind:search="search" :headers="headers" :items="gameResult.results" class="elevation-1  "   flat>
            <template slot="items" slot-scope="props">
                <td class="text-xs-left">{{ props.item.quize_id }}</td>
                <td class="text-xs-left">{{ props.item.title }}</td>
                <td class="text-xs-left">{{ props.item.time_taken }}</td>
                <td class="text-xs-left">{{ props.item.total_score }}</td>
                <td class="text-xs-left">{{ props.item.highest_score }}</td>
                <td class="text-xs-left">{{ props.item.date_taken }}</td>
            </template>
        </v-data-table>
        </v-card>
    </div>
</template>
<style >
    
</style>
<script>
import gameResult from '@/data/result.info'
export default {
    data(){
        return{
        search:'',
        headers:[
          { text: 'ID',value: 'quize_id'},
          { text: 'Title', value: 'title' },
           { text: 'Time Taken', value: 'time_taken' },
           { text: 'Total Score', value: 'total_score' },
          { text: 'Highest Score', value: 'highest_score' },
          { text: 'Date Taken', value: 'date_taken' },
         ],
         gameResult:gameResult
        }
    }
}
</script>
