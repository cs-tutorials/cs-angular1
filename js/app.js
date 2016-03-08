(function(){
  var gem = { 
  	name: 'Azurite', 
  	price: 2.95, 
  	description: 'Description for Azurite.',
  	canPurchase: false,
  	isSoldOut: true
  	 };
  	 
  var app = angular.module('gemStore', []);
  app.controller('StoreController', function(){
    this.product = gem;
  });
})();
