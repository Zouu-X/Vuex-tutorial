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
  }
}

const mutations = {
  //state表示当前Vuex 'state'对象，todos参数则是传入的response.data
  setTodos: (state, todos) => (state.todos = todos)

}

export default {
    state,
    getters,
    actions,
    mutations
}