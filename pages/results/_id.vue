<template>
  <div>
      <h1>Hello{{$route.params.id}}</h1>
      {{$store.state.albums}}
  </div>
</template>
<script>
  export default {
    middleware:'search'

  }
</script>