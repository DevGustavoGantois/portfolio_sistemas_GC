import { CarouselTechs } from "./c-carousel-techs";
import { HomeContact } from "./s-contact";
import { HomeHero } from "./s-home";
import { HomeServices } from "./s-services";
import { HomeSolutions } from "./s-solutions";

export default function Page() {
  return (
    <>
    <HomeHero />
    <CarouselTechs />
    <HomeServices />
    <HomeSolutions />
    <HomeContact />
    </>
  );
}
