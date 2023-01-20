<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <main>
    <p>GSAP SVG<br>animation project</p>
    <div class="logos">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <div class="svg-container">
      <HelloWorld/> 
    </div>
    <img class="github-icon" src="../public/github-svgrepo-com.svg"/>
    <p>@jenmwa</p>
  </main>

  <!-- CREATE A PLAY AGAIN BUTTON -->
  <!-- <button>IGEN</button> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

main {
  max-width: 400px;
  /* width: 100%; */
}
.logos {
  position: relative;
  top: -75px;
  scale: 0.2;
}

.svg-container {
  margin-left: 4rem;
  scale: 1.8;
  /* scale: 1.5;
   max-width: 100%; 
   margin-left: 100px;
   margin-right: auto; */
}

.github-icon {
max-width: 50px;
}
</style>
