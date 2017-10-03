(function (app) {
	'use strict';

	var nameFilterCtrl = function (arr, searchString) {
		var result = [];
		var filterBy = '';

		// Init 
		if(!searchString){
			return arr;
		}

		// Filter By ...
		if (!searchString.includes('bra_')) {
			searchString = searchString.toLowerCase();
			filterBy = 'name';
		}
		else {
			searchString = searchString.slice(4, searchString.length).toLowerCase();
			filterBy = 'brand';
		}

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){
			// Filter product by product Name
			switch (filterBy) {
				case 'name': {
					if (item.name.toLowerCase().indexOf(searchString) !== -1) {
						result.push(item);
					}
				}; break;
				case 'brand': {
					if (item.brand.toLowerCase().indexOf(searchString) !== -1 || searchString === 'all') {
						result.push(item);
					}
				}; break;
			}

		});

		return result;
	};

	var nameFilter = function () {
		return nameFilterCtrl;
	};

	app.filter('nameFilter', [nameFilter]);

})(angular.module('appDemo'));