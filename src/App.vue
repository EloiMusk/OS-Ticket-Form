<template>
  <div id="app">
    <main-page></main-page>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainPage from './components/MainPage/MainPage.vue';

@Component({
  components: {
    MainPage
  },
})
export default class App extends Vue {

}
</script>

<style>
</style>
