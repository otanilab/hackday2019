<template>
  <div>
    <global-header>マイページ</global-header>
    <profile-card :userProfile="user" :tropheyArray="trophies" />
    <TrophyList :trophyIdList="trophyIdList"></TrophyList>
    <GBG />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import GlobalHeader from '~/components/GlobalHeader'
import TrophyList from '~/components/TrophyList'
import ProfileCard from '~/components/ProfileCard'
import GBG from '~/components/GradeBackGround'
import { db } from '~/store/db'

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
  },
  created() {
    this.$store.dispatch('users/bind')
    this.$store.dispatch('users/trophybind')
    // this.$store.dispatch('trophies/bind')

    db.collection('users')
      .doc('GR5uXTI3WbfDw9IqVah50k0FTv92')
      .collection('acquired-trophies')
      .get()
      .then((querySnapshot) => {
        const ids = []
        querySnapshot.forEach((doc) => ids.push(doc.id))
        console.log(ids)
        this.trophyIdList = []
        db.collection('trophies')
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              if (ids.includes(doc.id)) {
                this.trophyIdList.push(doc.data())
              }
            })
          })
      })
  },
  computed: {
    ...mapState('users', ['user', 'trophies']),
    ...mapState('trophies', { trophyList: 'list' })
  }
}
</script>
