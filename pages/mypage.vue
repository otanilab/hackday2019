<template>
  <div>
    <global-header>マイページ</global-header>
    <TrophyList :trophyIdList="trophyIdList"></TrophyList>
  </div>
</template>
<script>
import GlobalHeader from '~/components/GlobalHeader'
import TrophyList from '~/components/TrophyList'

export default {
  components: { GlobalHeader, TrophyList },
  data() {
    return {
      trophyIdList: [
        '山口トロフィー',
        '山口トロフィー',
        '山口トロフィー',
        '山口トロフィー',
        '山口トロフィー',
        '山口トロフィー',
        '山口トロフィー',
        '山口トロフィー',
        '山口トロフィー'
      ]
    }
  }
}
</script>
