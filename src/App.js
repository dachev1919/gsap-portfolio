import Hero from "./common/components/hero/Hero";
import Portfolio from "./common/components/portfolio/Portfolio";
import gsap from "gsap-trial/dist/gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { useEffect } from "react";

function App() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useEffect(() => {
    if (ScrollTrigger.isTouch !== 1) {
      ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true,
      });

      gsap.fromTo(
        '.hero-section',
        {opacity: 1},
        {
          opacity: 0,
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '820',
            scrub: true,
          }
        }
      );

      let itemsLeft = gsap.utils.toArray('.portfolio__gallery-left .portfolio__gallery-item');

      itemsLeft.forEach(item => {
        gsap.fromTo(
          item,
          {x: -150, opacity: 0},
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: item,
              scrub: true
            }
          }
        )
      });

      let itemsRight = gsap.utils.toArray('.portfolio__gallery-right .portfolio__gallery-item');

      itemsRight.forEach(item => {
        gsap.fromTo(
          item,
          {x: 150, opacity: 0},
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: item,
              scrub: true
            }
          }
        )
      })
    }
  });

  return (
    <div className='wrapper'>
      <div className="content">
        <Hero />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
