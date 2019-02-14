<template>
  <v-container>
    <!-- <h1>See mentors</h1> -->
      <v-container>
         <mentor-list></mentor-list>
      </v-container>
  </v-container>
</template>

<script>
import mentorList from '@/components/local/mentor.list.container/mentor.list'

  export default {
    components:{
      mentorList
    }
  }
</script>
