<template>
  <div id="app">
      <h1>testing</h1>
      <p>{{ 123456 | numFormat}}</p>
      <p>{{ 123456 | numFormat('0.000')}}</p>
      <p>{{ 123456 | numFormat('0,0.0[0000]')}}</p>
  </div>
</template>

<script>


export default {
    name: 'app',
}
</script>

<style>
#app {
  font-family: sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
