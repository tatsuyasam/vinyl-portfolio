<script>
        import { onMount } from 'svelte';
        import gsap from 'gsap';
        import ScrollTrigger from 'gsap/ScrollTrigger';

        if (typeof window !== 'undefined') {
                gsap.registerPlugin(ScrollTrigger);
        }

        let sectionRef;
        let linksRef;

        onMount(() => {
                gsap.fromTo(
                        linksRef.children,
                        { opacity: 0, y: 30 },
                        {
                                opacity: 1,
                                y: 0,
                                duration: 1,
                                stagger: 0.2,
                                ease: 'power2.out',
                                scrollTrigger: {
                                        trigger: sectionRef,
                                        start: 'top 70%',
                                        toggleActions: 'play none none reverse'
                                }
                        }
                );
        });
</script>

<section bind:this={sectionRef} class="min-h-screen bg-dark flex items-center justify-center px-6 md:px-12">
        <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-5xl md:text-7xl font-light mb-16 tracking-tight">Get in Touch</h2>

                <div bind:this={linksRef} class="space-y-8">
                        <a
                                href="mailto:hello@yourname.com"
                                class="block text-3xl md:text-5xl font-light hover-link clickable group"
                        >
                                <span class="inline-block relative">
                                        hello@yourname.com
                                        <span
                                                class="absolute bottom-0 left-0 w-0 h-[1px] bg-light transition-all duration-500 group-hover:w-full"
                                        ></span>
                                </span>
                        </a>

                        <a
                                href="https://instagram.com/yourname"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="block text-2xl md:text-4xl font-light hover-link clickable group text-light/60"
                        >
                                <span class="inline-block relative">
                                        Instagram
                                        <span
                                                class="absolute bottom-0 left-0 w-0 h-[1px] bg-light/60 transition-all duration-500 group-hover:w-full"
                                        ></span>
                                </span>
                        </a>

                        <a
                                href="https://linkedin.com/in/yourname"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="block text-2xl md:text-4xl font-light hover-link clickable group text-light/60"
                        >
                                <span class="inline-block relative">
                                        LinkedIn
                                        <span
                                                class="absolute bottom-0 left-0 w-0 h-[1px] bg-light/60 transition-all duration-500 group-hover:w-full"
                                        ></span>
                                </span>
                        </a>
                </div>
        </div>
</section>
