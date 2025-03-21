import { CarouselRoles } from "./c-carousel-roles";
import { CarouselTechs } from "./c-carousel-techs";
import { HomeAboutUs } from "./s-about-us";
import { HomeContact } from "./s-contact";
import { HomeHero } from "./s-home";
import { HomeProjects } from "./s-projects";
import { HomeServices } from "./s-services";
import { HomeSolutions } from "./s-solutions";
import { HomeTestimonials } from "./s-testimonials";

export default function Page() {
  return (
    <>
    <HomeHero />
    <CarouselTechs />
    <HomeServices />
    <HomeSolutions />
    <HomeProjects />
    <HomeTestimonials />
    <HomeAboutUs />
    <HomeContact />
    <CarouselRoles />
    </>
  );
}
