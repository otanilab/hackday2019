<template>
  <div>
    <global-header>マイページ</global-header>
    <profile-card />
    <TrophyList :trophyIdList="trophyIdList"></TrophyList>
    <GBG />
  </div>
</template>
<script>
import GlobalHeader from '~/components/GlobalHeader'
import TrophyList from '~/components/TrophyList'
import ProfileCard from '~/components/ProfileCard'
import GBG from '~/components/GradeBackGround'

export default {
  components: { GlobalHeader, TrophyList, ProfileCard, GBG },
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
