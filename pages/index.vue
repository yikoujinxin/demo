<template>
  <!-- <Tutorial/> -->
  <main>
    <h1>Home page</h1>
    <nuxt-link to="/fun">
        Fun (internal link that belongs to the Nuxt App)
    </nuxt-link>
    <hr/>
    <a href="https://www.google.com">External Link to another page</a>
  </main>
</template>

<script>
export default {
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  }
}
</script>
