(function () {
	'use strict';

	/**
	 * @ngdoc component
	 * @name upload.component:wistiaUpload
	 * @description
	 *   Controller used in Homepage
	 */

	angular.module('upload')
    .component('wistiaUpload', {
    	templateUrl: 'src/app/templates/components/wistiaUpload.tpl.html',
    	controller: UploadController,
    	controllerAs: "wistia",
    	bindings: {
    		state: '=',
    		onUpdate: '&'
    	}
    });

  UploadController.$inject = ['$scope', '$sce', '$element', 'COMMON', 'Util'];
  function UploadController ($scope, $sce, $element, COMMON, Util) {
  	var setMessage = function (text, cssClass) {
  		return ({
  			text: text || '',
  			cssClass: cssClass || ''
  		});
  	};

  	var vm = this,
	  	el = angular.element($element[0].querySelector('#fileupload')),
	  	_state;

  	var _options = {
			// jQuery file upload properties
			dataType: 'json',
			dropzone: angular.element($element[0].querySelector('.upload__dropzone')),
			maxNumberOfFiles: 1,
			url: COMMON.api_url,
			formData: {
				api_password: COMMON.api_key
			},

			// jQuery file upload methods
			add: function (e, data) {
				if (!Util.isValidType(data.files[0].type)) {
					_state.message = setMessage(COMMON.messages.MIME_err, 'message--danger');
					vm.onUpdate(_state);

					return;
				} else if (data.originalFiles.length > 1) {
					_state.message = setMessage(COMMON.messages.multi_upload_err, 'message--danger');
					vm.onUpdate(_state);

					return;
				}
				_state.video.isUploading = true;
				_state.message = setMessage();
				vm.onUpdate(_state);

				data.submit();
			},
			progressall: function (e, data) {
        _state.video.value = parseInt(data.loaded / data.total * 100, 10);
				vm.onUpdate(_state);
			},
			done: function (e, data) {
				if(!!data.result && !!data.result.hashed_id) {
					_state.video.isUploading = false;
					_state.video.isUploaded = true;
					_state.video.url = $sce.trustAsResourceUrl(COMMON.embed_url  + data.result.hashed_id);
					_state.video.width = data.result.thumbnail.width;
					_state.video.height = data.result.thumbnail.height;
					_state.message = setMessage(data.result.name + COMMON.messages.partial_upload_success, 'message--success');
					vm.onUpdate(_state);
				}
			},
			fail: function (e, data) {
					_state.video.isUploading = false;
					_state.video.isUploaded = false;
					_state.message = setMessage(COMMON.messages.common_err, 'message--danger');
					vm.onUpdate(_state);
			}

		};

  	vm.$onInit = function () {
  		_state = vm.state;
			el.fileupload(_options);
  	};


  }
})();
