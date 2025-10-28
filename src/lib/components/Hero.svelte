<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let heroRef;
	let titleRef;
	let scrollCueRef;

	onMount(() => {
		gsap.fromTo(
			titleRef,
			{ opacity: 0, scale: 1.1 },
			{ opacity: 1, scale: 1, duration: 2, ease: 'power2.out' }
		);

		gsap.fromTo(
			scrollCueRef,
			{ opacity: 0, y: -20 },
			{ opacity: 1, y: 0, duration: 1.5, delay: 1.5, ease: 'power2.out' }
		);

		gsap.to(scrollCueRef, {
			y: 10,
			duration: 1.5,
			repeat: -1,
			yoyo: true,
			ease: 'power1.inOut',
			delay: 2
		});
	});
</script>

<section
	bind:this={heroRef}
	class="relative flex items-center justify-center min-h-screen bg-dark overflow-hidden"
>
	<div class="text-center z-10">
		<h1
			bind:this={titleRef}
			class="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-8 opacity-0"
		>
			Your Name
		</h1>
		<p class="text-lg md:text-xl text-light/60 tracking-widest uppercase">
			Creative Developer & Designer
		</p>
	</div>

	<div
		bind:this={scrollCueRef}
		class="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0"
	>
		<span class="text-sm tracking-widest uppercase mb-4 text-light/40">Scroll</span>
		<svg
			class="w-6 h-12 text-light/40"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 14l-7 7m0 0l-7-7" />
		</svg>
	</div>
</section>
