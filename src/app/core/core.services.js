(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name wistia.core.service:Util
	 * @description
	 *   Service to handle utilities used in the whole app
	 */

	angular.module('wistia.core')
    .service('Util', Util);

  Util.$inject = ['COMMON'];
  function Util (COMMON) {
  	/**
  	 * @ngdoc method
  	 * @name isValidType
  	 * @methodOf wistia.core.service:Util
  	 * @description
  	 * This method will return if a MIME type is valid for upload
  	 *
  	 * @param {String} type The MIME type to be checked
  	 *
  	 * @returns {Boolean} If is a valid MIME type
  	 */
  	this.isValidType = function (type) {
  		return COMMON.validMIME.indexOf(type) > -1;
  	}
  }
})();
