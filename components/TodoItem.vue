<template>
    <ol>
        <li v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id">
        </li>
    </ol>
</template>

<script>
export default {
  name: 'todoItem'
}
</script>