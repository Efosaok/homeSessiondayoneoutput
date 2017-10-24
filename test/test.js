const expect = require('chai').expect;
const should = require('chai').should();
const myApp = require('../oopimplementation/shoppingcart').ShoppingCart;
const mySecondApp = require('../oopimplementation/shoppingcart').ShoppingBag;

describe('sample testcases for shoppingcart OOP implementation', () => {

	describe('It keeps track of items purchased', () => {
		it('returns the key value pairs of items and quantity added', () => {
			let efosa = new myApp;
			efosa.addItemsToTheCart(3,50,"shoe");
			efosa.addItemsToTheCart(5,50,"bag");
			typeof(efosa.items).should.be.a('object');
			expect(efosa.items.shoe).to.equal(3);
			expect(efosa.items.bag).to.equal(5);
		});
	});

	describe('It adds up the quantity of an item if Item added is already in cart', () => {
		it('returns the quantity when an item has been added multiple times', () => {
			let efosa = new myApp;
			efosa.addItemsToTheCart(3,50,"shoe");
			efosa.addItemsToTheCart(7,50,"shoe");
			expect(efosa.items.shoe).to.equal(10);
			efosa.addItemsToTheCart(2,70,"cloth")
			efosa.addItemsToTheCart(10,70,"cloth")
			expect(efosa.items.cloth).to.equal(12);
		});
	});

	describe('It calculates the total price of items in cart', () => {
		it('returns the total price of the items in the cart', () => {
			let efosa = new myApp;
			efosa.addItemsToTheCart(3,50,"shoe");
			efosa.addItemsToTheCart(7,50,"shoe");
			expect(efosa.total).to.equal(500);
		});
	});

	describe('It can remove items from the cart and calculate price and items accordingly', () => {
		it('updates the total cost when item is removed', () => {
			let efosa = new myApp;
			efosa.addItemsToTheCart(3,50,"shoe");
			efosa.addItemsToTheCart(7,50,"shoe");
			efosa.removeItemsFromTheCart(3,40,'shoe');
			expect(efosa.total).to.equal(380);
		});

		it('updates the items in cart when item is removed', () => {
			let efosa = new myApp;
			efosa.addItemsToTheCart(3,50,"shoe");
			efosa.addItemsToTheCart(7,50,"shoe");
			efosa.removeItemsFromTheCart(3,40,'shoe');
			expect(efosa.items.shoe).to.equal(7);
		});
	});

	describe('It can check if a customer can add more to cart or not', ()=> {
		it('tells the customer you cannot add more to cart if the total amount spent is not up to 100', () => {
			let efosa = new myApp;
			efosa.addItemsToTheCart(3,15,"shoe");
			efosa.addItemsToTheCart(3,15,"shoe");
			expect(efosa.canAddMoreToYourCart()).to.equal('Sorry You cannot qualify for our add-more freebies to cart,spend up to $100 to qualify')
		});

		it('calculates the discount and tells customer that he can spend with discount', () => {
			let efosa = new myApp;
			efosa.addItemsToTheCart(3,20,"shoe");
			efosa.addItemsToTheCart(3,20,"shoe");
			expect(efosa.canAddMoreToYourCart()).to.equal("Hurray,You can add more stuffs worth $"+efosa.discount+" to your cart")
			expect(efosa.discount).to.equal(6);
		});
	});

	describe('It can add items to cart with discount', ()=> {
		it('can add to cart with discount', () => {
			let efosa = new myApp;
			efosa.addItemsToTheCart(3,20,"shoe");
			efosa.addItemsToTheCart(3,20,"shoe");
			efosa.canAddMoreToYourCart();
			efosa.addItemsToTheCartWithDiscount(1,5,'sandal');
			expect(efosa.items.sandal).to.equal(1);
		});

		it('regulates how much a customer spends with discount,If the discount he has is more than what he wants to add to cart,An appropriate message is sent', () => {
			let efosa = new myApp;
			efosa.addItemsToTheCart(3,20,"shoe");
			efosa.addItemsToTheCart(3,20,"shoe");
			efosa.canAddMoreToYourCart();
			efosa.addItemsToTheCartWithDiscount(2,10,'humanhair')
			expect(efosa.addItemsToTheCartWithDiscount(2,10,'humanhair')).to.equal("You have exceeded your discount purchasing limit");
		});
	});

	describe('It can checkout', () => {
		it('can checkout from cart as far as the amount paid is sufficient to pay the total cost of items in cart and gives a user his balance', () => {
			let efosa = new myApp;
			efosa.addItemsToTheCart(3,20,"shoe");
			efosa.addItemsToTheCart(3,10,"shoe");
			expect(efosa.checkOutWithYourCart(100)).to.equal("Thanks For shopping with us,\n"+ efosa.balance +" is your balance");
			expect(efosa.balance).to.equal(10);
		})

		it('can calculate discount at the point of checking out and tell User to spend with discount', () => {
			let efosa = new myApp;
			efosa.addItemsToTheCart(3,20,"shoe");
			efosa.addItemsToTheCart(3,20,"shoe");
			expect(efosa.checkOutWithYourCart(130)).to.equal("Thanks For shopping with us,\n$"+ efosa.balance +" is your balance and guess what?\nYou can buy more stuffs worth $"+ efosa.discount);
			expect(efosa.balance).to.equal(10);
		})

		it('can calculate if amount paid is not suficient to pay for expenses incurred', () => {
			let efosa = new myApp;
			efosa.addItemsToTheCart(3,20,"shoe");
			efosa.addItemsToTheCart(3,20,"shoe");
			expect(efosa.checkOutWithYourCart(100)).to.equal("You have not paid enough");
		})
	})

	describe('class shoppingbag inherits from class ShoppingCart', () => {
		it('returns the key value pairs of items and quantity added', () => {
			let efosa = new mySecondApp;
			efosa.addItemsToTheCart(3,50,"shoe");
			efosa.addItemsToTheCart(5,50,"bag");
			typeof(efosa.items).should.be.a('object');
			expect(efosa.items.shoe).to.equal(3);
			expect(efosa.items.bag).to.equal(5);
		});

		it('returns the quantity when an item has been added multiple times', () => {
			let efosa = new mySecondApp;
			efosa.addItemsToTheCart(3,50,"shoe");
			efosa.addItemsToTheCart(7,50,"shoe");
			expect(efosa.items.shoe).to.equal(10);
			efosa.addItemsToTheCart(2,70,"cloth")
			efosa.addItemsToTheCart(10,70,"cloth")
			expect(efosa.items.cloth).to.equal(12);
		});

		it('returns the total price of the items in the cart', () => {
			let efosa = new mySecondApp;
			efosa.addItemsToTheCart(3,50,"shoe");
			efosa.addItemsToTheCart(7,50,"shoe");
			expect(efosa.total).to.equal(500);
		});

		it('exhibits polymorphism as it does certain things differently', () => {
			it('tells the customer you cannot add more to cart if the total amount spent is not up to 70', () => {
			let efosa = new mySecondApp;
			efosa.addItemsToTheCart(3,10,"shoe");
			efosa.addItemsToTheCart(3,10,"shoe");
			expect(efosa.canAddMoreToYourCart()).to.equal('Sorry You cannot qualify for our add-more freebies to cart,spend up to $70 to qualify')
		});
		})
    })	
});