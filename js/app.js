(function(){
  var gem = { 
  	name: 'Azurite', 
  	price: 2.95, 
  	description: 'Description for Azurite.',
  	canPurchase: true,
  	isSoldOut: false
  	 };
  	 
  var app = angular.module('gemStore', []);
  app.controller('StoreController', function(){
    this.product = gem;
  });
})();
