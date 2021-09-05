<template>
  <div>
    <input v-model="inputUrl" placeholder="url here">
    <button v-on:click="addItem">add url</button>
    <div v-show="isLoading" class="loader">Loading...</div>
    <div v-for="(result, index) in results" :key="index">
      <a v-bind:href="result.url" target="_blank" rel="noopener noreferrer">{{ result.title }}</a>
      <button v-on:click="deleteItem(index)">delete</button>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(ingredient, index) in result.ingredients" :key="index">
            <td>{{ ingredient.name }}</td>
            <td>{{ ingredient.amount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-show="error">Some error occured...</p>
    <div v-if="totalIngredients.length">
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
          <tr v-for="(totalIngredient, index) in totalIngredients" :key="index">
            <td><input type="checkbox" v-model="totalIngredient.checked" /></td>
            <td
              v-bind:class="(totalIngredient.checked == false) ? 'gray' : ''"
            >
              {{ totalIngredient.name }}
            </td>
            <td
              v-bind:class="(totalIngredient.checked == false) ? 'gray' : ''"
            >
              {{ totalIngredient.amount }}
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
      totalIngredients: [],
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
        const apiUrl = process.env.VUE_APP_API_BASE_URL
        const response = await axios.post(apiUrl+'make_list', {
          urls: this.urls
        }).catch(() => {
          this.isLoading = false
          this.error = true
        })
        this.isLoading = false
        this.results = response.data
        this.mergeIngredients()
      } else {
        this.results = []
        this.totalIngredients = []
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
      this.totalIngredients.sort(function (a, b) {
        if(a.checked>b.checked) return -1;
        if(a.checked < b.checked) return 1;
        return 0;
      })
    },
    mergeIngredients: function () {
      this.totalIngredients = []
      this.results.forEach(result => {
        result.ingredients.forEach(ingredient => {
          ingredient.checked = true
          let flgDuplicate = false
          for(let i = 0 ; i < this.totalIngredients.length ; i ++ ) {
            if (this.totalIngredients[i].name === ingredient.name) {
              this.totalIngredients[i].amount += (' & ' + ingredient.amount)
              flgDuplicate = true
              break
            }
          }
          if (!flgDuplicate) {
            this.totalIngredients.unshift(ingredient)
          }
        })
      })
      console.log(this.totalIngredients)
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
