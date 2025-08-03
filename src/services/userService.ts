import api from "@/server/ApplicationService"

export const gatAllUsers = async () => {
    try {
        const response = await api.get(`/users?since=16&per_page=5`)
        return response
    } catch (error) {
        console.error("Error to get all agents:", error)
    }
}