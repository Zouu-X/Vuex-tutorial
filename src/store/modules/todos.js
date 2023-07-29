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
  }
}

const mutations = {
  //state表示当前Vuex 'state'对象，todos参数则是传入的response.data
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo)
}

export default {
    state,
    getters,
    actions,
    mutations
}