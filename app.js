const tl  = gsap.timeline({defaults: {ease: "power3.out", duration: 0.75}});

tl.fromTo(".hero-img", {scale: 1.8, }, {scale: 1, delay:0.35, duration: 2.5, ease: "elastic.out(1.5, 1)" })
tl.fromTo(".hero-img", { borderRadius: '0rem'}, { borderRadius: '1.2rem'} , "<30%")


tl.fromTo(".cta1", {x: 110, opacity: 0}, {x: 0, opacity: 1,}, "<20%" )
tl.fromTo(".cta2", {y: 50, opacity: 0}, {y: 0, opacity: 1, }, "<20%" )
tl.fromTo(".cta3", {x: -100, opacity: 0}, {x: 0, opacity: 1, },"<20%" )
tl.fromTo(".cta4", {x: 110, opacity: 0}, {x: 0, opacity: 1, }, "<20%" )
tl.fromTo(".cta5", {y: 50, opacity: 0}, {y: 0, opacity: 1, }, "<20%" )
tl.fromTo(".cta6", {x: -100, opacity: 0}, {x: 0, opacity: 1, },"<20%" )

tl.fromTo(".cta-btn", {y: 50, opacity: 0}, {y: 0, opacity: 1, }, "<"  )


const logo = document.querySelector(".logo");

const letters = logo.textContent.split("");
logo.textContent = "";

letters.forEach((letter)=> {
    logo.innerHTML += "<span class='letter'>" + letter + "</span>";
});

gsap.set(".letter", {display: "inline-block",})
gsap.fromTo(".letter", {y: "100%", opacity:0}, {y: 0,opacity: 1, delay: 2, stagger: 0.05,ease: "back.out(1.7)" })




