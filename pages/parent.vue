<template>
    <div>
        <h1>I am the parent view</h1>
        <nav>
            <ul>
                <li>
                    <nuxt-link to="/parent/child">Child</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/parent/child2">Child 2</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/fun" no-prefetch>fun</nuxt-link>
                </li>
            </ul>
        </nav>
        <nuxt-child/>
    </div>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1rem;
}
/* .nuxt-link-active {
    color: red;
}
.my-custom-active-link {
    color: sandybrown;
}
.nuxt-link-exact-active {
    color: yellow;
}
.my-custom-exact-active-link{
    color: blue;
} */
.nuxt-link-prefetched {
  color: orangeRed;
}
</style>