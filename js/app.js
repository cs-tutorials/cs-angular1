(function(){
	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{ 
			name: 'Azurite', 
			price: 4.50, 
			description: 'Description for Azurite.',
			canPurchase: true,
			isSoldOut: false
		},
		{ 
			name: 'Dodecahedron', 
			price: 2.95, 
			description: 'Description for Dodecahedron.',
			canPurchase: true,
			isSoldOut: false
		},
		{ 
			name: 'Pentagonal Gem', 
			price: 5.95, 
			description: 'Description for Pentagonal Gem.',
			canPurchase: false,
			isSoldOut: false
		}		
	];

})();
