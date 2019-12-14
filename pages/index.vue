<template>
  <div>
    <TrophyList :trophyIdList="trophyIdList"></TrophyList>
  </div>
</template>

<script>

import TrophyList from '~/components/TrophyList.vue'
export default {
  components: {
    TrophyList
  },
  data() {
    return {
      trophyIdList: [1, 5, 8]
    }
  }
}
</script>
