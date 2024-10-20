var itemArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
]

var juice=document.getElementById('juice')
var cookie=document.getElementById('cookie')
var shirt=document.getElementById('shirt')
var pen=document.getElementById('pen')
var total=document.getElementById('total')









function calculateIndividualPrice(item) {
    // Convert price and quantity to numbers for accurate calculation
    const price = Number(item.price);
    const quantity = Number(item.quantity);
    return price * quantity;
  }
  
  itemArray.forEach(item => {
    const itemName = item.name;
    const totalPrice = calculateIndividualPrice(item);
    console.log(`Item Name: ${itemName}, Total Price: ${totalPrice}`);
  });
  


  const totalPrice = itemArray.reduce((acc, item) => {
    const price = Number(item.price);
    const quantity = Number(item.quantity);
    return acc + (price * quantity);
  }, 0);
  
  console.log(`Total Price of All Items: ${totalPrice}`);
  

  document.getElementById('total').innerText=totalPrice