<template lang="pug">
  <div>
    <h1>About page with jQuery and Roboto font</h1>
    h2.red Hello {{ name }}!
  </div>
</template>

<script>
  export default {
    data() {
      return { name: "World" }
    },
    head() {
      return {
        script: [
          {
            src:
              'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
          }
        ],
        link: [
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
          }
        ]
      }
    },
    render(h) {
      return <h1 class="red">{this.name}</h1>
    }
  }
</script>

<style lang="scss">
  .red {
    color: red;
  }
</style>
<style scoped>
  h1 {
    font-family: Roboto, sans-serif;
  }
</style>