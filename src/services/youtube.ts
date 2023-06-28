import axios from 'axios'

const KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY

const api = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { part: 'snippet', maxResults: 136, key: KEY },
})

export default api
