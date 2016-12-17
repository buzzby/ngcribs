angular
	.module('ngCribs')
	.controller('cribsController', function($scope) {
		$scope.cribs = [
			{
				"type": "Condo",
				"price": "220000",
				"address": "123 Sycamore Street",
				"descripton": "This is a world away from what you are used to!"
			},
			{
				"type": "Mansion",
				"price": "14220000",
				"address": "1 Buckingham Palace Road",
				"descripton": "If you like a lot of chocolate on ya biscuits, join our club!"
			},
			{
				"type": "Garage",
				"price": "2500",
				"address": "End of my street",
				"descripton": "This is the last time i will br writing this out"
			}
			]
	});
