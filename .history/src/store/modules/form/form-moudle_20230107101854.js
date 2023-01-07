export default {

    state: {
        genderSelected:'',
        genders:[]
    },

    mutations:{
        onChangeGender(state, response){
            state.genderSelected = response
        }
    },

    actions: {
        onGetAllGenders
    }

}

