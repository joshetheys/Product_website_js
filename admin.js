let products = JSON.parse(localStorage.getItem('product')) ? 
JSON.parse(localStorage.getItem('product')) : 
[
{
    id: 1,
    discount: "25% off",
    title: "BTS Van Bag",
    character: "Van",
    type: "Bag",
    imgURL: "./images/van.jpg",
    description: "The Perfect Bag for an Army.",
    price: "R180",
    actualprice: "R225"
},
{
    id: 2,
    discount: "25% off",
    title: "BTS Koya Bag",
    character: "Koya",
    type: "Bag",
    imgURL: "./images/koya.jpg",
    description: "The Perfect Bag for an RM stan.",
    price: "R180",
    actualprice: "R225"
    },
    {
        id: 3,
    discount: "25% off",
    title: "BTS RJ Bag",
    character: "RJ",
    type: "Bag",
    imgURL: "./images/rj.jpg",
    description: "The Perfect Bag for a Jin stan.",
    price: "R180",
    actualprice: "R225"
    },
    {
        id: 4,
    discount: "25% off",
    title: "BTS Mang Bag",
    character: "Mang",
    type: "Bag",
    imgURL: "./images/mang.jpg",
    description: "The Perfect Bag for a J-Hope stan. Who wouldn't love the little horse.",
    price: "R180",
    actualprice: "R225"
    },
    {
        id: 5,
    discount: "25% off",
    title: "BTS Shooky Bag",
    character: "Shooky",
    type: "Bag",
    imgURL: "./images/shooky.jpg",
    description: "The Perfect Bag for a Yoongi stan. It has all the sass and cuteness you need.",
    price: "R180",
    actualprice: "R225"
    },
    {
        id: 6,
    discount: "25% off",
    title: "BTS Chimmy Bag",
    character: "Chimmy",
    type: "Bag",
    imgURL: "./images/chimmy.jpg",
    description: "The Perfect Bag for an Jimin stan",
    price: "R180",
    actualprice: "R225"
    },
    {
        id: 7,
    discount: "25% off",
    title: "BTS Tata Bag",
    character: "Tata",
    type: "Bag",
    imgURL: "./images/tata.jpg",
    description: "The Perfect Bag for an Taehyung stan. Show your love for the fandom with this cute accessory.",
    price: "R180",
    actualprice: "R225"
    },
    {
        id: 8,
    discount: "25% off",
    title: "BTS Cooky Bag",
    character: "Cooky",
    type: "Bag",
    imgURL: "./images/cooky.jpg",
    description: "The Perfect Bag for a Jungkook stan.",
    price: "R180",
    actualprice: "R225"
    },
    {
        id: 9,
    discount: "33% off",
    title: "BTS Sweater",
    character: "BTS",
    type: "Sweater",
    imgURL: "./images/sweater.jpg",
    description: "Feeling Cold? This Sweater is sure to warm you up. With a soft inner lining you can express your love for BTS in comfort and style.",
    price: "R300",
    actualprice: "R450"
    },
    {
        id: 10,
    discount: "33% off",
    title: "BTS Sock Set of 8",
    character: "BTS",
    type: "Socks",
    imgURL: `./images/socks.jpg`,
    description: "Can't choose your bias? Get the sock set. There's more than enough to wear every day of the week.",
    price: "R400",
    actualprice: "R600"
    },
];
function create(arr){
    let cont = document.getElementById("prodcont");

    cont.innerHTML = "";
    // displaying on html
    arr.forEach((element) => {
        cont.innerHTML += `<tr>
        <th scope="row">${element.id}</th>
        <td>${element.discount}</td>
        <td>${element.title}</td>
        <td>${element.character}</td>
        <td>${element.type}</td>
        <td><img src="${element.imgURL}" alt=""></td>
        <td>${element.description}</td>
        <td>${element.price}</td>
        <td>${element.actualprice}</td>
        <td><button class="btn"><i class="bi bi-gear"></i></button></td>
        <td><button class="btn" onclick= "toDelete(${element.id})" ><i class="bi bi-trash3"></i></button></td>
      </tr>`
    });
}
create(products);

// localStorage.clear();

function typeSort(e) {
    const type = e.target.value;
    if (type === "all") {
      return create(products);
    }
    console.log(type);
    const filtered = products.filter((item) =>{
        return item.type === type
    } );
    create(filtered);
  }

  function characterSort(e) {
    const type = e.target.value;
    if (type === "all") {
     return create(products);
    }
    const filtered = products.filter((item) =>{
        return item.character === type
    } );
     create(filtered);
  }

  function discountSort(e) {
    const type = e.target.value;
    if (type === "all") {
     return create(products);
    }
    const filtered = products.filter((item) =>{
        return item.discount === type
    } );
    create(filtered);
  }

  function priceSort(e) {
    const type = e.target.value;
    if (type === "all") {
     return create(products);
    }
    const filtered = products.filter((item) =>{
        return item.price === type
    } );
    create(filtered);
  }

function toDelete (e){
products.splice(e-1,1);
products.forEach((element, index) =>{
    element.id=index+1
})
localStorage.setItem('product', JSON.stringify(products));
create(products);
}