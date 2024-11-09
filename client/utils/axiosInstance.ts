import axios from 'axios'
import Cookies from 'js-cookie'

const axiosInstance = axios.create({
	// @TODO: fix getting server url from .env
	// baseURL: process.env.SERVER_BASE_URL,
	baseURL: 'http://127.0.0.1:8000/api',
})

axiosInstance.interceptors.request.use(
	config => {
		const userId = Cookies.get('user_id')
		const role = Cookies.get('role')

		if (userId && role) {
			config.headers['X-User-ID'] = userId
			config.headers['X-Role'] = role
		}
		return config
	},
	error => {
		return Promise.reject(error)
	},
)

axiosInstance.interceptors.response.use(
	response => {
		// Check for Set-Cookie headers in the response
		const setCookieHeaders = response.headers['set-cookie']

		if (setCookieHeaders) {
			setCookieHeaders.forEach(cookieString => {
				const [cookieName, cookieValue] = cookieString.split(';')[0].split('=')

				if (cookieName === 'user_id' || cookieName === 'role') {
					// Set the cookie in the browser
					Cookies.set(cookieName, cookieValue, { path: '/' })
				}
			})
		}

		return response
	},
	error => Promise.reject(error),
)

export default axiosInstance
