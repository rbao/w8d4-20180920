<template>
  <div id="url-list">
    <ul v-for="url in urlDatabase">
      <url-item :url="url" @edit="editUrl"></url-item>
    </ul>

    <form @submit.prevent="submit">
      <p>
        <label>ID: </label>
        <input v-model="currentUrl.id" type="text" name="id">
      </p>

      <p>
        <label>Name: </label>
        <input v-model="currentUrl.name" type="text" name="name">
      </p>

      <p>
        <label>Long URL: </label>
        <input v-model="currentUrl.longUrl" type="text" name="longUrl">
      </p>

      <button type="submit">Submit</button>
      <button v-if="isEditing" @click="cancelEdit" type="button" style="margin-left: 10px;">Cancel Edit</button>
    </form>
  </div>
</template>

<script>
import UrlItem from './url-item'

export default {
  name: 'UrlList',
  components: {
    UrlItem
  },
  data () {
    return {
      isEditing: false,
      currentUrl: {
        id: '',
        name: '',
        longUrl: 'http://'
      },
      urlDatabase: [
        {id: 'short1', name: 'Google', longUrl: 'http://google.com' },
        {id: 'short2', name: 'Facebook', longUrl: 'http://facebook.com' }
      ]
    }
  },
  computed: {
    fullName () {
      return `${this.user.firstName} ${this.user.lastName}`
    }
  },
  methods: {
    resetUrl () {
      this.currentUrl = {
        id: '',
        name: '',
        longUrl: 'http://'
      }
    },

    editUrl (url) {
      // 1. Prefill the existing input
      this.currentUrl = Object.assign({}, url)

      // 2. Show the cancel edit button
      this.isEditing = true
    },

    cancelEdit() {
      this.resetUrl()
      this.isEditing = false
    },

    submit (e) {
      if (this.isEditing) {
        // 1. The url currently editing
        let targetUrl = this.urlDatabase.find((url) => {
          return this.currentUrl.id === url.id
        })

        // 2. Update it
        targetUrl.id = this.currentUrl.id
        targetUrl.name = this.currentUrl.name
        targetUrl.longUrl = this.currentUrl.longUrl
      } else {
        this.urlDatabase.push(this.currentUrl)
      }

      this.resetUrl()
    }
  }
}
</script>

<style>
</style>
