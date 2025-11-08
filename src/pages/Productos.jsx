import ProductCard from "../components/ProductCard";

export default function Productos() {
  return (
    <section className="products_page">
      <div className="products_title_section">
        <h2 className="productos_title">Nuestros Productos</h2>
      </div>
    <div className="skewed"></div>

      <ProductCard />
    </section>
  );
}
