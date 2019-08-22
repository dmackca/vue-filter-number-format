<template>
  <div id="app">
      <h1>testing</h1>
      <p>{{ 123456 | numFormat }}</p>
      <p>{{ 123456 | numFormat('0.000') }}</p>
      <p>{{ 123456 | numFormat('0,0.0[0000]') }}</p>
      <p>{{ 69696969 | numFormat }} -> "69,696,969"</p>
      <p>{{ 420 | numFormat('0.000') }} -> "420.000"</p>
      <p>{{ 666 | numFormat('0,0o') }} -> "666th"</p>
      <p><input type="text" v-model="testVal"> -> "{{ testVal | numFormat }}"</p>
  </div>
</template>

<script>
export default {
    name: 'app',
    data: () => ({
      testVal: 10304,
    }),
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
