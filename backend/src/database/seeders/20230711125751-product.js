'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('product',[
        {
        "id": 1,
        "name": "Future Match",
        "price": 489.9,
        "description": "O FUTURE MATCH foi reprojetado com zonas de contato aprimoradas em 3D no cabedal para maior aderência e manuseio da bola. A sola Dynamic Motion System de segunda geração fornece a tração e a agilidade necessárias para jogos em campo de grama de alto impacto.",
        "brand": "Puma",
        "img": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/107448/03/sv01/fnd/BRA/w/640/h/640/fmt/png"
        },
        {
        "id": 2,
        "name": "Vapormax",
        "price": 450,
        "description": "When engineering the VaporMax, the goal was to bring runners closer to the Air sole, so they could really experience the sensation of running on air. Previous Air Max shoes like the Air Max 1 treated the Air sole as a cushion, combining it with foam midsoles to absorb impact.",
        "brand": "Nike",
        "img": "https://artwalk.vteximg.com.br/arquivos/ids/220563-1000-1000/Tenis-Nike-Air-Vapormax-360-Feminino-Bege.jpg?v=637166188913800000"
        },
        {
        "id": 3,
        "name": "Air max 90 2.0",
        "price": 350,
        "description": "Originally designed for performance running, the Max Air unit in the heel adds unbelievable cushioning. The low-top design combines with a padded collar for a sleek look that feels soft and comfortable. The stitched overlays and TPU accents add durability, comfort and the iconic '90s look you love.",
        "brand": "Nike",
        "img": "https://imagedelivery.net/2DfovxNet9Syc-4xYpcsGg/70334a35-c066-432d-dc06-d78e25afa100/product"
        },
        {
        "id": 4,
        "name": "Adi 2000",
        "price": 450,
        "description": "No more longing. Based on early 2000s skate models, the ADI2000 pops in vibrant colors inspired by the video games of the era, while suede, mesh and leather pay homage to previous models. Because even the best video game console needs an update every now and then, doesn't it?",
        "brand": "Adidas",
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2ef6f275dc640c5aa59ade50105463c_9366/Tenis_ADI2000_Verde_GZ6187_01_standard.jpg"
        },
        {
        "id": 5,
        "name": "Air max Plus Tn",
        "price": 500,
        "description": "What does TN mean at Nike, or what does TN stand for? The TN on the Nike Air Max TN stands for Tuned Air. But why does the shoe have two names? It was rebranded by Nike, but this was never officially released. The characteristic TN logo can be found on the tongue as well as on the heel.",
        "brand": "Nike",
        "img": "https://maze.cdn.plataformaneo.com.br/produto/multifotos/hd/20230303102938_1502998498_DZ.png"
        },
        {
        "id": 6,
        "name": "Forum Low",
        "price": 400,
        "description": "Year-round summer camp. Created for the court, the adidas Forum shoe has found a place among musicians, artists and other fashion leaders. This stunning update highlights its iconic status. The distinctive X-panel and serrated 3-Stripes pop with high-contrast colors for a classic, modern look. Inspired by '70s summer camp stories, with special prints on the tongue and sockliner, this pair invites you to continue that legacy. Made with a range of recycled materials, the upper contains at least 50% reused content. This product represents just one of our solutions to help end plastic waste.",
        "brand": "Adidas",
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ffe40fe134fe425cb77fafcb01190d8c_9366/Tenis_Forum_Low_Branco_IE7175_01_standard.jpg"
        },
        {
          "id": 7,
          "name": "Adi 2000",
          "price": 450,
          "description": "These adidas Adi2000 shoes have a 2000 era in their DNA. Part skateboard influence, part basketball influence, their cultural heritage cannot be denied. Premium leather and suede uppers add the finishing touch of style with every step.Go back to the early 2K era, when style was bold and vibrant and sneakers were chunky. A striking tribute to the era, these adidas shoes bring the skateboarding and hoops energy of the early '00s back to life. The nostalgia is complete with suede uppers, chunky laces and a Trefoil logo on the side. The rubber sole is sturdy and classic.Recorded CDs, Y2K and this shoe. All things are quintessentially early 2000s. Inspired by and rooted in turn-of-the-millennium DNA, these adidas shoes make a premium statement.",
          "brand": "Adidas",
          "img": "https://maze.cdn.plataformaneo.com.br/produto/multifotos/hd/20221026152840_2304997696_DZ.png"
        }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product', null, {})
  }
};
