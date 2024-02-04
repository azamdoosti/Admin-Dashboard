const appReducer = (state , action) =>{
    switch (action , type){
        case 'CHANGE-LANGUAGE' :{
            return {
                ...state,
                language : action.payload
            }
        }
    }
}

export default appReducer