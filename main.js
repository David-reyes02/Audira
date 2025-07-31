gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2,
  effects: true,
});

document.querySelector("#headphone").style.willChange = "transform";

ScrollTrigger.matchMedia({
  "(min-width: 991px)": function () {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#smooth-content",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      }
    });

    // Movimiento secuencial
    tl.to("#headphone", {
      y: "85vh",
      x: "18vw",
      width: "32vw",
      rotate: 90,
      ease: "power1.inOut",
    })
    .to("#headphone", {
      y: "255vh",
      x: "0",
      width: "25vw",
      rotate: 30,
      ease: "power1.inOut",
    })
    .to("#headphone", {
      y: "470vh",
      width: "20vw",
      rotate: 0,
      ease: "power1.inOut",
    })
    .to("#headphone", {
      y: "470vh",
      rotate: 0,
      ease: "power1.inOut",
    });

    // Animaciones por sección (pueden quedar)
    gsap.from('#section2 .content-wrapper', {
      scrollTrigger: {
        trigger: '#section2',
        start: '-50% bottom',
        end: 'center center',
        scrub: true,
      },
      y: '140%',
      ease: 'power1.inOut',
    });

    gsap.from('#section3 .heading', {
      scrollTrigger: {
        trigger: '#section3',
        start: 'top bottom',
        end: 'center bottom',
        scrub: true,
      },
      y: '140%',
      ease: 'power1.inOut',
    });

    gsap.from('#section4 img', {
      scrollTrigger: {
        trigger: '#section4',
        start: 'top bottom',
        end: 'center center',
        scrub: true,
      },
      width: 0,
      opacity: 0,
      ease: 'power1.inOut',
    });

    gsap.from('#section6 .content-wrapper', {
      scrollTrigger: {
        trigger: '#section6',
        start: 'top bottom',
        end: 'center center',
        scrub: true,
      },
      y: '40%',
      duration: 2,
      ease: 'power1.inOut',
    });

    // Texto animado
    let split = SplitText.create('#section1 .heading', {
      type: 'chars, words, lines',
      mask: 'lines'
    });

    gsap.from(split.chars, {
      yPercent: ()=> gsap.utils.random(-100, 100),
      rotation: ()=> gsap.utils.random(-30, 30),
      autoAlpha: 0,
      ease: 'back.out(1.5)',
      stagger: {
        amount: 0.5,
        from: 'random'
      },
      duration: 1.5
    });

    gsap.from('#headphone', {
      opacity: 0,
      scale: 0,
      duration: 1,
      delay: 1,
      ease: 'power1.inOut'
    })
  }
});
