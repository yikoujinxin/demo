<template>
    <div>
        <ol>
        <todoItem v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id">
        </todoItem>
    </ol>
    </div>
</template>

<script>
// import todoItem from '@/components/TodoItem'
export default {
  components: {
    'todoItem': {props: ['todo'], template: `<li>{{ todo.text }}</li>`}
  },
  data() {
    return {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
  },
}
</script>