
const categories = [
  {
    id: "Crops",
    name: "Crops",
    tags: ["products", "inspirations"],
    count: 147,
    image: require("../assets/icons/plants.png")
  },
  {
    id: "seeds",
    name: "Seeds",
    tags: ["products", "shop"],
    count: 16,
    image: require("../assets/icons/seeds.png")
  },
  {
    id: "flowers",
    name: "Flowers",
    tags: ["products", "inspirations"],
    count: 68,
    image: require("../assets/icons/flowers.png")
  },
  {
    id: "Irrigation",
    name: "Irrigation",
    tags: ["products", "shop"],
    count: 17,
    image: require("../assets/icons/sprayers.png")
  },
  {
    id: "fertilizers",
    name: "fertilizers",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/icons/fertilizers.png")
  }
];

const products = [
  {
    id: 1,
    name: "Rice",
    description:
     " India is the second-largest producer of rice in the world after China. India accounts for approximately 20% of the worlds rice production. It is arguably the most important agricultural crop that grows in the country. Rice is a staple food pan India, and its cultivation is also widespread across the country.Rice prominently grows in high rainfall areas. It requires average temperatures of 25°c and a minimum of 100 cms of rainfall. It’s traditionally grown in waterlogged rice paddy fields. Northeast plains and coastal areas are the major rice-producing areas of the country.",
    tags: ["Water", "rice", "India"],
    images: [
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      // showing only 3 images, show +6 for the rest
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png")
    ]
  }
];

const explore = [
  // images
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
  require("../assets/images/explore_4.png"),
  require("../assets/images/explore_5.png"),
  require("../assets/images/explore_6.png")
];

const profile = {
  username: "Team20",
  location: "India",
  email: "Team20@vit.in",
  avatar: require("../assets/images/avatar.png"),
  budget: 10000,
  monthly_cap: 50000,
  notifications: true,
  newsletter: false
};

export { categories, explore, products, profile };
