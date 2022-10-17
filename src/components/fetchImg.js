import axios from "axios"

export function fetchImages({query = "", page = 1}) {
    return axios.get(`https://pixabay.com/api/?q=${query}&page=${page}&key=29746553-1bca6bd490352bbcaa49de9e7&image_type=photo&orientation=horizontal&per_page=12`)
        
}