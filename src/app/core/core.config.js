(function () {
	'use strict';
	/**
	 * @ngdoc config
	 * @name wistia.core.config:appConfig
	 * @description
	 *   App's core configuration
	 */

	angular.module('wistia.core')
		.config(appConfig);

	appConfig.$inject = ['$compileProvider'];
	function appConfig ($compileProvider) {
		$compileProvider.debugInfoEnabled(false);
		$compileProvider.commentDirectivesEnabled(false);
		$compileProvider.cssClassDirectivesEnabled(false);
  }
})();
