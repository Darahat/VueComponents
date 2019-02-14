// # Title - Time Taken - Total score - Highest Score - Date Taken

<template>
    <div>
        <v-card>
            <v-card-title>
                <h4> Player Name : {{gameResult.player_name}} </h4>
                <v-spacer></v-spacer>
                <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
            </v-card-title>
            <v-data-table v-bind:search="search" v-model="selected" :headers="headers" :items="gameResult.results" class="elevation-1  "
                flat>
                <template slot="items" slot-scope="props">
                    <tr @click="isolatedDataShow(props.item)" >
                        <td class="text-xs-left">{{ props.item.quize_id }}</td>
                        <td class="text-xs-left">{{ props.item.title }}</td>
                        <td class="text-xs-left">{{ props.item.time_taken }}</td>
                        <td class="text-xs-left">{{ props.item.total_score }}</td>
                        <td class="text-xs-left">{{ props.item.highest_score }}</td>
                        <td class="text-xs-left">{{ props.item.date_taken }}</td>
                        <!-- <v-dialog v-model="dialog" block width="500"  >
                    <v-card>
                        <data-info :data="selectedData"></data-info>
                    </v-card>
                </v-dialog> -->
                    </tr>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>
<style >
    
</style>
<script>
import gameResult from '@/data/result.info'
import dataInfo from '@/components/global/isolate.result.data'
export default {
    components:{
      dataInfo
    },
    data(){
        return{
        search:'',
        dialog:false,
        selected:[],
        selectedData:[],
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
    },
    methods:{
      isolatedDataShow(item){
          console.log('clicked')
          this.selectedData =item
          this.$router.push(
              {
                  name: 'resultDetails',
                  params: {
                      quize_id:item.quize_id,
                      title:item.title,
                      time_taken:item.time_taken,
                      total_score:item.total_score,
                      highest_score:item.highest_score,
                      date_taken:item.date_taken

                      } })
        //   this.dialog = true
      }
    },
}
</script>
