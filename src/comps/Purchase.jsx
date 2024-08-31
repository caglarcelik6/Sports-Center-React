import React from 'react';

const products = [
  {
    id: 1,
    image: 'Resimler/purchase1.jpg',
    name: 'Kettlebell / 5kg',
    originalPrice: '89,89$',
    salePrice: '80,89$',
  },
  {
    id: 2,
    image: 'Resimler/purchase2.jpg',
    name: 'Kettlebell / 5kg',
    originalPrice: '89,89$',
    salePrice: '80,89$',
  },
  {
    id: 3,
    image: 'Resimler/purchase3.jpg',
    name: 'Kettlebell / 5kg',
    originalPrice: '89,89$',
    salePrice: '80,89$',
  },
  {
    id: 4,
    image: 'Resimler/purchase4.jpg',
    name: 'Kettlebell / 5kg',
    originalPrice: '89,89$',
    salePrice: '80,89$',
  },
];

const PurchaseSection = () => {
  return (
    <section className="purchase-section">
      <div className="trainers">
        <h2>PURCHASE FROM US</h2>
        <p className="orangeline"></p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nisi non nemo. <br />
          Maiores nisi non nemo.
        </p>
      </div>

      <div className="image3">
        {products.map((product) => (
          <div key={product.id} className="purchase-box">
            <img src={product.image} height="250" width="200" alt={product.name} />
            <h2>{product.name}</h2>
            <p>
              <span>{product.originalPrice}</span> - {product.salePrice}
            </p>
            <p>
              <i className="fa-solid fa-cart-shopping"></i>Add to Cart
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PurchaseSection;
