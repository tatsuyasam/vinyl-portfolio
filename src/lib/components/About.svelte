<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	let sectionRef;
	let textRef;

	onMount(() => {
		gsap.fromTo(
			textRef,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1.5,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: sectionRef,
					start: 'top 60%',
					toggleActions: 'play none none reverse'
				}
			}
		);
	});
</script>

<section bind:this={sectionRef} class="min-h-screen bg-dark flex items-center justify-center px-6 md:px-12">
	<div class="max-w-4xl mx-auto" bind:this={textRef}>
		<h2 class="text-5xl md:text-7xl font-light mb-12 tracking-tight">About</h2>
		<p class="text-xl md:text-2xl leading-relaxed text-light/70 mb-8">
			I'm a creative developer and designer crafting cinematic digital experiences at the
			intersection of art and technology.
		</p>
		<p class="text-lg md:text-xl leading-relaxed text-light/50">
			With a passion for minimalism, motion, and detail, I build immersive websites and
			interactive installations that push the boundaries of web design. Every project is an
			opportunity to create something memorable.
		</p>
	</div>
</section>
