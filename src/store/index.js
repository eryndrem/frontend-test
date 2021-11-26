import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        /* Раздел 1 */

        selectedColor: 'red', // Выбранный цвет
        text: '', // Текстовое содержимое

        /* Раздел 2 */

        /* Блок 1 */
        selectedOption: '', // Выбранная опция селекта
        filterText: '' // Фильтрующий текст

        /* Блок 2 */,
        todoTasks: [] // Cписок дел
    },

    getters: {
        selectedColor: s => s.selectedColor,
        text: s => s.text,

        selectedOption: s => s.selectedOption,
        filterText: s => s.filterText,

        todoTasks: s => s.todoTasks
    },

    actions: {
        setSelectedColor({ commit }, payload) {
            commit('SET_SELECTED_COLOR', payload)
        },

        setText({ commit }, payload) {
            commit('SET_TEXT', payload)
        },

        setSelectedOption({ commit }, payload) {
            commit('SET_SELECTED_OPTION', payload)
        },

        setFilterText({ commit }, payload) {
            commit('SET_FILTER_TEXT', payload)
        },

        setTodoTasks({ commit }, payload) {
            commit('SET_TODO_TASKS', payload)
        }
    },

    mutations: {
        SET_SELECTED_COLOR(state, payload) {
            state.selectedColor = payload
        },

        SET_TEXT(state, payload) {
            state.text = payload
        },

        SET_SELECTED_OPTION(state, payload) {
            state.selectedOption = payload
        },

        SET_FILTER_TEXT(state, payload) {
            state.filterText = payload
        },

        SET_TODO_TASKS(state, payload) {
            state.todoTasks = payload
        }
    }
})
