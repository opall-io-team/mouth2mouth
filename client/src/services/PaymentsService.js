// [IMPORT] //
import axios from 'axios'


// [AUTH-TOKEN-SETUP] //
async function authAxios() {
	return axios.create({
		baseURL: '/api/payments',
		headers: {
			authorization: `Bearer ${localStorage.usertoken}`,
			authorization2: `Bearer ${localStorage.admintoken}`
		}
	})
}


async function s_charge(product_id, email, token) {
	try {
		const authAxios = await this.authAxios()

		return (await authAxios.post('/charge', { product_id, email, token })).data
	}
	catch (err) { return err }
}


export default {
	authAxios,
	s_charge,
}
