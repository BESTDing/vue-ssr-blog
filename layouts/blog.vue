<template>
  <div>
    <app-bar />
    <nuxt/>
  </div>
</template>

<script>
  import AppBar from '../components/app-bar'

  export default {
    name: '',
    props: {},
    components: {
      AppBar
    }
  }
</script>

<style lang="scss">

  @media (min-width: 48em) {
    .content-container-wrapper {
      padding-top: 5.25em;
      .content {
        max-width: 40em;
      }
    }
  }
  .content-container-wrapper {
    padding:2em 1.5em 0 1.5em;
    .content {
      margin: 0 auto;
    }
  }
</style>
