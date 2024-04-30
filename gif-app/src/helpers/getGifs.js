import axios from 'axios';

export const getGifs = async (category) => {

    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=PPBqY8VmNYkbXUumFPoSp0BNtWAimkCk&q=${category}&limit=5`);

    const {data} = await response.data;

    const gifs = data.map((data) => ({
        id: data.id,
        title: data.title,
        imgUrl: data.images.downsized_medium.url
    }))

    return gifs;

}