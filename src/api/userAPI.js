import axios from 'axios'

const BASE_URL = `http://localhost:8080/api/github`

const createUser = async (user) => {
    try {
        const response = await axios.post(BASE_URL + `/create`, user)
        return response.data
    } catch (error) {
        alert(error)
    }
    return null
}

const verifyLogin = async (login, password) => {
    try {
        const response = await axios.get(BASE_URL + `/verify`, {
            params: { login, password },
        })
        return response.data
    } catch (error) {
        alert(error)
    }
    return null
}

const followUser = async (userId, userShort) => {
    try {
        await axios.post(BASE_URL + `/follow/${userId}`, userShort)
    } catch (error) {
        alert(error)
    }
}

const unfollowUser = async (userId, login) => {
    try {
        await axios.delete(BASE_URL + `/unfollow/${userId}/${login}`)
    } catch (error) {
        alert(error)
    }
}

const getFollowingUsers = async (userId) => {
    try {
        const response = await axios.get(BASE_URL + `/${userId}/following`)
        return response.data
    } catch (error) {
        alert(error)
    }
    return null
}

export {
    createUser,
    verifyLogin,
    followUser,
    unfollowUser,
    getFollowingUsers,
}
