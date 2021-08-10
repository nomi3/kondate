<template>
  <div>
    <input v-model="url" placeholder="url here">
    <button v-on:click="addItem">add url</button>
    <table>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
            <td>{{ item.message }}</td>
            <td><button v-on:click="deleteItem(item)">delete</button></td>
        </tr>
      </tbody>
    </table>
    <button v-if="items.length" v-on:click="create">create kaimono list</button>
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
export default {
  name: 'HelloWorld',
  data () {
    return {
      url: '',
      items: [],
      results: [],
      mockList: [
        {
          name: 'じゃがいも',
          amount: '2個'
        },
        {
          name: 'にんじん',
          amount: '2本'
        }
      ]
    }
  },
  methods: {
    addItem: function () {
      if (this.checkUrl()) {
        this.items.unshift({
          message: this.url
        })
        this.url = ''
      }
    },
    deleteItem: function (item) {
      var index = this.items.indexOf(item)
      this.items.splice(index, 1)
    },
    create: function () {
      console.log('kondate!')
      this.results = this.mockList
    },
    checkUrl: function () {
      // 語頭が白ごはんかyoutubeなのを確認する
      return this.url.startsWith('https://')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
