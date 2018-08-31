<template>
  <div class="hello">
        <form v-on:submit.prevent="getMusic">
        <p>Enter music selection: <input type="text" v-model="query" placeholder="Dave Matthews"> <button type="submit">Go</button></p>
    </form>
  </div>
</template>

<script>
import {API} from '@/common/api'
export default {
  name: 'HelloWorld',
  data () {
    return {
      query: '',
      results: undefined
    }
  },
  methods: {
    getMusic () {
      API.get('', {
        params: {
          q: this.query
        }
      })
      .then(response => {
        this.results = response.data
      })
      .catch(error => {
        this.errors.push(error)
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
