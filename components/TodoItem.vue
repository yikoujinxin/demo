<template>
    <ol>
        <li v-for="item2 in groceryList2" v-bind:key="item2.id">
          {{ item2.text }}
        </li>
    </ol>
</template>

<script>
export default {
  name: 'todoItem2',
  data() {
    return {
        groceryList2: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
  },
}
</script>