export default {

    state: {
        genderSelected: {},
        genders: [
            { title: '', value: '' }
        ]
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
        changeGenderAct({ commit }, { genderModel }) {
            commit("onChangeGendersList", genderModel)
        },
        getAllGendersListAct({ commit }) {
            const genders = [
                { id: 1, title: 'Male' },
                { id: '', title: 'Male' },
                { id: '', title: 'Male' },
            ]
            commit("onChangeGendersList", genders)
        }
    }

}

