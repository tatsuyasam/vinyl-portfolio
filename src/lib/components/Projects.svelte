<script>
        import { onMount } from 'svelte';
        import gsap from 'gsap';
        import ScrollTrigger from 'gsap/ScrollTrigger';
        import VinylRecord from './VinylRecord.svelte';

        if (typeof window !== 'undefined') {
                gsap.registerPlugin(ScrollTrigger);
        }

        let sectionRef;
        let vinylTrackRef;

        const projects = [
                {
                        id: 1,
                        title: 'Midnight Jazz',
                        category: 'Album · 2024',
                        slug: 'cinematic-brand',
                        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80'
                },
                {
                        id: 2,
                        title: 'Neon Dreams',
                        category: 'EP · 2024',
                        slug: 'luxury-ecommerce',
                        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80'
                },
                {
                        id: 3,
                        title: 'Cosmic Flow',
                        category: 'Single · 2023',
                        slug: 'immersive-portfolio',
                        image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&q=80'
                },
                {
                        id: 4,
                        title: 'Urban Pulse',
                        category: 'Album · 2023',
                        slug: 'motion-studio',
                        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80'
                },
                {
                        id: 5,
                        title: 'Velvet Sunrise',
                        category: 'EP · 2023',
                        slug: 'velvet-sunrise',
                        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80'
                },
                {
                        id: 6,
                        title: 'Electric Soul',
                        category: 'Single · 2024',
                        slug: 'electric-soul',
                        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80'
                }
        ];

        onMount(() => {
                if (!vinylTrackRef) return;

                gsap.to(vinylTrackRef, {
                        x: () => -(vinylTrackRef.scrollWidth - window.innerWidth) * 1.2,
                        y: () => (vinylTrackRef.scrollWidth - window.innerWidth) * 0.6,
                        ease: 'none',
                        scrollTrigger: {
                                trigger: sectionRef,
                                start: 'top top',
                                end: 'bottom bottom',
                                scrub: 0,
                                invalidateOnRefresh: true
                        }
                });

                const vinyls = vinylTrackRef.querySelectorAll('.vinyl-item');
                vinyls.forEach((vinyl, index) => {
                        gsap.fromTo(
                                vinyl,
                                { 
                                        opacity: 0, 
                                        rotateZ: -30,
                                        scale: 0.8
                                },
                                {
                                        opacity: 1,
                                        rotateZ: 0,
                                        scale: 1,
                                        duration: 0.8,
                                        ease: 'power2.out',
                                        scrollTrigger: {
                                                trigger: vinyl,
                                                start: 'top 90%',
                                                toggleActions: 'play none none reverse'
                                        },
                                        delay: index * 0.1
                                }
                        );
                });
        });
</script>

<section bind:this={sectionRef} class="min-h-[200vh] bg-dark py-32 overflow-hidden">
        <div class="px-6 md:px-12 mb-16">
                <h2 class="text-5xl md:text-7xl font-light tracking-tight">Music Collection</h2>
                <p class="text-light/60 text-lg mt-4">Scroll to browse the vinyl collection</p>
        </div>

        <div class="vinyl-track-container">
                <div bind:this={vinylTrackRef} class="vinyl-track">
                        {#each projects as project}
                                <div class="vinyl-item">
                                        <VinylRecord {project} />
                                </div>
                        {/each}
                </div>
        </div>
</section>

<style>
        .vinyl-track-container {
                position: relative;
                width: 100%;
                min-height: 400px;
                display: flex;
                align-items: center;
                overflow: visible;
        }

        .vinyl-track {
                display: flex;
                gap: 4rem;
                padding: 2rem;
                will-change: transform;
        }

        .vinyl-item {
                flex-shrink: 0;
        }
</style>
