const state = {
  all: [1,2,3],
}

// getters
const getters = {
	totleNum(state, getters, rootState, rootGetters){
		console.log(rootState, rootGetters)
		return state.all.reduce((a, b) => {
			return a + b
		})
	}
}

// actions
const actions = {
  
}

// mutations
const mutations = {
    pushAll(state, num){
		state.all.push(num)
	},
	
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}