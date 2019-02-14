<template>
<v-container>
   
    <!-- #no 1 -->
     <!-- <v-layout  row wrap>
      <v-flex   class="mr-5 ml-4 xs12 sm6 md4 lg3" v-for="(mentor,i) in mentorInfo" :key="i">
         <card-design-one :data="mentor"></card-design-one>
      </v-flex>
    </v-layout> -->
    <!-- #no 2 -->
    <!-- <h2>Analytic View</h2>
    
    <quize-tree-view></quize-tree-view> -->
   <!-- #no 3 -->
   <csv-file-reader></csv-file-reader>
   <learning></learning> 
    
   <quize-result-view></quize-result-view>

    </v-container>
</template>
<script>
import learning from '@/components/global/learning'
import quizeResultView from '@/components/global/quize.result.view'
import quizeTreeView from '@/components/global/quize.analytic.view'
import mentorInfo from '@/data/mentor.info'
import CardDesignOne from '@/components/global/card.design.base.one'
import csvFileReader from '@/components/global/csv.file.upload.reader'
export default {
    components: {
        CardDesignOne,quizeTreeView,quizeResultView,learning,csvFileReader
    },
    data() {
        return {
            mentorInfo: mentorInfo
        }
    }
}
</script>
<style >
    
</style>
