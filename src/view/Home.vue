<template>
  <div class="container-content">
    <div class="box-list">
      <div class="info-box">
        <div class="info-name">이번주 공연</div>
        <div class="info-data">3,500개</div>
      </div>
      <div class="info-box">
        <div class="info-name">등록 공연 리스트</div>
        <div class="info-data">3,500건</div>
      </div>
      <div class="info-box">
        <div class="info-name">회원수</div>
        <div class="info-data">2,534명</div>
      </div>
    </div>
    <div class="h1000 w100p bc"></div>
  </div>
</template>

<script>
import SideMenuBar from "@/component/common/SideMenuBar.vue"

export default {
  name: "Home",
  components: {
    SideMenuBar,
  },
  data() {
    return {
      path: this.$route.path
    }
  },

}
</script>