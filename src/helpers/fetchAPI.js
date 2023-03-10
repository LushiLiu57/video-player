import axios from 'axios'

export const O_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: O_URL,
    params: {
      maxResults: 50
    },
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchAPI = async (url) => {
    const {data} = await axios.get(`${O_URL}/${url}`, options)
    return data
}
  