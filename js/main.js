const productList = [
  {
      id: 1,
      name: "Big and Juicy Wagyu Beef Cheeseburger",
      img: "https://res.cloudinary.com/fashsion-brand/image/upload/v1654743828/hamboger_cp3lpx.png",
      time: 30,
      type: "snack",
  },
  {
    id: 2,
    name: "Fresh Lime Roasted Salmon",
    img: "https://res.cloudinary.com/fashsion-brand/image/upload/v1654743827/ca_njcnrk.png",
    time: 30,
    type: "Fish",
  },
  {
  id: 3,
  name: "The Best Easy One Pot Chicken and Rice",
  img: "https://res.cloudinary.com/fashsion-brand/image/upload/v1654743828/ga_waai89.png",
  time: 30,
  type: "Snack",
  },
  {
  id: 4,
  name: "Fresh and Healthy Mixed Mayonnaise ",
  img: "https://res.cloudinary.com/fashsion-brand/image/upload/v1654743826/5_vvlohx.png",
  time: 30,
  type: "Healthy",
  },
  {
  id: 5,
  name: "The Creamiest Creamy Chicken",
  img: "https://res.cloudinary.com/fashsion-brand/image/upload/v1654743826/6_z8v6ph.png",
  time: 30,
  type: "Noodles",
  },
  {
  id: 6,
  name: "Fruity Pancake with Orange & Blueberry",
  img: "https://res.cloudinary.com/fashsion-brand/image/upload/v1654743826/7_gu8tdp.png",
  time: 30,
  type: "Sweet",
  },
];


function showProducts(products) {
  if (!Array.isArray(products) || products.length == 0) return false;

  let result = "";
  for (let i = 0; i < products.length; i++) {
      const product = products[i];
      result +=` <div>
      <div>
          <img class="mb-5 rounded-2xl w-[398px]" src="${product.img}" alt="">
      </div>
      <div class="shadow hover:shadow-xl transition px-2">
          <h1 class="text-[#F54748] font-bold mb-5">Big and Juicy Wagyu Beef Cheeseburger</h1>
              <div class="flex space-x-6">
               <span class="flex">
               <img src="https://res.cloudinary.com/fashsion-brand/image/upload/v1654745890/Timer_nborbs.png" alt=""> 30 Minutes</span>
               <span class="flex">
              <img src="https://res.cloudinary.com/fashsion-brand/image/upload/v1654743827/dia_wwggs0.png" alt=""> Snack
          </span>
          </div>
      </div>
  </div>`;
  }
  return result;
}

document.getElementById("products").innerHTML = showProducts(productList);



