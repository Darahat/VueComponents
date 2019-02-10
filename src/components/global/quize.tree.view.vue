<template>
    <div>
        <v-btn depressed @click="showExpansion=!showExpansion" round large color="success">{{quizeInfo.name}}</v-btn>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 lg5 mb-3>
                    <v-expansion-panel popout v-show="showExpansion">
                        <v-expansion-panel-content :value="showExpansion" flat>
                            <!-- <v-expansion-panel-content   flat> -->
                            <h3 slot="header">{{quizeInfo.name}}</h3>
                            <v-card>
                                <v-container>
                                    <v-list two-line="">
                                        <v-list-tile no-action>
                                            <v-list-tile-content>
                                                <v-list-tile-title>Total Played : {{quizeInfo.totalPlays}}</v-list-tile-title>
                                                <v-list-tile-title>Average Score : {{quizeInfo.averageScore}}</v-list-tile-title>
                                            </v-list-tile-content>

                                        </v-list-tile>
                                         </v-list>
                                    <v-expansion-panel popout>
                                        <v-expansion-panel-content>
                                             <p style="font-size:16px" slot="header">Players</p>
                                            <v-data-table
                                                :headers="headers"
                                                :items="quizeInfo.players"
                                                class="elevation-1"
                                                flat
                                            >
                                             <template slot="items" slot-scope="props">
                                                <td class="text-xs-left">{{ props.item.p_id }}</td>
                                                <td class="text-xs-left">{{ props.item.p_name }}</td>
                                                <td class="text-xs-left">{{ props.item.p_email }}</td>
                                                <td class="text-xs-left">{{ props.item.p_phone }}</td>
                                                <td class="text-xs-left">{{ props.item.p_score }}</td>
                                            </template>
                                            </v-data-table>
                                            <!-- <v-list three-line="">
                                            <v-list-tile v-for="(players,i) in quizeInfo.players" :key="i">
                                                <v-list-tile-content>
                                                    <v-card class="pt-4" style="width:100%;margin-bottom:30px;">
                                                        <v-container>
                                                            <v-list-tile-sub-title>Name : {{players.p_name}}</v-list-tile-sub-title>
                                                             <v-list-tile-sub-title>Email : {{players.p_email}}</v-list-tile-sub-title>
                                                            <v-list-tile-sub-title>Phone Number : {{players.p_phone}}</v-list-tile-sub-title>
                                                            <v-list-tile-sub-title>Score : {{players.p_score}}</v-list-tile-sub-title>
                                                            <v-divider></v-divider>
                                                        </v-container>
                                                    </v-card>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                            </v-list> -->
                                       </v-expansion-panel-content>
                                        </v-expansion-panel>
                                   
                                </v-container>
                                <v-card-actions  >
                                    <v-spacer></v-spacer>
                                    <v-btn   depressed  color="primary">Upgrade</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
import quizeInfo from '@/data/quize.info'
export default {
    data(){
        return{
         showExpansion : false,
         quizeInfo:quizeInfo,
         headers:[
          { text: 'ID',value: 'p_id'},
          { text: 'Name', value: 'p_name' },
          { text: 'Email', value: 'p_email' },
          { text: 'Phone', value: 'p_phone' },
          { text: 'Score', value: 'p_score' },
         ],
    }
}
}

</script>
<style >
    
</style>
