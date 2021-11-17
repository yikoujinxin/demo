<template>
    <div>
        <ol>
          <todoItem v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id">
          </todoItem>
        </ol>
          <todoItem2/>
    </div>
</template>

<script>
import todoItem2 from '@/components/TodoItem'
export default {
  components: {
    'todoItem': {props: ['todo','todo2'], template: `<li>{{ todo.text }}</li>`},
    todoItem2
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