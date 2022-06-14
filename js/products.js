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
        img: "https://res.cloudinary.com/fashsion-brand/image/upload/v1654743828/mi_a34xej.png",
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
    {
        id: 4,
        name: "Fresh and Healthy Mixed Mayonnaise Salad",
        img: "https://res.cloudinary.com/fashsion-brand/image/upload/v1654743828/sup_mddsvf.png",
        time: 30,
        type: "Add To Cart",
    },
    {
        id: 5,
        name: "The Creamiest Creamy Chicken",
        img: "https://res.cloudinary.com/fashsion-brand/image/upload/v1654743828/mi_a34xej.png",
        time: 30,
        type: "Add To Cart",
    },
    {
        id: 6,
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
        <div>
        <div class="product-img" >
            <a href="./detail.html?id=${product.id}">
                <img src="${product.img}" alt="" />
            </a>
        </div>
        <div class="product-content inline-block mt-3 w-full shadow transition leading-[38px] font-bold hover:shadow-xl h-40 px-2">
            <h3 class="h-20"><a class="text-[18px] font-semibold " href="./detail.html?id=${product.id}">${product.name}</a></h3>
               <div>
               <span class="font-bold text-[#F54748] " >$ ${product.time}</span>
               <button class="text-white bg-black w-full rounded-sm " href="./detail.html?id=${product.id}">
               ${product.type}
               </button>
               </div>
                
            
        </div>
    </div>
        `;
    }
    return result;
}

document.getElementById("products").innerHTML = showProducts(productList);