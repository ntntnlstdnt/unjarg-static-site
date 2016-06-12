<template>
  <div id="app" class="container">
    <navigation></navigation>
    <contact></contact>
  </div>
</template>

<script>
import navigation from './components/navigation'
import contact from './components/contact'

export default {
  components: {
    navigation,
    contact
  }
}
</script>

<style>
.navbar-spacer {
  display: block;
  width: 100%;
  height: 6.5rem;
  background: #fff;
  z-index: 99;
}
</style>
