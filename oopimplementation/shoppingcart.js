class ShoppingCart{
  constructor(){
// this instance variable stores the total amount of goods purchased
    this.total = 0;
// this stores key:value pairs of goods purchased and quantity
    this.items = {};
// this is the balaance of customer after checking out
    this.balance = 0;
// this variable determines when and how much discount you should use
    this.discount = 0;
/*
* this keeps track of the items in the items as it
* determines whether to create a new item in the items instance
* attribute or just sum up the quantities when adding items
* to the cart
*/
    this.nameOfItems = [];
  }
  
// adding items to cart happens here
  addItemsToTheCart(quantity,price,nameOfItem){
// here we check if the customer has purchased a particular item before,
// If so we simply sum up the quantities instead of overwriting
// previous values or creating new ones
    if(this.nameOfItems.indexOf(nameOfItem) in this.nameOfItems){
      this.items[nameOfItem] += quantity;
      this.total += quantity * price;
// If item has not been purchased before,we simply create it in the items instance variable
    }else{
      this.total += quantity * price;
      this.items[nameOfItem] =  quantity;
      this.nameOfItems.push(nameOfItem);
    }
  }
//removing items from cart happens here  
  removeItemsFromTheCart(quantity,price,nameOfItem){
/* if the quantity being removed is greater than or equal to the quantity already in cart,
* we simply remove that particular item totally from the cart,
* and update other instance attributes accordingly
*/ 
    if (quantity >= this.items[nameOfItem]){
      this.total -= this.items[nameOfItem]* price;
      delete this.items[nameOfItem];
      this.nameOfItems.splice(indexOf(nameOfItem))
    }
// we simply update our total and items instances since it all goes normal
    this.total -= quantity*price;
    this.items[nameOfItem] -= quantity
  }

// If you qualify,this method can be used to check whether you qualify for a discount  
  canAddMoreToYourCart(){
    if (this.total < 100){
      return "Sorry You cannot qualify for our add-more freebies to cart,spend up to $100 to qualify";
    }
    this.discount += 5/100 * this.total;
    return "Hurray,You can add more stuffs worth $"+this.discount+" to your cart";
  }

// checkout happens here  
  checkOutWithYourCart(amountPaid){
    if(amountPaid < this.total){
      return "You have not paid enough";
    }
    this.balance += amountPaid - this.total;
    if (this.total < 100){
      return "Thanks For shopping with us,\n"+ this.balance +" is your balance"
    }
    this.discount += 5/100 * this.total;
    return "Thanks For shopping with us,\n$"+ this.balance +" is your balance and guess what?\nYou can buy more stuffs worth $"+ this.discount
  }

// yes,here adding items to your cart with your discount 
  addItemsToTheCartWithDiscount(quantity,price,nameOfItem){
    if (this.discount < 1){
      return "Sorry you cannot use this service right now,check if you can and be granted your discount by running canAddMoreToYourCart() ";
    }
    else if(this.discount < (quantity*price)){
      return "You have exceeded your discount purchasing limit"
    }
    this.discount -= quantity * price;
    this.items[nameOfItem] = quantity;
  }
}

/* here this is a Shoppingbag or let's say a nylon
* that inherits from the shopping cart class but the method
* canAddMoreToYourCart is not thesame thereby exhibiting polymorphism,
* Exclusive By Okpugie Efosa,Aspiring world-class
* Developer.
*/
class ShoppingBag extends ShoppingCart{
  canAddMoreToYourCart(){
    if (this.total < 75){
      return "Sorry You cannot qualify for our add-more freebies to cart,spend up to $70 to qualify";
    }
    this.discount += 3;
    return "Hurray,You can add more stuffs worth $5 to your cart";
  }
}

// sample usecases,run this on your terminal using node OOPimplementation.js to see this
// software in action
let efosa = new ShoppingCart();
efosa.addItemsToTheCart(3,50,"shoe"); 
efosa.addItemsToTheCart(3,50,"shoe");
console.log(efosa.items);
efosa.removeItemsFromTheCart(2,50,"shoe");
console.log(efosa.items);
console.log(efosa.nameOfItems);
efosa.addItemsToTheCart(3,80,"macbook");
console.log(efosa.total);
console.log(efosa.checkOutWithYourCart(500));
efosa.addItemsToTheCartWithDiscount(2,8,"packet");
console.log(efosa.discount);
console.log(efosa.addItemsToTheCartWithDiscount(1,10,'matches'));

module.exports = {
	ShoppingCart,
	ShoppingBag,
}