export default {

    state: {
        genderSelected:'',
        genders:[]
    },

    mutations:{
        onChangeGender(state, response){
            state.genderSelected = response
        },
        onChangeGendersList(state, response){
            state.ge
        }
    },

    actions: {
        onGetAllGenders({commit}) {
            genders = []
        }
    }

}

