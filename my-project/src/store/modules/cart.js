const state = {
	a:0,
	b:1,
	c:2
}

const getters = {
	totle:(state, getters) => {
		
	}
}

const actions = {
	incrementAsync({ commit, state}, num){
		setTimeout(() => {
			commit('addA', num)
		},1000)
		
		setTimeout(() => {
			commit('addB', num)
		},2000)
		
		setTimeout(() => {
			commit('addC', num)
		},3000)
	},
	actionA({ commit }){
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				commit('addA')
				resolve('success')
			},2000)
		})
	},
	actionB({ dispatch, commit}){
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				dispatch('incrementAsync')
				resolve('success')
			}, 1000)
		})
	}
}

const mutations = {
	addA(state, num){
		if(num){
			state.a += num;
		}else{
			state.a++;
		}
	},
	addB(state, num){
		if(num){
			state.b += num;
		}else{
			state.b++;
		}
	},
	addC(state, num){
		if(num){
			state.c += num;
		}else{
			state.c++;
		}
	}
}

export default {
	namespaced: true,
	state,
    getters,
    actions,
    mutations
}