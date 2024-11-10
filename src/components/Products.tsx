"use client"
import './products.css'
import Image from 'next/image'

interface Product {
  title: string
  description: string
  image: string
  tech: string[]
  link: string
}

const products: Product[] = [
  {
    title: "Tires",
    description: "High-performance tires for durability, safety, and smooth driving experience.",
    image: "/tire.jpg",
    tech: ["Transportation", "Wheels", "Offroading", "Leather"],
    link: "https://maxxis.pk/"
  },
  {
    title: "Suspensions",
    description: "Suspension systems enhance comfort, control, and stability for smooth driving.",
    image: "/suspension.jpg",
    tech: ["Cars", "Trucks", "Sedans", "Offroad"],
    link: "https://autoprotoway.com/car-suspension-parts/"
  },
  {
    title: "Headlights",
    description: "Bright, durable headlights improve visibility and safety during nighttime driving.",
    image: "/headlight.jpg",
    tech: ["Car headlights", "Night Accessories", "Lights", "Sedans"],
    link: "https://www.amazon.com/OBNDVU-2007-2014-Headlight-D1S-Headlights/dp/B0BTBY6RTG"
  }
]

export default function Products() {
  return (
    <section id="products" className="products-section">
      <div className="products-container">
        <h2 className="products-heading">Our Products</h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="product-card"
            >
              <div className="product-image">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="product-img"
                />
              </div>
              <div className="product-details">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-tech">
                  {product.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="product-tech-item"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={product.link}
                  className="product-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Product →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
