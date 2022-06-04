const productList = [
    {
        id: 1,
        name: "Fresh and Healthy Mixed Mayonnaise Salad",
        img: "images/sup.png",
        time: 30,
        type: "Add To Cart",
    },
    {
        id: 2,
        name: "The Creamiest Creamy Chicken",
        img: "images/mi.png",
        time: 30,
        type: "Add To Cart",
    },
    {
        id: 3,
        name: "Fruity Pancake with Orange & Blueberry",
        img: "images/banh.png",
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
        <div>
        <div class="product-img" >
            <a href="./detail.html?id=${product.id}">
                <img src="${product.img}" alt="" />
            </a>
        </div>
        <div class="product-content inline-block mt-3 w-full 
        column shadow transition ease-in-out duration-300 hover:shadow-xl h-32">
            <h3><a class="text-[18px] font-semibold mt-4" href="./detail.html?id=${product.id}">${product.name}</a></h3>
               <div>
               <span class="font-bold text-[#F54748] mt-4" >$ ${product.time}</span>
               </div>
               <a class="text-white bg-black w-full px-36 text-[14px] py-3 rounded-md" href="./detail.html?id=${product.id}">
               ${product.type}
               </a>
                
            
        </div>
    </div>
        `;
    }
    return result;
}

document.getElementById("products").innerHTML = showProducts(productList);