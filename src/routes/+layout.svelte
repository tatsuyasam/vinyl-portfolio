<script>
        import '../app.css';
        import { onMount } from 'svelte';
        import Lenis from '@studio-freight/lenis';
        import MagneticCursor from '$lib/components/MagneticCursor.svelte';

        let lenisInstance;

        onMount(() => {
                lenisInstance = new Lenis({
                        duration: 0,
                        easing: (t) => t,
                        orientation: 'vertical',
                        smoothWheel: true,
                        wheelMultiplier: 1,
                        touchMultiplier: 2
                });

                function raf(time) {
                        lenisInstance.raf(time);
                        requestAnimationFrame(raf);
                }

                requestAnimationFrame(raf);

                return () => {
                        lenisInstance.destroy();
                };
        });
</script>

<div class="grain"></div>
<MagneticCursor />

<slot />
