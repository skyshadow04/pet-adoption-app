import Jumbotron from "./homepage-parts/jumbotron";
import PetCategory from "./homepage-parts/pet-category";
import PetCards from "./homepage-parts/pet-cards";
import FAQ from "./homepage-parts/faq";


export default function Homepage() {
  return (
    <>
      <Jumbotron />
      <PetCategory />
      <PetCards />
      <FAQ />
    </>
  );
}