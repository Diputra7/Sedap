import axios from 'axios'

const API_URL = "https://xqpduwcdahxvuglbwuzi.supabase.co/rest/v1/note"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxcGR1d2NkYWh4dnVnbGJ3dXppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTQ0MTEsImV4cCI6MjA2NTE5MDQxMX0.ihV1a3XAWZwEdtEwXS1bZn69Rad9E0vwpeWO4VjK8BE"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
        
        
    },
      async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
}
}