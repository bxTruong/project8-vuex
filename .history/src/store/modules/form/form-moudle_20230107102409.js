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
        changeGenderAct,
        getAllGendersListAct({ commit }) {
            const genders = []
            commit("onChangeGendersList", genders)
        }
    }

}

