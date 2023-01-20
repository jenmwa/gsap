<script lang="ts">
	import { gsap } from "gsap";
	import MySVG from "./MySVG.vue";

	export default {
		components: {
			MySVG,
		},
		data() {
			return {};
		},
    methods: {
      startDrop() {
      gsap.to('#o', {
        staggering: 0.1,
        ease: 'bounce.out',
        y: 30,
      })
      },
      spin() {
        gsap.to('#globe', {
        rotation: 360,
        duration: 10,
        ease: 'linear',
        transformOrigin: 'center center',
        repeat: -1,
        repeatDelay:0,
      })
      },
      heart() {
        gsap.from('#globe', {
           ease: "elastic.out(1, 0.3)",
           scaleX:1.2, scaleY:1.3,
           y: 1,
           x: 1,
           transformOrigin: 'center center',
           repeat: -1
        })
      },
    },
		mounted() {
      //CREATE A TIMELINE INSTEAD?
		gsap.fromTo("#h", {delay: 0.5, opacity:0, x:-100, duration: 7, onComplete: this.spin }, {opacity:1, x:5});
    gsap.to("#e", {delay: 0.4, duration: 2.5, ease: "elastic.out(1, 0.3)",y: -5, x: 2});
    gsap.to("#l1", {delay: 0.55, duration: 3, ease: "elastic.out(1, 0.3)",y: -10, x: 3});
    gsap.to("#l2", {delay: 0.65, duration: 2.5, ease: "elastic.out(1, 0.3)",y: -10, x: 4 });
    gsap.to("#o", {delay: 0.75, duration: 2, ease: "elastic.out(1, 0.3)",y: -20, x: 2});
    gsap.to("#o", {delay: 1.2, rotation: 60, duration: 2, ease: "bounce.out", transformOrigin: 'center center', onComplete: this.startDrop,},);

    gsap.from('#globe', { scale: 0,  duration: 10, transformOrigin: 'center center', onComplete: this.heart});

    gsap.from('#W, #R, #L, #D', {delay: 12, opacity:0, duration: 1, });
    gsap.from('#grupp_world', 1, {delay: 12, fill: 'black', duration: 3.5,});
    gsap.to("#grupp_world", 1, {delay: 14, fill: '#cddc39', duration: 3.5 },);
    gsap.from("#grupp_world", 1, {delay: 15, fill: '#cddc39', duration: 3.5 },);
    gsap.fromTo("#L", 1, {delay: 16, fill: 'black', duration: 5 }, {delay: 17, fill: '#2196f3', duration: 3.5 },);
    gsap.to("#D", {delay: 13.5, duration: 2.5, rotate:15, transformOrigin: 'end end',});

		},
	};
</script>

<template>
  <div class="svg-container">
    <MySVG />
  </div>
</template>

<style scoped>
  .svg-container {
    width: 100%;
    margin-top: 50%;
  }
</style>
