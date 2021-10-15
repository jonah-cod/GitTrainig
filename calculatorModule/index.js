let orders = {
    0: {
        id: 0,
        name: "",
        price: 0,
        quantity: 0
    }
}
localStorage.setItem("orders", JSON.stringify(orders))






console.log(orders);

let counter = 0


const items = [{
        img: "./images/184632.jpg",
        name: "King Size Bed",
        des: "Comfortable",
        price: 25000,
        id: "1"
    },

    {
        img: "./images/products_acme_furniture_color_lorenzo-433352010_28084ck-b1.jpg",
        name: "King/Queen Size Bed",
        des: "Strong and reliable",
        price: 22000,
        id: "2"
    },
    {
        img: "./images/mahoganybed.jpg",
        name: "King Size Bed",
        des: "Mahogany bed best suites couples",
        price: 26000,
        id: "3"
    }
]


/* functionality to creating different card items*/

function createItem(items) {
    items.forEach(item => {
        let itemsDiv = document.getElementById("items")

        let singleItem = document.createElement("div");
        singleItem.classList.add("item")

        let img = document.createElement("img");
        img.src = item.img;
        let name = document.createElement("h4");
        name.innerText = item.name;
        let des = document.createElement("p")
        des.innerText = item.des
        let price = document.createElement("small");
        price.innerText = `Ksh. ${item.price}`;
        let addCart = document.createElement("button");
        addCart.innerText = "Add to cart";
        addCart.classList.add('but')
        addCart.setAttribute("id", item.id)
        let myKids = [img, name, des, price, addCart]

        myKids.forEach((kid) => {
            singleItem.appendChild(kid)
        });

        itemsDiv.appendChild(singleItem)
    });
}

createItem(items);



//#region 
/*  functionality to create a pop up once click event is detected on add to cart button*/

let allButtons = document.querySelectorAll(".but");


allButtons.forEach(Button => {
    Button.addEventListener('click', () => {
        let clicked = Button.id;
        console.log(clicked);

        let addItem = document.createElement("div");
        addItem.classList.add("addItem")
        let plus = document.createElement("span");
        plus.innerText = "+"
        plus.classList.add("plus")
        let minus = document.createElement("span");
        minus.innerText = "-";
        minus.classList.add("minus")
        let count = document.createElement("span");
        count.innerText = counter
        minus.classList.add("count")

        addItem.appendChild(minus)
        addItem.appendChild(count)
        addItem.appendChild(plus)

        addItem.classList.add("orderCount")
        let itemsDiv = document.getElementById(clicked);
        itemsDiv.parentNode.appendChild(addItem)

        document.querySelector(".addItem").addEventListener("mouseout", e => {
            let itemToremove = document.querySelector(".addItem")
            if (!itemToremove.contains(e.relatedTarget)) {
                itemToremove.parentNode.removeChild(itemToremove)
                console.log("out of sight");
                counter = 0
                itemToremove = ""
            }


        })

        document.querySelector(".plus").addEventListener("click", () => {
            counter += 1;
            count.innerText = counter;
            storeAnItem(document.getElementById(clicked).id, '-')

        })

        document.querySelector(".minus").addEventListener("click", () => {
            if (counter == 0) {
                counter = 0
            } else {
                counter -= 1;
            }
            count.innerText = counter;

        })


    })
});
//#endregion


//#region  functionality to store items

function storeAnItem(id, action) {
    switch (id) {
        case "+":
            plusItem(id)

            break;

        case "-":
            plusItem(id)
            break;

        default:
            break;
    }
}

function minusItem(key) {

}

function plusItem(key) {
    orders = JSON.parse(localStorage.getItem("orders"))

    if (orders.hasOwnProperty(key)) {
        orders[key].quantity = counter;
        localStorage.setItem("orders", JSON.stringify(orders))

    } else {
        orders[key] = {
            id: key,
            name: items[key - 1].name,
            price: items[key - 1].price,
            quantity: counter
        }
    }

}
//#endregion

// let popupCounter = document.querySelectorAll(".orderCount");

// popupCounter.addEventListener("focusout", () => {
//     popupCounter.parentNode.removeChild(popupCounter)
// })



// document.querySelectorAll(".plus").forEach(elem => {
//     elem.addEventListener("click", () => {
//         document.querySelectorAll(".count")[0].innerText += 1;
//         console.log("clicked");
//     })
// });


// (document.querySelectorAll(".orderCount")).forEach(element => {
//     element.addEventListener('focusout', () => {
//         let thisCount = document.querySelector[0];
//         thisCount.parentNode.removeChild(thisCount);
//     })
// // });


// function handleClickAddtoCart(params) {

// }