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
        <div class="product-content inline-block mt-3 w-full shadow transition leading-[38px] font-bold hover:shadow-xl h-40">
            <h3><a class="text-[18px] font-semibold mt-10" href="./detail.html?id=${product.id}">${product.name}</a></h3>
               <div>
               <span class="font-bold text-[#F54748] mt-10" >$ ${product.time}</span>
               </div>
               <div class=""><a class="text-white bg-black w-[250px] px-[70px] md:px-[98px] text-[14px] py-3 rounded-md  " href="./detail.html?id=${product.id}">
               ${product.type}
               </a>
               </div>
                
            
        </div>
    </div>
        `;
    }
    return result;
}

document.getElementById("products").innerHTML = showProducts(productList);