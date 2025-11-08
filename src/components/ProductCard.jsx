import products from "../assets/productos";


const ProductCard = () => {
  return (
      <div className="product_card_container">
      {products.map((product, i) => {
        const Icon = product.icon;
        return (
          <div className={`animate__animated animate__fadeInUp animate__delay-${0.4}s product_card`} key={i}>
          <div className="product_card_icon_container">
            <Icon className="product_card_icon" />
          </div>
            <div className="product_card_title_container">
              <h2 className="product_title">{product.producto}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
