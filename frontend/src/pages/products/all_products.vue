<template>
  <h1>{{ greeting }}</h1>
</template>

<script>
import axios from "axios";

export default {
  name: "allProducts",
  data() {
    return {
      greeting: "Hello how are your mom"
    }
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    async getProducts(){
      const res = await axios.get('/api/products')
      console.log(res.data.results)
    }
  }
}
</script>