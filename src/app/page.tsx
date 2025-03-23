"use client";
import { ButtonTop } from "./c-button-fixed-for-top";
import { CarouselRoles } from "./c-carousel-roles";
import { CarouselTechs } from "./c-carousel-techs";
import { HomeAboutUs } from "./s-about-us";
import { HomeContact } from "./s-contact";
import { HomeHero } from "./s-home";
import { HomeProjects } from "./s-projects";
import { HomeServices } from "./s-services";
import { HomeSolutions } from "./s-solutions";
import { HomeTestimonials } from "./s-testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Page() {

  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false, 
    });
  }, [])

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
    <ButtonTop />
    </>
  );
}
