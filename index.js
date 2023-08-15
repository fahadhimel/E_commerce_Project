const allItem = document.getElementById("allItem");
const allItemadd = document.getElementById("allItemadd");

const itemAllData = [
  { id: 1, name: "Item1", price: 100, qtt: 1, image:"images/1.jpg"},
  { id: 2, name: "Item2", price: 10, qtt: 1, image:"images/2.jpg" },
  { id: 3, name: "Item3", price: 50, qtt: 1, image:"images/3.jpg" },
  { id: 4, name: "Item4", price: 20, qtt: 1, image:"images/4.jpg" },
  { id: 5, name: "Item5", price: 35, qtt: 1, image:"images/5.jpg" },
  { id: 6, name: "Item6", price: 70, qtt: 1, image:"images/6.jpg" },
  { id: 7, name: "Item7", price: 18, qtt: 1, image:"images/7.jpg" },
  { id: 8, name: "Item8", price: 58, qtt: 1, image:"images/8.JPG" },
  { id: 9, name: "Item9", price: 96, qtt: 1, image:"images/9.jpg" },
  { id: 10, name: "Item10", price: 200, qtt: 1, image:"images/10.jpg" },
];

itemAllData.map((value) => {
  const item = document.createElement("div");
  item.innerHTML = `<div class="leftitem">
  <div class="nameImages">
      <div class="headerP">
          <h1 class="header">${value.name}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
               vitae commodi voluptates vero odio ratione?</p>
      </div>
      <img src="${value.image}" alt="">
  </div>
  <div class="priceBtn">
      <p>Price : ${value.price}$</p>
      <button class="btn" onclick="handleClick(${value.id})" >Add</button>
  </div>
</div> `;

  allItem.appendChild(item);
});

const handleClick = (id) => {
  if (!localStorage.getItem("addItem")) {
    const findItem = itemAllData.filter((value) => value.id === id);
    localStorage.setItem("addItem", JSON.stringify(findItem));
  } else {
    let getLocalstorageData = JSON.parse(localStorage.getItem("addItem"));
    const findItem = getLocalstorageData.filter((value) => value.id === id);
    if (findItem.length > 0) {
      alert("Yes");
    } else {
      const findItem = itemAllData.filter((value) => value.id === id);
      getLocalstorageData.push(findItem[0]);
      localStorage.setItem("addItem", JSON.stringify(getLocalstorageData));
    }
  }
  AddToCard();
};

const totalFunction = (p, q) => {
  return p * q;
};

function AddToCard() {
  allItemadd.innerHTML = "";
  let getLocalstorageData = JSON.parse(localStorage.getItem("addItem")) || [];
  getLocalstorageData.map((value) => {
    const item = document.createElement("div");
    item.innerHTML = `<div class="rightitem">
                        <h2 class="rightheader">${value.name}</h2>
                        <p>P- ${value.price}$</p>
                        <p>T- ${totalFunction(value.price, value.qtt)}$</p>
                        <div>
                        <button class="incrementbtn" onclick="handleIncrement(${
                          value.id
                        })">+</button>
                        <span>${value.qtt}</span>
                        <button class="decrementbtn" onclick="handleDecrement(${
                          value.id
                        })">-</button>
                        <button class="decrementbtn" onclick="handleDelete(${
                            value.id
                          })">D</button>
                        </div>
                    </div> `;

    allItemadd.appendChild(item);
  });
}
AddToCard();

const handleIncrement = (id) => {
  const getLocalData = JSON.parse(localStorage.getItem("addItem"));
  const fillData = getLocalData.filter((fil) => fil.id === id);
  if (fillData[0].qtt > 4) return;
  fillData[0].qtt += 1;
  localStorage.setItem("addItem", JSON.stringify(getLocalData));

  AddToCard();
};

const handleDecrement = (id) => {
  const getLocalData = JSON.parse(localStorage.getItem("addItem"));
  const fillData = getLocalData.filter((fil) => fil.id === id);

  if (fillData[0].qtt < 2) return;

  fillData[0].qtt -= 1;
  localStorage.setItem("addItem", JSON.stringify(getLocalData));

  AddToCard();
};

const handleDelete = (id) => {
    const getLocalData = JSON.parse(localStorage.getItem("addItem"));
    const fillData = getLocalData.filter((fil) => fil.id !== id);
  
    localStorage.setItem("addItem", JSON.stringify(fillData));
  
    AddToCard();
  };
  