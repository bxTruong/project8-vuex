export default {

    state: {
        genderSelected: {},
        genders: [
            genderModel(title='',value ='')
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
        changeGenderAct({commit}){

        },
        getAllGendersListAct({ commit }) {
            const genders = []
            commit("onChangeGendersList", genders)
        }
    }

}

