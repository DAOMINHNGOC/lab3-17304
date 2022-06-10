const productList = [
    {
        id: 1,
        name: "Fresh and Healthy Mixed Mayonnaise Salad",
        img: "https://res.cloudinary.com/fashsion-brand/image/upload/v1654743828/sup_mddsvf.png",
        time: 30,
        type: "Add To Cart",
    },
    {
        id: 2,
        name: "The Creamiest Creamy Chicken",
        img: "https://res.cloudinary.com/fashsion-brand/image/upload/v1654743826/6_z8v6ph.png",
        time: 30,
        type: "Add To Cart",
    },
    {
        id: 3,
        name: "Fruity Pancake with Orange & Blueberry",
        img: "https://res.cloudinary.com/fashsion-brand/image/upload/v1654743827/banh_icyp4c.png",
        time: 30,
        type: "Add To Cart",
    },
];

function showProducts(products) {
    if (!Array.isArray(products) || products.length == 0) return false;

    let result = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        result += `
        <div class="leading-[30px] mt-7">
        <div class="product-img" >
            <a href="./detail.html?id=${product.id}">
                <img src="${product.img}" alt="" />
            </a>
        </div>
        <div class="product-content inline-block mt-3 w-full 
        column shadow transition ease-in-out duration-300 hover:shadow-xl transition h-32 leading-[40px] px-3">
            <h3><a class="text-[14px] md:text-[18px] font-semibold mt-4" href="./detail.html?id=${product.id}">${product.name}</a></h3>
               <div>
               <span class="font-bold text-[#F54748] mt-4" >$ ${product.time}</span>
               </div>
               <a class="text-white bg-black w-full px-28 md:px-36 text-[14px] py-3 rounded-md" href="./detail.html?id=${product.id}">
               ${product.type}
               </a>
                
            
        </div>
    </div>
        `;
    }
    return result;
}

document.getElementById("products").innerHTML = showProducts(productList);