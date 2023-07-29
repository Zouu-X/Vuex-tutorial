import axios from 'axios'

const state = {
    todos: []
}

//for components to get this js
const getters = {
    allTodos: (state) => state.todos
}

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    commit('setTodos', response.data)
    console.log('data', response.data)
  },
  async addTodo({ commit }, title) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false});

    commit('newTodo', response.data)
  },
  async deleteTodo({ commit }, id) {
    //在后端清除
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    commit('removeTodo', id)
  }
}

const mutations = {
  //state表示当前Vuex 'state'对象，todos参数则是传入的response.data
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  //在前端清除
  removeTodo:(state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
}

export default {
    state,
    getters,
    actions,
    mutations
}