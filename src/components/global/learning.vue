<template>
<div>
   <h1>{{title}}{{countLinks}}</h1>
   <v-text-field v-model="addLink"></v-text-field>
   <v-btn @click="pushOnMe">Submit</v-btn>
</div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
    data(){
        return{
         addLink:''
        }
    },
    computed:{
      ...mapState('learn',['title']),
      ...mapGetters('learn',['countLinks']),
      mounted(){
          console.log(this.$store.state.learn.title)
      }
},
methods:{
    
     ...mapMutations('learn',['add_link']),
 pushOnMe(){
     this.add_link(this.addLink)
 }
}
}
</script>
<style >
</style>
