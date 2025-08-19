import api from "@/server/ApplicationService"

export const getAllUsers = async (since: number, limit = 10) => {
    try {
        const response = await api.get(`/users?since=${since}&per_page=${limit}`)
        console.log("users from api response: ", response)
        return response
    } catch (error) {
        console.error("Error to get all agents:", error)
    }
}