<template>
  <div>
    <input v-model="inputUrl" placeholder="url here">
    <button v-on:click="addItem">add url</button>
    <div v-show="isLoading" class="loader">Loading...</div>
    <table>
      <tbody>
        <tr v-for="(title, index) in titles" :key="index">
          <td><a v-bind:href="title.url" target="_blank" rel="noopener noreferrer">{{ title.title }}</a></td>
          <td><button v-on:click="deleteItem(index)">delete</button></td>
        </tr>
      </tbody>
    </table>
    <p v-show="error">Some error occured...</p>
    <div v-if="results.length">
      <h2>Kaimono List</h2>
      <table>
        <thead>
          <tr>
            <th @click="sortByChecked">▼</th>
            <th>name</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(result, index) in results" :key="index">
            <td><input type="checkbox" v-model="result.checked" /></td>
            <td
              v-bind:class="(result.checked == false) ? 'gray' : ''"
            >
              {{ result.name }}
            </td>
            <td
              v-bind:class="(result.checked == false) ? 'gray' : ''"
            >
              {{ result.amount }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
      titles: [],
      isLoading: false,
      error: false
    }
  },
  methods: {
    addItem: function () {
      this.error = false
      if (this.checkUrl()) {
        this.urls.unshift(this.inputUrl)
        this.makeList()
        this.inputUrl = ''
      } else {
        alert('白ごはん.comかYouTubeのURLを入力してください');
      }
    },
    deleteItem: function (index) {
      this.error = false
      this.urls.splice(index, 1)
      this.makeList()
    },
    makeList: async function () {
      if (this.urls.length) {
        this.isLoading = true
        const response = await axios.post('https://kondate-api.herokuapp.com/make_list', {
          urls: this.urls
        }).catch(() => {
          this.isLoading = false
          this.error = true
        })
        response.data.recipes.forEach(element => {
          element.checked = true
        })
        this.isLoading = false
        this.results = response.data.recipes
        this.titles = response.data.titles
      } else {
        this.results =[]
        this.titles = []
      }
    },
    checkUrl: function () {
      if (this.inputUrl.startsWith('https://www.sirogohan.com/')
        || this.inputUrl.startsWith('https://www.youtube.com/')
        || this.inputUrl.startsWith('https://youtu.be/')
      ) {
        return true
      } else {
        return false
      }
    },
    sortByChecked: function () {
      this.results.sort(function (a, b) {
        if(a.checked>b.checked) return -1;
        if(a.checked < b.checked) return 1;
        return 0;
      })
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

.gray {
  color: #eeeeee;
}

.loader {
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #0dc5c1;
  background: -moz-linear-gradient(left, #0dc5c1 10%, rgba(13,197,193, 0) 42%);
  background: -webkit-linear-gradient(left, #0dc5c1 10%, rgba(13,197,193, 0) 42%);
  background: -o-linear-gradient(left, #0dc5c1 10%, rgba(13,197,193, 0) 42%);
  background: -ms-linear-gradient(left, #0dc5c1 10%, rgba(13,197,193, 0) 42%);
  background: linear-gradient(to right, #0dc5c1 10%, rgba(13,197,193, 0) 42%);
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before {
  width: 50%;
  height: 50%;
  background: #0dc5c1;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}
.loader:after {
  background: #ffffff;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

</style>
