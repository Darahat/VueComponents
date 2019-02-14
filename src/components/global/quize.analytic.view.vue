<template>
    <div>
        <v-btn depressed @click="showExpansion=!showExpansion" round large color="success">{{quizeInfo.name}}</v-btn>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12   mb-3>
                    <v-expansion-panel  v-show="showExpansion">
                        <v-expansion-panel-content :value="showExpansion" flat>
                            <!-- <v-expansion-panel-content   flat> -->
                            <h2 style="color:grey;font-weight:400" slot="header">{{quizeInfo.name}}</h2>
                                <v-container>
                                    <v-list two-line="">
                                        <v-list-tile no-action>
                                            <v-list-tile-content>
                                                <v-list-tile-title><p> <strong>Total Played : </strong> {{quizeInfo.totalPlays}}</p></v-list-tile-title>
                                                <v-list-tile-title><p> <strong> Average Score : </strong> {{quizeInfo.averageScore}}</p></v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                         </v-list>
                                    <v-expansion-panel >
                                        <v-expansion-panel-content>
                                             <h4 style="font-size:16px; " slot="header">Players</h4>
                                            <v-data-table
                                                :headers="headers"
                                                :items="quizeInfo.players"
                                                class="elevation-1"
                                                flat
                                                 hide-actions
                                            >
                                             <template slot="items" slot-scope="props">
                                                 <tr @click="isolatedDataShow(props.item)">
                                                <td class="text-xs-left">{{ props.item.p_id }}</td>
                                                <td class="text-xs-left">{{ props.item.p_name }}</td>
                                                <td class="text-xs-left">{{ props.item.p_email }}</td>
                                                <td class="text-xs-left">{{ props.item.p_phone }}</td>
                                                <td class="text-xs-left">{{ props.item.p_score }}</td>
                                                </tr>
                                            </template>
                                            </v-data-table>
                                             <v-dialog v-model="dialog" block width="500"  >
                    <v-card>
                        <data-info :data="selectedData"></data-info>
                    </v-card>
                </v-dialog>
                                       </v-expansion-panel-content>
                                        </v-expansion-panel>
                                </v-container>
                                <v-card-actions  >
                                    <v-spacer></v-spacer>
                                    <v-btn   depressed  color="primary">Upgrade</v-btn>
                                </v-card-actions>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
import quizeInfo from '@/data/quize.info'
import dataInfo from '@/components/global/isolate.analytic.data'
export default {
    components:{
        dataInfo
    },
    data(){
        return{
         dialog:false,
         showExpansion : false,
         selectedData:[],
         quizeInfo:quizeInfo,
              pagination: {
  descending: true,
  page: 1,
  rowsPerPage: 10, // -1 for All
  totalItems: 0,
    },
   
         headers:[
          { text: 'ID',value: 'p_id'},
          { text: 'Name', value: 'p_name' },
          { text: 'Email', value: 'p_email' },
          { text: 'Phone', value: 'p_phone' },
          { text: 'Score', value: 'p_score' },
         ],
    }
},
methods:{
    isolatedDataShow(item){
        this.selectedData = item
        this.dialog=true

    }
}
}

</script>
<style >
    
</style>
