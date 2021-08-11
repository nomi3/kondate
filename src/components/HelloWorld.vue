<template>
  <div>
    <input v-model="inputUrl" placeholder="url here">
    <button v-on:click="addItem">add url</button>
    <table>
      <tbody>
        <tr v-for="(url, index) in urls" :key="index">
            <td>{{ url }}</td>
            <td><button v-on:click="deleteItem(item)">delete</button></td>
        </tr>
      </tbody>
    </table>
    <button v-if="urls.length" v-on:click="createList">create kaimono list</button>
    <p v-show="isLoading">Just a minute, please...</p>
    <p v-show="error">Some error occured...</p>
    <table v-if="results.length">
      <tbody>
        <tr v-for="(result, index) in results" :key="index">
            <td>{{ result.name }}</td>
            <td>{{ result.amount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      inputUrl: '',
      urls: [],
      results: [],
      isLoading: false,
      error: false
    }
  },
  methods: {
    addItem: function () {
      this.error = false
      if (this.checkUrl()) {
        this.urls.unshift(this.inputUrl)
        this.inputUrl = ''
      } else {
        alert('白ごはん.comかYouTubeのURLを入力してください');
      }
    },
    deleteItem: function (item) {
      this.error = false
      var index = this.urls.indexOf(item)
      this.urls.splice(index, 1)
    },
    createList: async function () {
      console.log('kondate!')
      this.error = false
      this.isLoading = true
      const response = await axios.post('https://kondate-api.herokuapp.com/test', {
        urls: this.urls
      }).catch(() => {
        this.isLoading = false
        this.error = true
      })
      console.log(response.data)
      this.isLoading = false
      this.results = response.data
    },
    checkUrl: function () {
      // 語頭が白ごはんかyoutubeなのを確認する
      return this.inputUrl.startsWith('https://')
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
ul {
  list-style-type: none;
}

table {
  margin-left: auto;
  margin-right: auto;
}
</style>
