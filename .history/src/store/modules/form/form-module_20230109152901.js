export default {
    namespaced: true,
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
                { id: 2, title: 'Female' },
                { id: 3, title: 'Other' },
            ]
            commit("onChangeGendersList", genders)
        }
    }

}

