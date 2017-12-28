import Axios from 'axios'

export default function ({params, store}) {
    return Axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
     .then((response) => {
         store.commit('add',response.data.results);
     });
}