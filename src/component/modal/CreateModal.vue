<template>
  <vue-final-modal
      v-model="showModal"
      name="createModal"
      overlay-class="custom-overlay"
  >
    <div class="custom-modal">

    </div>
  </vue-final-modal>
</template>

<script>
import {VueFinalModal} from "vue-final-modal";

export default {
  name: 'CreateModal',
  components: {VueFinalModal},
  data() {
    return {
      showModal: false,
    }
  },
  methods: {}
}
</script>