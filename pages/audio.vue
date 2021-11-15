<template>
  <div>
    <audio controls :src="require('@/assets/out.mp3').default"></audio>
    <hr/>
    <audio controls src="@/assets/out.mp3"></audio>
    <hr/>
    <audio controls src="../horse.mp3" ref="audio"></audio>
    <button
      @click="playNotification"
      class="text-2xl rounded px-8 py-2 bg-green-400 hover:bg-green-500"
    >
      Play Me
    </button>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      audioUrl: "C:/history/demo/nuxt-demo/nuxt-project/assets/out.mp3"
    };
  },
  methods: {
      playNotification() {
        //   this.$refs.audio.currentTime = 0;
        //   this.$refs.audio.play()
          this.$refs.currentTime = 0
          this.$refs.play()
      }
  }
};
</script>
<style scoped>
</style>