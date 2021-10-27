<template>
  <div id="msgBox" class="card" style="z-index: 10">
    <h1>{{ Title }}</h1>
    <p>{{ messagecontent }}</p>
    <b-icon icon="" variant="success" v-if="succcess"></b-icon>
    <b-icon icon="" variant="success" v-if="!succcess"></b-icon>
  </div>
</template>

<script lang="ts" src="./msgBox.ts"></script>

<style scoped>

</style>