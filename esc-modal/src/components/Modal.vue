<template>
  <div class="modal" :style="{ display: show ? 'block' : 'none' }">
    <div class="modal-dialog" style="z-index: 2000">
      <div class="modal-content" @keydown.esc="close" tabindex="0" ref="modal">
        <div class="modal-header">
          <h5 class="modal-title">Awesome Title</h5>
          <button type="button" class="close" @click="close">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Awesome content.</p>
        </div>
      </div>
    </div>
    <div class="modal-backdrop show"></div>
  </div>
</template>

<script>
export default {
  name: "AppModal",
  props: ["show"],
  methods: {
    close() {
      this.$emit("hide");
    },
    handler(e){
      if(e.code === 'Escape' && this.show){
        this.close()
      }
    }
  },

  created() {
    document.addEventListener('keydown', this.handler)
  },
  unmounted() {
    document.removeEventListener('keydown', this.handler)
  },
  // watch:{
  //   show(newVal){
  //     if(newVal){
  //       this.$nextTick(()=>{
  //         this.$refs.modal.focus()
  //       })
  //     }
  //   }
  // }
};

</script>
<!--<style scoped>-->
<!--.modal-dialog {-->
<!--  outline: 0-->
<!--}-->
<!--</style>-->