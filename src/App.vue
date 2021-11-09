<template>
  <div class="evtbox">
    <button @click="increment">store.mutations.increment</button>
    <p>store.state.count : {{count}}</p>
  </div>
  <!-- <div>
    <h1>라우터에용</h1>
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
  </div> -->
</template>

<script>
// helper
import { mapState, mapMutations  } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState(['count']),
  },
  methods: {
    ...mapMutations(['increment']),
  },
  components: {
    
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.evtbox {
  width: 500px;
  border: 1px solid #ccc;
  margin: 30px auto 100px;
  padding: 30px 0;
}
</style>
