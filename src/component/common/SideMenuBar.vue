<template>
  <div class="side-menu-bar">
    <div class="fw700 fs22 c4B465C pb30">관리자페이지</div>
    <div class="menu-item" :class="{ active: path === router.path}" v-for="router in routers" @click="movePage(router.path)">
      {{router.meta.category}}
    </div>
  </div>
</template>

<script>
export default {
  name: "SideMenuBar",
  components: {},
  props: {
    path: '',
  },
  data(){
    return {
      routers : [],
    }
  },
  created(){},
  mounted() {
    this.setList()
  },
  methods: {
    setList() {
      this.routers = this.$router
          .getRoutes()
          .filter(item => item.meta && item.meta.side);
    },

    movePage(page){
      this.$router.push(page)
    }
  },
}
</script>