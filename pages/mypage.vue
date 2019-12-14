<template>
  <div>
    <global-header>マイページ</global-header>
    <profile-card />
    <TrophyList :trophyIdList="trophyIdList"></TrophyList>
  </div>
</template>
<script>
import GlobalHeader from '~/components/GlobalHeader'
import TrophyList from '~/components/TrophyList'
import ProfileCard from '~/components/ProfileCard'

export default {
  components: { GlobalHeader, TrophyList, ProfileCard },
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
