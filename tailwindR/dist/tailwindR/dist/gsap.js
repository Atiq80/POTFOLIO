
gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".lollz",
    start: "55% 50%",
    end: "400% 50%",
    markers: true,
    scrub: true,
    pin: true,
    
  }
});

tl.to(".lollz", {
  scale: 3,
  duration: 200,
  ease: "power1.inOut",
  delay: 3
}, 'rc');

tl.to("#Hero", {
  duration: 200,
  y: 18,
  ease: "power4",
  delay: 3
}, 'rc');

tl.to(".zamp", {
  scale: 1,
  duration: 200,
  ease: "power4",
  transition: "all",
  delay: 3

}, 'rc');

tl.to(".em1", {
  ease: "power4",
  opacity: 0,
  duration: 200, // Increased duration to 200 milliseconds (5 seconds) for slower opacity change
}, 'rc');

tl.to(".em2", {
  ease: "power4",
  opacity: 0,
  duration: 200, // Increased duration to 200 milliseconds (5 seconds) for slower opacity change
}, 'rc');

tl.to(".em3", {
  ease: "power4",
  opacity: 0,
  duration: 200, // Increased duration to 200 milliseconds (5 seconds) for slower opacity change
}, 'rc');

tl.to(".em4", {
  ease: "power4",
  opacity: 0,
  duration: 200, // Increased duration to 200 milliseconds (5 seconds) for slower opacity change
}, 'rc');


