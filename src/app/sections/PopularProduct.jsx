import { PopularProductsCard } from "../componets";
import { products } from "../../../constants";
const PopularProduct = () => {
  return (
    <>
      <section id="products" className="max-container max-sm-mt-12">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-palanquin font-bold">
            <span className="text-coral-red">Popular</span> Products
          </h2>
          <p className="g:max-w-lg mt-2 font-montserrat text-slate-gray">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur ab tenetur odit quos consequuntur vero inventore quod
            amet officiis, officia non voluptates at temporibus illo. Pariatur
            nobis saepe repellendus delectus.
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {products.map((item) => (
            <PopularProductsCard key={item.name} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default PopularProduct
