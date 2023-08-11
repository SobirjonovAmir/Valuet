import axios from "axios"
const key = "e82a21100382bd1de0b120fa891faf502bffd806d1e8697d261544f1e9cc"


const methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

export const useHTTP = () => {
    let loading = false
    let error = false

    const request = async (url, method = "GET", body = null) => {

        if(!methods.includes(method.toUpperCase())) {
            throw new Error(`метода ${method} не существует ты ублюдок!`)
        }

        loading = true

        try {
            method = method.toLowerCase()
            const res = await axios[method](url + `?api_key=${key}`, body)

            if(res.status === 200 || res.status === 201) {
                loading = false
                return res.data
            }
        } catch(e) {
            loading = false
            error = true
            return 'not found'
        }
    }

    return {request, loading, error}

}