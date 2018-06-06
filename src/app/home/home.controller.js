(function () {
	'use strict';

	/**
	 * @ngdoc controller
	 * @name wistia.core.controller:HomeController
	 * @description
	 *   Controller used in Homepage
	 */

	angular.module('wistia.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope'];
  function HomeController ($scope) {
  	var vm = this;
  	vm.state = {
  		message: {
  			text: '',
  			cssClass: ''
  		},
  		video: {
	  		isUploading: false,
	  		isUploaded: false,
	  		value: 0,
	  		url: '',
	  		height: 0,
	  		width: 0
	  	}
  	};

  	vm.setState = function (state) {
  		vm.state = state;
  		$scope.$apply();
  	};
  }
})();
