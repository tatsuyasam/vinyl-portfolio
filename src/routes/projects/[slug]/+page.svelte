<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	const projects = {
		'cinematic-brand': {
			title: 'Cinematic Brand Experience',
			category: 'Web Design',
			description:
				'A luxurious brand website featuring fullscreen video backgrounds, parallax scrolling, and custom WebGL shaders for an immersive storytelling experience.',
			images: [
				'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
				'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&q=80',
				'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=1200&q=80'
			],
			year: '2024',
			role: 'Creative Direction, Development'
		},
		'luxury-ecommerce': {
			title: 'Luxury E-Commerce',
			category: 'Development',
			description:
				'High-end e-commerce platform with custom product configurators, smooth page transitions, and an elegant checkout experience.',
			images: [
				'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
				'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80',
				'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80'
			],
			year: '2024',
			role: 'Full Stack Development'
		},
		'immersive-portfolio': {
			title: 'Immersive Portfolio',
			category: 'Creative Direction',
			description:
				'Interactive portfolio showcasing creative work through innovative scroll-based animations and custom cursor interactions.',
			images: [
				'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&q=80',
				'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=1200&q=80',
				'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=1200&q=80'
			],
			year: '2023',
			role: 'Design, Development'
		},
		'motion-studio': {
			title: 'Motion Graphics Studio',
			category: 'Animation',
			description:
				'Website for a motion design studio featuring video showcases, dynamic typography, and GSAP-powered timeline animations.',
			images: [
				'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80',
				'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80',
				'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&q=80'
			],
			year: '2023',
			role: 'Animation, Development'
		}
	};

	$: slug = $page.params.slug;
	$: project = projects[slug];

	let containerRef;
	let imagesRef;

	onMount(() => {
		if (containerRef) {
			gsap.fromTo(
				containerRef,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.8, ease: 'power2.out' }
			);
		}

		if (imagesRef) {
			const images = imagesRef.querySelectorAll('.project-image');
			gsap.fromTo(
				images,
				{ opacity: 0, y: 100 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					stagger: 0.3,
					ease: 'power2.out',
					delay: 0.5
				}
			);
		}
	});

	const handleBack = () => {
		gsap.to(containerRef, {
			opacity: 0,
			duration: 0.5,
			onComplete: () => goto('/')
		});
	};
</script>

{#if project}
	<div bind:this={containerRef} class="min-h-screen bg-dark text-light">
		<button
			on:click={handleBack}
			class="fixed top-8 left-8 z-50 text-light/60 hover:text-light transition-colors clickable"
		>
			<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		<div class="pt-32 px-6 md:px-12 pb-24">
			<div class="max-w-6xl mx-auto">
				<div class="mb-16">
					<p class="text-light/40 uppercase tracking-widest text-sm mb-4">{project.category}</p>
					<h1 class="text-5xl md:text-7xl font-light mb-8 tracking-tight">{project.title}</h1>
					<div class="flex gap-12 text-light/60">
						<div>
							<p class="text-sm uppercase tracking-wider mb-2">Year</p>
							<p class="text-lg">{project.year}</p>
						</div>
						<div>
							<p class="text-sm uppercase tracking-wider mb-2">Role</p>
							<p class="text-lg">{project.role}</p>
						</div>
					</div>
				</div>

				<p class="text-xl md:text-2xl leading-relaxed text-light/70 mb-24 max-w-3xl">
					{project.description}
				</p>

				<div bind:this={imagesRef} class="space-y-12">
					{#each project.images as image}
						<div class="project-image w-full h-[80vh] overflow-hidden">
							<img
								src={image}
								alt={project.title}
								class="w-full h-full object-cover"
							/>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="min-h-screen bg-dark flex items-center justify-center">
		<p class="text-light/60">Project not found</p>
	</div>
{/if}
