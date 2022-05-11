<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { TodoItem } from '@/domains/types'

export default defineComponent({
  setup() {
    const state = reactive({
      newTask: {
        label: '',
        type: 'personal',
      } as TodoItem,
      taskItems: [] as TodoItem[],
      listFilter: 'all',
    })

    return {
      ...toRefs(state),
    }
  },
  computed: {
    filteredTasks(): TodoItem[] {
      if (this.listFilter === 'complete') {
        return this.taskItems.filter(
          (item: TodoItem) => item.isComplete === true
        )
      } else if (this.listFilter === 'incomplete') {
        return this.taskItems.filter(
          (item: TodoItem) => item.isComplete === false
        )
      } else {
        return this.taskItems
      }
    },
  },
  methods: {
    addTask() {
      this.taskItems.push({
        ...this.newTask,
        isComplete: false,
      })
    },
  },
})
</script>
