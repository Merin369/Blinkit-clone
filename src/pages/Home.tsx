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
        {/* 🏷 Big Banner */}
        <div className="mb-12">
          <div className="w-full overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/bigoffer.jpg"
              alt="Big Offer"
              className="w-full h-[90vh] object-cover rounded-2xl"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* 🧱 Offer Advertisement Grid */}
        <div className="mb-16">
          {/* First Row - 2 Ads */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="overflow-hidden rounded-2xl shadow-md h-[90vh]">
              <img
                src="/offer 1.jpg"
                alt="Offer 1"
                className="w-full h-full object-cover"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-md h-[90vh]">
              <img
                src="/offer2.webp"
                alt="Offer 2"
                className="w-full h-full object-cover"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Second Row - Single Ad */}
          <div className="flex justify-center">
            <div className="overflow-hidden rounded-2xl shadow-md h-[90vh] w-full sm:w-[70%] md:w-[60%]">
              <img
                src="/offer3.jpg"
                alt="Offer 3"
                className="w-full h-full object-cover"
                style={{ objectFit: "cover" }}
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
