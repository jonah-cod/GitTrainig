const products = [{
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

function cartCalculator(id, quantity) {
    let checkOut = {}

    if (quantity >= 10 && quantity < 25) {
        checkOut.total = quantity * products[id - 1].price;
        checkOut.discount = quantity * 100;
    } else if (quantity >= 25 && quantity < 50) {
        checkOut.total = quantity * products[id - 1].price;
        checkOut.discount = quantity * 250;
    } else if (quantity >= 50) {
        checkOut.total = quantity * products[id - 1].price
        checkOut.discount = quantity * 500;
    } else {
        checkOut.total = quantity * products[id - 1].price
        checkOut.discount = 0
    }

    return checkOut;

}



let cart = document.getElementById("cartHolder");
cart.addEventListener("click", () => {
    let allItemsinCart = document.createElement("div");
    allItemsinCart.classList.add("allItemsinCart");
    let heading = document.createElement("h2");
    heading.innerText = "Items to checkout";
    allItemsinCart.appendChild(heading);
    //
    //attatching the cancel button to the cart element
    let exitButton = document.createElement("button");
    exitButton.innerText = "Cancel";
    exitButton.setAttribute("id", "cancel");
    allItemsinCart.appendChild(exitButton)
    let allItems = JSON.parse(localStorage.getItem("orders"));

    if (Object.keys(allItems).length != 0) {
        let totalToPay = 0;

        for (const key in allItems) {
            let oneItem = document.createElement("table")
            oneItem.setAttribute("id", key)
            let thead = document.createElement("thead");

            let header = document.createElement("th");
            header.innerText = products[key - 1].name;
            thead.appendChild(header);
            oneItem.appendChild(thead)

            let columnHeader = document.createElement("tr");
            let rowHeaders = ["Quantity", "Price", "Total Price", "Discount", "Total Price With discount"];
            rowHeaders.forEach(rowHeader => {
                let column = document.createElement("th")
                column.innerText = rowHeader;
                columnHeader.appendChild(column);
                oneItem.appendChild(columnHeader)
            });


            let quantity = allItems[key].quantity;
            let totalPrice = cartCalculator(key, quantity).total;
            let discount = cartCalculator(key, quantity).discount
            let priceAfterDiscount = totalPrice - discount;
            let rowDat = document.createElement("tr")

            let rowDatas = [quantity, allItems[key].price, totalPrice, discount, priceAfterDiscount];


            rowDatas.forEach(rowData => {
                let row = document.createElement("td")
                row.innerText = rowData;
                rowDat.appendChild(row);
                oneItem.appendChild(rowDat)
            });
            allItemsinCart.appendChild(oneItem)

            totalToPay += priceAfterDiscount;
        }


        let totalShow = document.createElement("h5");
        totalShow.innerText = `Total to Cash Out Ksh ${totalToPay}/=`;
        allItemsinCart.appendChild(totalShow);

        let clear = document.createElement("button");
        clear.innerText = "Clear Cart";
        clear.setAttribute("id", "clear")
        allItemsinCart.appendChild(clear)
        cart.appendChild(allItemsinCart)




        // functionality to clear all the items in the cart.
        let clearItems = document.getElementById("clear");
        clearItems.addEventListener("click", () => {
            let orders = {}
            localStorage.setItem("orders", JSON.stringify(orders));
            cart.removeChild(allItemsinCart)

        })


    } else {
        let noItems = document.createElement("h4");
        noItems.innerText = "No items in the cart. Add items to the cart to checkout!"
        allItemsinCart.appendChild(noItems)
        console.log("no items in the cart")
        cart.appendChild(allItemsinCart)
    }





    let close = document.getElementById("cancel");
    exitButton.addEventListener("click", () => {
        location.reload();
    })

})

//function clearItems() {

//}