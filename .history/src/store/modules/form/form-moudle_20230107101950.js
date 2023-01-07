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
            
        }
    },

    actions: {
        onGetAllGenders({commit}) {
            genders = []
        }
    }

}

