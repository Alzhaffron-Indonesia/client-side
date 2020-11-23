import baseUrl from '../../../Constants/BaseUrl';
import swal from 'sweetalert'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
const login = (userData, history) => {    
    return async (dispatch) => {
        try {            
            dispatch({ type: "FIND_USER_LOADING" })
            const { data } = await baseUrl.post('/auth/login', userData)            
            console.log(data)
            cookies.set("user", data.data)
            dispatch({ type: "FIND_USER_SUCCESS", data: { user: data.message } })
            
            if(data.data.verifycationStatus === "Pending"){
                console.log("masuk")
                history.push('/user/register-reseller')
                // window.location = '/user/register-reseller'
            } else if (data.data.verifycationStatus === "Setuju") {
                history.push('/user/shop')
            }

        } catch (error) {
            if(error.response){
                swal({
                    title: "Error!",
                    text: error.response.data.message,
                    icon: 'error',
                    button: "Okay!",
                })
            } 
            dispatch({ type: "FIND_USER_ERROR", data: { error: error.response } })
        }
    }
}

const register = (userData, history) => {
    return async (dispatch) => {
        try {  
            // console.log(userData)
            dispatch({ type: "FIND_USER_LOADING" })
            const { data } = await baseUrl.post('/auth/register', userData)            
            console.log(data)            
            dispatch({ type: "FIND_USER_SUCCESS", data: { user: data.message } })
            swal({                
                title: data.message,
                icon: 'success',
                button: "Login",
            })

            history.push('/login')
        } catch (error) {
            if(error.response){
                swal({
                    title: "Error!",
                    text: error.response.data.message,
                    icon: 'error',
                    button: "Okay!",
                })
            } else {
                swal({
                    title: "Error!",
                    text: "Something Error",
                    icon: 'error',
                    button: "Okay!",
                })
            }
            dispatch({ type: "FIND_USER_ERROR", data: { error: error.response } })
        }
    }
}

export default {
    login,
    register
}