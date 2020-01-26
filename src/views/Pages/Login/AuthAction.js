import { clientPost } from '../../../MyServices/api/URLApi'

export const SignInAction = async (payload) => {
    let data = await clientPost('auth/login', { body: payload })
    console.log("TCL: SignInAction -> data", data)
}


