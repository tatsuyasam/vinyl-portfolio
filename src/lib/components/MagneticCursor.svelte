<script>
        import { onMount } from 'svelte';
        import gsap from 'gsap';

        let cursor;
        let isHovering = false;

        onMount(() => {
                const handleMouseMove = (e) => {
                        gsap.to(cursor, {
                                duration: 0.3,
                                x: e.clientX,
                                y: e.clientY,
                                ease: 'power2.out'
                        });
                };

                const handleMouseEnter = () => {
                        isHovering = true;
                        if (cursor) {
                                cursor.classList.add('hover');
                        }
                };

                const handleMouseLeave = () => {
                        isHovering = false;
                        if (cursor) {
                                cursor.classList.remove('hover');
                        }
                };

                document.addEventListener('mousemove', handleMouseMove);

                const interactiveElements = document.querySelectorAll('a, button, .clickable');
                interactiveElements.forEach((el) => {
                        el.addEventListener('mouseenter', handleMouseEnter);
                        el.addEventListener('mouseleave', handleMouseLeave);
                });

                const attachedElements = new Set();
                interactiveElements.forEach((el) => attachedElements.add(el));

                const observer = new MutationObserver(() => {
                        const newInteractiveElements = document.querySelectorAll('a, button, .clickable');
                        newInteractiveElements.forEach((el) => {
                                if (!attachedElements.has(el)) {
                                        el.addEventListener('mouseenter', handleMouseEnter);
                                        el.addEventListener('mouseleave', handleMouseLeave);
                                        attachedElements.add(el);
                                }
                        });
                });

                observer.observe(document.body, { childList: true, subtree: true });

                return () => {
                        document.removeEventListener('mousemove', handleMouseMove);
                        interactiveElements.forEach((el) => {
                                el.removeEventListener('mouseenter', handleMouseEnter);
                                el.removeEventListener('mouseleave', handleMouseLeave);
                        });
                        observer.disconnect();
                };
        });
</script>

<div bind:this={cursor} class="magnetic-cursor"></div>

<style>
        @media (max-width: 768px) {
                .magnetic-cursor {
                        display: none;
                }
        }
</style>
