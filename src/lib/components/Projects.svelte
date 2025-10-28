<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';
	import ProjectCard from './ProjectCard.svelte';

	gsap.registerPlugin(ScrollTrigger);

	let sectionRef;

	const projects = [
		{
			id: 1,
			title: 'Cinematic Brand Experience',
			category: 'Web Design',
			slug: 'cinematic-brand',
			image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
			angle: -2
		},
		{
			id: 2,
			title: 'Luxury E-Commerce',
			category: 'Development',
			slug: 'luxury-ecommerce',
			image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
			angle: 1
		},
		{
			id: 3,
			title: 'Immersive Portfolio',
			category: 'Creative Direction',
			slug: 'immersive-portfolio',
			image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80',
			angle: -1.5
		},
		{
			id: 4,
			title: 'Motion Graphics Studio',
			category: 'Animation',
			slug: 'motion-studio',
			image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
			angle: 2
		}
	];

	onMount(() => {
		const cards = sectionRef.querySelectorAll('.project-card');
		cards.forEach((card, index) => {
			gsap.fromTo(
				card,
				{ opacity: 0, y: 100, rotateX: -20 },
				{
					opacity: 1,
					y: 0,
					rotateX: 0,
					duration: 1.2,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: card,
						start: 'top 80%',
						toggleActions: 'play none none reverse'
					},
					delay: index * 0.2
				}
			);
		});
	});
</script>

<section bind:this={sectionRef} class="min-h-screen bg-dark py-32 px-6 md:px-12">
	<div class="max-w-7xl mx-auto">
		<h2 class="text-5xl md:text-7xl font-light mb-24 tracking-tight">Selected Work</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
			{#each projects as project}
				<div class="project-card">
					<ProjectCard {project} />
				</div>
			{/each}
		</div>
	</div>
</section>
