export default {

    state: {
        genderSelected: '',
        genders: []
    },

    mutations: {
        onChangeGender(state, response) {
            state.genderSelected = response
        },
        onChangeGendersList(state, response) {
            state.genders = response
        }
    },

    actions: {
        change,
        getAllGendersListAct({ commit }) {
            const genders = []
            commit("onChangeGendersList", genders)
        }
    }

}

