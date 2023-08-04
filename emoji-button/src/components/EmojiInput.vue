<template>
  <div class="input-group">
    <input type="text" class="form-control" :value="emojiObj.emoji" readonly />
    <button class="btn btn-outline-secondary" type="button" ref="emojiBtn">
      {{ emojiObj ? emojiObj.emoji : 'Select' }}
    </button>
  </div>
</template>

<script>
import {EmojiButton} from '@joeattardi/emoji-button'

export default {
  name: "EmojiInput",
  props:['emojiObj'],
  mounted() {
    const picker = new EmojiButton();
    const btn = this.$refs.emojiBtn

    picker.on('emoji', (emoji)=>{
      this.$emit('update:emojiObj', emoji)
    })

    btn.addEventListener('click', ()=>{
      picker.togglePicker(btn)
    })
  }
}
</script>

<style scoped>

</style>