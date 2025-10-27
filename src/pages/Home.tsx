import ProductCard from "../pages/ProductCard";
import type { Product } from "../types/product";

type HomeProps = {
  products: Product[];
  cartIconRef: React.RefObject<HTMLDivElement | null>;
};

const sections: { title: string; category: string }[] = [
  { title: "Fruits & Vegetables 🥭", category: "Fruits & Vegetables" },
  { title: "Snacks 🍪", category: "Snacks" },
  { title: "Dairy 🧀", category: "Dairy" },
  { title: "Bakery 🥖", category: "Bakery" },
  { title: "Liquor 🍾", category: "Liquor" },
];

export default function Home({ products, cartIconRef }: HomeProps) {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center pt-10">
      <div className="w-full max-w-[90%] sm:max-w-[85%] px-3 sm:px-10">

       {/* Big Offer Banner */}
<div className="w-full sm:w-[80%] md:w-[60%] mx-auto mb-10 rounded-2xl overflow-hidden shadow-md">
  <img
    src="/bigoffer.jpeg"
    alt="Big Offer"
    className="w-full h-auto object-cover object-center"
    loading="lazy"
  />
</div>


        {/* 🧱 Offer Advertisement Grid */}
<div className="mb-16 space-y-8">
  {/* Row 1: Two same-height ads */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {/* Offer 1 */}
    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md flex items-center justify-center">
      <img
        src="/offer 1.jpg"
        alt="Offer 1"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Offer 2 */}
    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md flex items-center justify-center">
      <img
        src="/offer2.webp"
        alt="Offer 2"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Row 2: Center ad */}
  <div className="flex justify-center">
    <div className="aspect-[4/3] w-full sm:w-[80%] md:w-[65%] rounded-2xl overflow-hidden shadow-md flex items-center justify-center">
      <img
        src="/offer3.jpg"
        alt="Offer 3"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

        {/* 🛒 Product Sections */}
        {sections.map((section) => {
          const sectionProducts = products.filter(
            (product) => product.category === section.category
          );

          if (sectionProducts.length === 0) return null;

          return (
            <div key={section.category} className="mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-green-500 pl-3">
                {section.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
                {sectionProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    cartIconRef={cartIconRef}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
