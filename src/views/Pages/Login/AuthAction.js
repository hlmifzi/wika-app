import cookie from 'react-cookies'
import { clientPost } from '../../../MyServices/api/URLApi'

export const SignInAction = async () => {
    let payload = {
        "officeEmail": "suarbawa@wikamail.id",
        "password": "secret"
    }
    let { data } = await clientPost('auth/login', { body: payload })
    cookie.save('JWT', data.token, { path: '/' })
}


export const signOutAction = async () => {
    cookie.remove('JWT');
}


