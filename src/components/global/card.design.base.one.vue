<template>
    <v-hover>
        <v-card class="text-xs-center  " slot-scope="{ hover }" width="300"
      max-height="100%" :class="`elevation-${hover ? 12 : 2}`">
            <v-container>
                <v-card-media class="mt-3">
                    <v-avatar size="150" class="text-xs-center list-tile-content   ">
                        <img :src="data.avatar">
                    </v-avatar>
                </v-card-media>
                <v-card-title class="text-xs-center list-tile-content ">
                    <div>
                        <p class="name font-weight-bold">{{data.name}}</p>
                        <span class="designation">{{data.designation}}</span><br>
                        <span class="designation">At {{data.companyName}}</span>
                    </div>
                </v-card-title>
                <v-card-title class="text-xs-center list-tile-content lightborder">
                    <div class="text-xs-center" v-for="(item,i) in data.expertize" :key="i">
                        <v-chip outline>{{item}}</v-chip>
                    </div>
                </v-card-title>
            </v-container>
            <div>
      <v-btn slot="activator" class="lightborder"  block flat  @click="dialog = true"  ><v-icon light >book</v-icon> Book Me</v-btn>
      <v-dialog v-model="dialog" block width="500">
      <v-card>
        <info-form @dialog="submit"></info-form>
      </v-card>
    </v-dialog>
    </div>
        </v-card>
    </v-hover>
</template>
<script>
import infoForm from './info.form'
export default {
    data(){
        return{
          dialog:false
        }
    },
    components:{
     infoForm
    },
    props:[
        'data'
    ],
    methods:{
        submit(dialog){
             this.dialog =dialog
        }
    }
}
</script>
<style>
.name{
  font-size: 15px;
}
.designation{
 color: grey;
 font-size: 13px;
}
.list-tile-content{
    align-items: center;
    justify-content: center;
    align-items:center;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
.lightborder{
    border-top: 1px solid lightgrey;
}
.avatar{
    height: 70px;
    width: 70px;
}
</style>
