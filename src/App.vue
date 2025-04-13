<template>
  <div id="app">
    <router-view v-if="$route.path === '/login'" />

    <div class="container-main" v-else>
      <side-menu-bar :path="$route.path" />
      <div class="body">
        <div class="header">qwer</div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideMenuBar from "@/component/common/SideMenuBar.vue";

export default {
  name: "App",
  components: {
    SideMenuBar,
  },
}
</script>

