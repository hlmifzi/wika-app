import { clientPost } from '../../../MyServices/api/URLApi'

export const SignInAction = async (payload) => {
    return await clientPost('auth/login', payload)
}


