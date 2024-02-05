const appReducer = (state , action) =>{
    switch (action , type) {
        case 'CHANGE-LANGUAGE' :{
            return {
                ...state,
                language : action.payload
            }
        }
        case 'CHNAGE_THEME' :{
            return{
                ...state,
                theme : action.payload
            }
        }
    }
}

export default appReducer