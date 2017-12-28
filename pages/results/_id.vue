<template>
  <div>
      <h1>Results for {{$route.params.id}}</h1>

    <div v-if="albumExists">
      <div v-for="(album, index) in albumData">
        <Cards
         :title="album.collectionCensoredName"
         :image="album.artworkUrl100"
         :artistName="album.artistName"
         :url="album.artistViewUrl"
         :color="picker(index)"
        />
      </div>

         <!--{{albumData}}-->
     </div>
     <div v-else>
       <h4>Can't find album</h4>
     </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Cards from '~/components/Cards.vue'


  export default {
    asyncData ({params}) {
      return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
        .then((response) => {
            return {albumData: response.data.results}
        })
    },
    middleware: 'search',
    computed: {
      albumExists () {
        return this.albumData.length > 0
      }
    },
    methods:{
      picker(index){
        return index % 2 == 0 ? 'red' : 'blue'
      }
    },
    components: {
      Cards
    }
  }
</script>
