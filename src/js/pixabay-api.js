import axios from "axios";

const key = '49650376-6654a0e8c93b5d9da070a04be';
const orientation = 'horizontal';
const safesearch = 'true';
const image_type = 'photo';

export function getImageList(q) {
    const url = `https://pixabay.com/api/?key=${key}&q=${q}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}`;
    return axios.get(url);
}
