<template>
    <div>
        <v-hover>
            <v-card class="text-xs-center  " slot-scope="{ hover }" width="360" max-height="100%" :class="`elevation-${hover ? 12 : 2}`">
                <v-container>
                    <v-list three-line>
                        <v-list-tile avatar pb-2>
                            <v-avatar tile size="100" class="pr-2 pl-0 pb-2 text-xs-left">
                                <img :src="data.avatar">
                            </v-avatar>
                            <v-card-title class="text-xs-left">
                                <div>
                                    <span class="name font-weight-bold">{{data.name}}</span><br>
                                    <span class="designation">{{data.designation}}</span><br>
                                    <span class="designation">At {{data.companyName}}</span>
                                </div>
                            </v-card-title>
                        </v-list-tile>
                    </v-list>
                    <v-card-title class="text-xs-center list-tile-content lightborder">
                        <div class="text-xs-center" v-for="(item,i) in data.expertize" :key="i">
                            <v-chip outline>{{item}}</v-chip>
                        </div>
                    </v-card-title>
                </v-container>
                <div>
                    <v-btn slot="activator" class="lightborder" block flat @click="dialog = true">
                        <v-icon light>book</v-icon> Book Me
                    </v-btn>
                    <v-dialog v-model="dialog" block width="500">
                        <v-card>
                            <info-form @dialog="submit"></info-form>
                        </v-card>
                    </v-dialog>
                </div>
            </v-card>
        </v-hover>
    </div>
</template>
<script>
import infoForm from './info.form'
export default {
    components:{
     infoForm
    },
    props:[
        'data'
    ],
    data(){
        return{
          dialog:false
        }
    },
    methods:{
        submit(dialog){
             this.dialog =dialog
        }
    }
}
</script>
<style>
.name {
    font-size: 15px;
}

.designation {
    color: grey;
    font-size: 13px;
}

.list-tile-content {
    align-items: center;
    justify-content: center;
    align-items: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

.lightborder {
    border-top: 1px solid lightgrey;
}

.avatar {
    height: 70px;
    width: 70px;
}
</style>
