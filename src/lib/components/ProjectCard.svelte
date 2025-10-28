<script>
	export let project;
	import { goto } from '$app/navigation';
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let cardRef;
	let overlayRef;

	const handleClick = () => {
		goto(`/projects/${project.slug}`);
	};

	onMount(() => {
		const handleMouseEnter = () => {
			gsap.to(cardRef, {
				scale: 1.05,
				duration: 0.4,
				ease: 'power2.out'
			});
			gsap.to(overlayRef, {
				opacity: 1,
				duration: 0.3
			});
		};

		const handleMouseLeave = () => {
			gsap.to(cardRef, {
				scale: 1,
				duration: 0.4,
				ease: 'power2.out'
			});
			gsap.to(overlayRef, {
				opacity: 0,
				duration: 0.3
			});
		};

		cardRef.addEventListener('mouseenter', handleMouseEnter);
		cardRef.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			cardRef.removeEventListener('mouseenter', handleMouseEnter);
			cardRef.removeEventListener('mouseleave', handleMouseLeave);
		};
	});
</script>

<button
	bind:this={cardRef}
	on:click={handleClick}
	class="relative w-full h-[70vh] overflow-hidden clickable bg-dark-light"
	style="transform: rotate({project.angle}deg);"
>
	<div
		class="absolute inset-0 bg-gradient-to-br from-light/10 to-transparent"
		style="background-image: url({project.image});"
	>
		<div class="absolute inset-0 bg-dark/40"></div>
	</div>

	<div
		bind:this={overlayRef}
		class="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 flex items-end p-12"
	>
		<div class="text-left">
			<h3 class="text-4xl md:text-5xl font-light mb-4">{project.title}</h3>
			<p class="text-light/60 text-lg">{project.category}</p>
		</div>
	</div>
</button>
