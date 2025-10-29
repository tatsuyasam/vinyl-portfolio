<script>
        export let project;
        import { goto } from '$app/navigation';
        import gsap from 'gsap';
        import { onMount } from 'svelte';

        let vinylRef;
        let isHovering = false;

        const handleClick = () => {
                goto(`/projects/${project.slug}`);
        };

        onMount(() => {
                const handleMouseEnter = () => {
                        isHovering = true;
                        gsap.to(vinylRef, {
                                scale: 1.1,
                                rotateZ: 15,
                                duration: 0.4,
                                ease: 'power2.out'
                        });
                };

                const handleMouseLeave = () => {
                        isHovering = false;
                        gsap.to(vinylRef, {
                                scale: 1,
                                rotateZ: 0,
                                duration: 0.4,
                                ease: 'power2.out'
                        });
                };

                vinylRef.addEventListener('mouseenter', handleMouseEnter);
                vinylRef.addEventListener('mouseleave', handleMouseLeave);

                return () => {
                        vinylRef.removeEventListener('mouseenter', handleMouseEnter);
                        vinylRef.removeEventListener('mouseleave', handleMouseLeave);
                };
        });
</script>

<button
        bind:this={vinylRef}
        on:click={handleClick}
        class="vinyl-container clickable relative"
>
        <div class="vinyl-disc">
                <div class="vinyl-center">
                        <div class="vinyl-hole"></div>
                        <div class="vinyl-label" style="background-image: url({project.image});">
                                <div class="vinyl-label-overlay">
                                        <div class="vinyl-title">
                                                <h3 class="text-xl font-light mb-1">{project.title}</h3>
                                                <p class="text-xs opacity-60">{project.category}</p>
                                        </div>
                                </div>
                        </div>
                </div>
                <div class="vinyl-grooves"></div>
        </div>
</button>

<style>
        .vinyl-container {
                width: 280px;
                height: 280px;
                perspective: 1000px;
                background: transparent;
                border: none;
                cursor: none;
                flex-shrink: 0;
        }

        .vinyl-disc {
                position: relative;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background: radial-gradient(circle at 30% 30%, #1a1a1a 0%, #000000 100%);
                box-shadow: 
                        0 0 20px rgba(0, 0, 0, 0.8),
                        inset 0 0 40px rgba(255, 255, 255, 0.03),
                        0 10px 40px rgba(0, 0, 0, 0.6);
                transition: all 0.4s ease;
        }

        .vinyl-grooves {
                position: absolute;
                inset: 0;
                border-radius: 50%;
                background: repeating-radial-gradient(
                        circle at center,
                        transparent 0px,
                        transparent 2px,
                        rgba(255, 255, 255, 0.02) 2px,
                        rgba(255, 255, 255, 0.02) 4px
                );
                pointer-events: none;
        }

        .vinyl-center {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 45%;
                height: 45%;
                border-radius: 50%;
                background: #0a0a0a;
                box-shadow: 
                        0 0 20px rgba(0, 0, 0, 0.9),
                        inset 0 0 15px rgba(255, 255, 255, 0.1);
                z-index: 2;
        }

        .vinyl-hole {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 20%;
                height: 20%;
                border-radius: 50%;
                background: #000;
                box-shadow: 
                        0 0 5px rgba(0, 0, 0, 0.8),
                        inset 0 0 8px rgba(0, 0, 0, 0.9);
                z-index: 4;
        }

        .vinyl-label {
                position: absolute;
                inset: 8%;
                border-radius: 50%;
                background-size: cover;
                background-position: center;
                overflow: hidden;
        }

        .vinyl-label-overlay {
                position: absolute;
                inset: 0;
                background: radial-gradient(circle, rgba(10, 10, 10, 0.3) 0%, rgba(10, 10, 10, 0.9) 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.3s ease;
        }

        .vinyl-container:hover .vinyl-label-overlay {
                opacity: 1;
        }

        .vinyl-title {
                text-align: center;
                color: #f5f5f5;
                padding: 1rem;
        }

        @media (max-width: 768px) {
                .vinyl-container {
                        width: 220px;
                        height: 220px;
                }
        }
</style>
