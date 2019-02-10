<template>
<v-card>
     <v-toolbar card outline>
            <v-toolbar-title>Provide us some info</v-toolbar-title>
            <v-spacer></v-spacer>
     </v-toolbar>
 <v-container>
  <form>
    <v-text-field
      v-model="name"
      v-validate="'required|max:10'"
      :counter="10"
      :error-messages="errors.collect('name')"
      label="Name"
      data-vv-name="name"
      required
    ></v-text-field>
    <v-text-field
      v-model="mobile"
      v-validate="'required|mobile'"
      :error-messages="errors.collect('mobile')"
      label="Mobile Number"
      data-vv-name="mobile"
      required
    ></v-text-field>

  
    <v-btn slot="activator" @click="formCheck" outline color="primary" >submit</v-btn>
      <v-dialog v-model="secondDialog" block width="500">
         
          <v-card>
               <confirmation></confirmation>
                <v-btn
            color="green darken-1"
            flat="flat"
            @click="submit"
            
          >
            Yes
          </v-btn>
          <v-btn
            color="green darken-1"
            flat="flat"
            @click="secondDialog = false"
          >
            No
          </v-btn>
          </v-card>
  </v-dialog>
    <v-btn @click="clear" flat>clear</v-btn>
  </form>

 </v-container>
  </v-card>
</template>

<script>
  import Vue from 'vue'
  import confirmation from './confirm'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },
    components:{
        confirmation
    },
    props:['dialog'],
    data: () => ({
      name: '',
      mobile: '',
      select: null,
    //   firstDialog:this.dialog,
      secondDialog:false,
      dictionary: {
        attributes: {
          mobile: 'Mobile Number'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          },
          select: {
            required: 'Select field is required'
          }
        }
      }
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },
    methods: {
      submit () {
        var vm =this
        this.secondDialog=false
        this.dialog = false
        vm.$emit('dialog' ,this.dialog)
      },
      formCheck (){
       this.$validator.validateAll()
       this.secondDialog=true
      },
      clear () {
        this.name = ''
        this.mobile = ''
        this.select = null
        this.checkbox = null
        this.$validator.reset()
      }
    }
  }
</script>
<style >
    
</style>
