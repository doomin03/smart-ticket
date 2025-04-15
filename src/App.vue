<template>
  <div id="app">
    <router-view v-if="$route.path === '/'" />

    <div class="container-main" v-else>
      <side-menu-bar :path="$route.path" />
      <div class="body">
        <Header></Header>
        <router-view />
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenuBar from "@/component/common/SideMenuBar.vue";
import Header from "@/component/common/Header.vue";
import Footer from "@/component/common/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
    SideMenuBar,
    Header,
  },
}
</script>

