<template>
<v-container>
    <!-- #no 1 -->
     <!-- <v-layout  row wrap>
      <v-flex   class="mr-5 ml-4 xs12 sm6 md4 lg3" v-for="(mentor,i) in mentorInfo" :key="i">
         <card-design-one :data="mentor"></card-design-one>
      </v-flex>
    </v-layout> -->
    <!-- #no 2 -->
    <quize-tree-view></quize-tree-view>
   <!-- #no 3 -->
   <!-- <quize-result-view></quize-result-view> -->

    </v-container>
</template>
<script>
import quizeResultView from '@/components/global/quize.result.view'
import quizeTreeView from '@/components/global/quize.tree.view'
import mentorInfo from '@/data/mentor.info'
import CardDesignOne from '@/components/global/card.design.base.one'
export default {
    components: {
        CardDesignOne,quizeTreeView,quizeResultView
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
