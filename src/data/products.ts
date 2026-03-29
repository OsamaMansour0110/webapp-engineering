export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  benefits?: string[];
  specs?: string[]; 
  applications?: string[];
  categoryPath: { label: string; href?: string }[];
}

export interface CategoryNode {
  id: string;
  name: string;
  image: string;
  bannerImage?: string;
  children?: { [key: string]: CategoryNode };
  products?: Product[];
}

export const productsData: { [key: string]: CategoryNode } = {
  "ups": {
    id: "ups",
    name: "UPS",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
    children: {
      "borri": {
        id: "borri",
        name: "BORRI",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800",
        children: {
          "industrial-ups": {
            id: "industrial-ups",
            name: "Industrial UPS",
            image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
            products: [
              {
                id: "e2001",
                name: "E2001",
                image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
                description: "The E2001 series is a high-performance industrial UPS designed to satisfy the most stringent requirements of power protection in harsh environments.",
                benefits: ["High reliability", "Customizable IP", "Galvanic isolation"],
                applications: ["Oil & Gas", "Power Plants"],
                categoryPath: [
                  { label: "Home", href: "/power-solutions" },
                  { label: "Products", href: "/power-solutions/products" },
                  { label: "UPS", href: "/power-solutions/products/ups" },
                  { label: "BORRI", href: "/power-solutions/products/ups/borri" },
                  { label: "Industrial UPS" }
                ]
              }
            ]
          }
        }
      }
    }
  },
  "generators": {
    id: "generators",
    name: "GENERATORS",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    children: {
      "elcos": {
        id: "elcos",
        name: "ELCOS",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
        children: {
          "3000-3600rpm": {
            id: "3000-3600rpm",
            name: "Generators (3000-3600 rpm)",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
            products: [
              {
                id: "echo-portable",
                name: "Echo Portable",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
                description: "Generating sets designed to offer portable power solutions. The ECHO series generators offer a wide range of uses and engine brands.",
                benefits: ["Compact design", "Portable and easy to use", "Available in various engine brands"],
                applications: ["Construction sites", "Outdoor events", "Emergency home backup"],
                categoryPath: [
                  { label: "Home", href: "/power-solutions" },
                  { label: "Products", href: "/power-solutions/products" },
                  { label: "GENERATORS", href: "/power-solutions/products/generators" },
                  { label: "ELCOS", href: "/power-solutions/products/generators/elcos" },
                  { label: "Generators (3000-3600 rpm)" }
                ]
              },
              {
                id: "zip-super-silent",
                name: "Zip Super Silent",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
                description: "The ZIP series generators offer a wide range of uses. They are equipped with Start/stop emergency button, Residential muffler, Magneto-thermal breaker, and a control panel on board.",
                benefits: ["Generating sets are designed to offer super silent and portable power solutions.", "Power range: 3 - 13 kVA", "Low oil shutdown system"],
                applications: ["Domestic use", "Shops", "Emergency to the main", "Private Houses"],
                categoryPath: [
                  { label: "Home", href: "/power-solutions" },
                  { label: "Products", href: "/power-solutions/products" },
                  { label: "GENERATORS", href: "/power-solutions/products/generators" },
                  { label: "ELCOS", href: "/power-solutions/products/generators/elcos" },
                  { label: "Generators (3000-3600 rpm)" }
                ]
              }
            ]
          }
        }
      }
    }
  },
  "batteries": {
    id: "batteries",
    name: "BATTERIES",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2070&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d",
    children: {
      "fiamm": {
        id: "fiamm",
        name: "FIAMM",
        image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=800",
        children: {
          "gel-vrla": {
            id: "gel-vrla",
            name: "GEL VRLA",
            image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=800",
            products: [
              {
                id: "smg",
                name: "SMG",
                image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=800",
                description: "OPzV Maintenance-Free GEL cell battery specifically developed for cyclic applications.",
                benefits: ["18 years design life", "Deep discharge recovery"],
                applications: ["Renewable Energy"],
                categoryPath: [{ label: "BATTERIES", href: "/power-solutions/products/batteries" }, { label: "FIAMM", href: "/power-solutions/products/batteries/fiamm" }, { label: "GEL VRLA" }]
              }
            ]
          }
        }
      }
    }
  }
};

export const findNode = (slug: string, nodes: { [key: string]: CategoryNode } = productsData): CategoryNode | Product | null => {
  for (const key in nodes) {
    if (key === slug) return nodes[key];
    if (nodes[key].children) {
      const found = findNode(slug, nodes[key].children);
      if (found) return found;
    }
    if (nodes[key].products) {
      const foundProduct = nodes[key].products?.find(p => p.id === slug);
      if (foundProduct) return foundProduct;
    }
  }
  return null;
};
