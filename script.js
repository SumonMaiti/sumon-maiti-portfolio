// This script contains additional JavaScript for animations.

document.addEventListener("DOMContentLoaded", function() {
    // Register the ScrollTrigger plugin for the new animations.
    gsap.registerPlugin(ScrollTrigger);

    // This animation reveals elements with the class `.gsap-reveal` as they scroll into view.
    // It's a subtle effect that fades the element in and moves it up slightly.
    gsap.utils.toArray(".gsap-reveal").forEach(element => {
        gsap.from(element, {
            opacity: 0, // Start with zero opacity (hidden)
            y: 50, // Start 50 pixels below its final position
            duration: 0.8, // The animation will take 0.8 seconds to complete
            ease: "power2.out", // A smooth easing function
            scrollTrigger: {
                trigger: element, // The animation is triggered by this element
                start: "top 85%", // Starts when the top of the element is 85% down the viewport
                toggleActions: "play none none none" // Plays the animation once when triggered
            }
        });
    });
});
