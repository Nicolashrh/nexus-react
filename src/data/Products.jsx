const products = [
  // ==================== CATEGORÍA 1: ACCIÓN / AVENTURA (4 juegos) ====================
  {
    id: 1,
    name: "RE4 REMAKE",
    description: "Actualmente lo tenemos disponible para PC/PS/XBOX",
    price: 25000,
    category: "Acción",
    image: "/images/RE4.webp",
    fallback: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600",
  },
  {
    id: 2,
    name: "ASSASSINS CREED SHADOWS",
    description: "Actualmente lo tenemos disponible para PC",
    price: 25000,
    category: "Acción",
    image: "/images/ASSCRES.webp",
    fallback: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600",
  },
  {
    id: 3,
    name: "BATMAN: ARKHAM KNIGHT",
    description: "Actualmente lo tenemos disponible para PC",
    price: 25000,
    category: "Acción",
    image: "/images/bats-WEB.webp",
    fallback: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600",
  },
  {
    id: 4,
    name: "MARVEL SPIDER-MAN",
    description: "Actualmente lo tenemos disponible para PC/PS",
    price: 25000,
    category: "Acción",
    image: "/images/spider.webp",
    fallback:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600",
  },

  // ==================== CATEGORÍA 2: SOULSLIKE / RPG (4 juegos) ====================
  {
    id: 5,
    name: "ELDEN RING",
    description: "Actualmente lo tenemos disponible para PC/PS",
    price: 25000,
    category: "Soulslike",
    image: "/images/ELDEN-WEB.webp",
    fallback: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600",
  },
  {
    id: 6,
    name: "BLOODBORNE",
    description: "Actualmente lo tenemos disponible para PS",
    price: 25000,
    category: "Soulslike",
    image: "/images/BLOOD-WEB.webp",
    fallback: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600",
  },
  {
    id: 7,
    name: "HOLLOW KNIGHT SILKSONG",
    description: "Actualmente lo tenemos disponible para PC/PS/SWITCH",
    price: 25000,
    category: "Soulslike",
    image: "/images/SILK-WEB.webp",
    fallback:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600",
  },
  {
    id: 8,
    name: "PRAGMATA",
    description: "Actualmente lo tenemos disponible para PC/PS",
    price: 25000,
    category: "Soulslike",
    image: "/images/Pragmata.webp",
    fallback:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600",
  },

  // ==================== CATEGORÍA 3: TERROR / SUPERVIVENCIA (4 juegos) ====================
  {
    id: 9,
    name: "SILENT HILL 2",
    description: "Actualmente lo tenemos disponible para PC/PS",
    price: 25000,
    category: "Terror",
    image: "/images/Silent hill.webp",
    fallback:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600",
  },
  {
    id: 10,
    name: "THE LAST OF US",
    description: "Actualmente lo tenemos disponible para PC",
    price: 25000,
    category: "Terror",
    image: "/images/TLOU-WEB.webp",
    fallback:
      "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=600",
  },
  {
    id: 11,
    name: "DETROIT: BECOME HUMAN",
    description: "Actualmente lo tenemos disponible para PC/PS",
    price: 25000,
    category: "Terror",
    image: "/images/DETROIT-WEB.webp",
    fallback:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600",
  },
  {
    id: 12,
    name: "MORTAL KOMBAT X",
    description: "Actualmente lo tenemos disponible para PC/PS/XBOX",
    price: 25000,
    category: "Terror",
    image: "/images/images.webp",
    fallback:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600",
  },

  // ==================== CATEGORÍA 4: DEPORTES / MULTIJUGADOR (4 juegos) ====================
  {
    id: 13,
    name: "FIFA 27",
    description: "Actualmente lo tenemos disponible para PC/PS/XBOX",
    price: 25000,
    category: "Deportes",
    image: "/images/FIFA 27.webp",
    fallback:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600",
  },
  {
    id: 14,
    name: "GTA IV",
    description: "Actualmente lo tenemos disponible para PC/PS/XBOX",
    price: 25000,
    category: "Deportes",
    image: "/images/GTA 4.webp",
    fallback: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600",
  },
  {
    id: 15,
    name: "PEAK",
    description: "Actualmente lo tenemos disponible para PC/PS/SWITCH",
    price: 25000,
    category: "Deportes",
    image: "/images/peak-5972991.webp",
    fallback: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600",
  },
  {
    id: 16,
    name: "VALORANT POINTS PACK",
    description: "Actualmente lo tenemos disponible para PC",
    price: 25000,
    category: "Deportes",
    image: "/images/485fd336a1eb9e94a72ed950af6c1793.webp",
    fallback: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600",
  },
];

export default products;
