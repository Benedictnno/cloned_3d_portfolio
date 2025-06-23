import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <a href="https://sparrowgadgets.netlify.app/" target="blank">
              <div className="image-wrapper">
                <img
                  src="/images/sparrow_gadgets.png"
                  alt="Ryde App Interface"
                />
              </div>
              <div className="text-content">
                <h2>Sparrow Networkx</h2>
                <p className="text-white-50 md:text-xl">
                  An E-Commerce app designed to provide a seamless shopping
                  experience, allowing users to browse, select, and purchase a
                  wide range of electronics effortlessly. built with React js,
                  mongo db,express js & TailwindCSS for a fast, user-friendly
                  experience. And has an admin panel
                </p>
              </div>
            </a>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <a href="https://delicacy-hub.netlify.app/" target="blank">
              <div className="project" ref={libraryRef}>
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img src="/images/food_app.png" alt="Delicacy Hub" />
                </div>
                <h2> Delicacy Hub </h2>
                <p className="text-white-50 md:text-xl">
                  is your go-to platform for all things food and drink.
                </p>
              </div>
            </a>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="https://delicacy-hub.netlify.app/" alt="QP2P" />
              </div>
              <h2>QP2P- An on project</h2>
              <p className="text-white-50 md:text-xl">
                QP2P is a platform that offers a seamless, secure, and automated
                environment for buyers and sellers to trade cryptocurrencies
                without intermediaries, giving you a truly decentralized and
                hassle-free experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
