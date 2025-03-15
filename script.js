const cardData = [
	{
	  Image: 'https://neal.fun/spend/images/big-mac.jpg',
	  name: 'Big Mac',
	  amount: '$2',
	},
	{
	  Image: 'https://neal.fun/spend/images/coca-cola-pack.jpg',
	  name: 'coca-cola',
	  amount: '$5',
	},
	{
	  Image: 'https://neal.fun/spend/images/flip-flops.jpg',
	  name: 'Flip Flop',
	  amount: '$10',
	},
	{
	  Image: 'https://neal.fun/spend/images/movie-ticket.jpg',
	  name: 'Movie ticket',
	  amount: '$15',
	},
	{
	  Image: 'https://neal.fun/spend/images/book.jpg',
	  name: 'Book',
	  amount: '$20',
	},
	{
	  Image: 'https://neal.fun/spend/images/year-of-netflix.jpg',
	  name: 'Year of Netflix',
	  amount: '$100',
	},
	{
	  Image: 'https://neal.fun/spend/images/airpods.jpg',
	  name: 'Airpods',
	  amount: '$199',
	},
	{
	  Image: 'https://neal.fun/spend/images/smartphone.jpg',
	  name: 'Smartphone',
	  amount: '$500',
	},
	{
	  Image: 'https://neal.fun/spend/images/kitten.jpg',
	  name: 'Kitten',
	  amount: '$1500',
	},
	{
		Image: 'https://www.bigbasket.com/media/uploads/p/l/40329964_8-sony-ps5-slim-digital-edition-console.jpg',
		name: 'PS5',
		amount: '$2000',
	  },
	  {
		Image: 'https://neal.fun/spend/images/luxury-wine.jpg',
		name: 'Luxury Vine',
		amount: '$7000',
	  },
	  {
		Image: 'https://neal.fun/spend/images/horse.jpg',
		name: 'horse',
		amount: '$10000',
	  },
	  {
		Image: 'https://5.imimg.com/data5/SELLER/Default/2021/2/JI/ZO/LP/56180244/ladies-bags-500x500.jpg',
		name: 'Handbag',
		amount: '$15000',
	  },
	  {
		Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1IJ7CxttzYo4wrxpN9I87PBA797Nm0RZqQ&s',
		name: 'Custom PC',
		amount: '$25000',
	  },
	  {
		Image: 'https://neal.fun/spend/images/rolex.jpg',
		name: 'Rolex',
		amount: '$50000',
	  },
	  {
		Image: 'https://neal.fun/spend/images/diamond-ring.jpg',
		name: 'Diamond Ring',
		amount: '$100000',
	  },
	  {
		Image: 'https://www.godigit.com/content/dam/godigit/directportal/en/tata-safari-adventure-brand.jpg',
		name: 'SUV',
		amount: '$150000',
	  },
	  {
		Image: 'https://media.istockphoto.com/id/1372495059/photo/land-for-sale-sign-in-green-grass-field-for-housing-development-and-construction.jpg?s=612x612&w=0&k=20&c=PLIFqiNwamgtLORGB49P4fTJI3CGF1-bApzK8Xxz0-o=',
		name: 'property',
		amount: '$200000',
	  },
	  {
		Image: 'https://neal.fun/spend/images/gold-bar.jpg',
		name: 'Gold Bar',
		amount: '$500000',
	  },
	  {
		Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSULGcBjRNIXID_DT7_BAWwlNqqUrjj_QOqYg&s',
		name: 'Graphic Era',
		amount: '$10000000',
	  },
	  {
		Image: 'https://neal.fun/spend/images/mona-lisa.jpg',
		name: 'Mona Lisa',
		amount: '$50000000',
	  },
	
  ];
 
  let userMoney = 10000000000;  
  let num=10000000000;
  const moneyAmountElement = document.querySelector('.moneyamount');  
  

  function updateMoneyAmount() {
	moneyAmountElement.innerText = `Money: $${userMoney.toFixed(0)}`;
  }
  
  const postContainer = document.querySelector('.card-container');
  
  const postMethods = () => {
	const data = cardData.map((abcd,index) => {
	  const postElement = document.createElement('div');
	  postElement.classList.add('card');
	  postElement.innerHTML = `
		<div class="card-image">
		  <img class="image-crd"src="${abcd.Image}" alt="">
		</div>
		<h2 class="card-name">${abcd.name}</h2>
		<div><h3 class="amount">${abcd.amount}</h3></div>
		<button type="button" class="sell-btn" data-index="${index}">Sell</button>
		<input type="email" class="input" name="email">
		<button class="buy-btn" data-index="${index}">Buy</button>
	  `;
	  return postElement;
	});
  
	data.forEach((abcd) => {
	  postContainer.appendChild(abcd);
	});
  };
  
 
  function handleBuyButtonClick(event) {
	const index = event.target.getAttribute('data-index');
	const amountElement = document.querySelectorAll('.amount')[index];
	let itemPrice = parseFloat(amountElement.innerText.replace('$', ''));  
	if (userMoney >= itemPrice) {
	  userMoney -= itemPrice;  
	  updateMoneyAmount();  
	  console.log(`Bought one from card: ${cardData[index].name}. Remaining funds: $${userMoney}`);
	} else {
	  alert('Insufficient funds to buy this item.');
	}
  }
  
  function handleSellButtonClick(event) {
	const index = event.target.getAttribute('data-index');
	const amountElement = document.querySelectorAll('.amount')[index];
	let itemPrice = parseFloat(amountElement.innerText.replace('$', ''));  
	if(userMoney===num){
		alert("amount exceed")
		return userMoney;
	}
	userMoney += itemPrice;  
	updateMoneyAmount();  
	console.log(`Sold one from card: ${cardData[index].name}. New balance: $${userMoney}`);
  }
 
  
  postContainer.addEventListener('click', function (event) {

	if (event.target.classList.contains('buy-btn')) {
	  handleBuyButtonClick(event);
	} else if (event.target.classList.contains('sell-btn')) {
	  handleSellButtonClick(event);
	}
  });
  

  postMethods();
  
 
  updateMoneyAmount();
  


 
  