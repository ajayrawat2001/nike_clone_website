import {
  Hero,
  Service,
  SpecialOffer,
  Subscribe,
  SuperQulaity,
  Footer,
  CustmerReview,
  PopularProduct,
} from "./sections/index";


export default function Home() {
  return (
    <main className="relative">
     
      <section className="xl:padding-1 wide:padding-r padding-b">
        {" "}
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQulaity />
      </section>
      <section className="padding-x py-10">
        <Service />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding">
        <CustmerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
}
