<template>
  <li>
    <span>{{url.id}}</span> -
    <span>{{url.name}}</span> -
    <a :href="url.longUrl">{{url.longUrl}}</a>

    <button @click="editUrl" style="margin-left: 10px;">Edit</button>
  </li>
</template>

<script>
export default {
  name: 'UrlItem',
  props: {
    url: {
      type: Object,
      required: true
    }
  },
  methods: {
    editUrl () {
      this.$emit('edit', this.url)
    }
  }
}
</script>

<style scoped>
button {
  color: red;
}
</style>
