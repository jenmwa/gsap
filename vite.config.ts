import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
// between //, your name of the the repo... ex github.com/jenmwa/todoList , write /todoList/
export default defineConfig({
  plugins: [vue()],
  base: '/gsap/',
  define: {
    'process.env': {},
  },
});