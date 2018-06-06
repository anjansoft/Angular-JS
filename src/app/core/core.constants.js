(function () {
	'use strict';

	var COMMON = {
		api_key: "627596ae881b32ab30ab2120b2ac5e4dddd5bc560878c6f63414cd3b1e265848",
		api_url: "https://upload.wistia.com",
		embed_url: "https://fast.wistia.net/embed/iframe/",

		//Messages
		messages: {
			multi_upload_err: "You can't upload multiple videos at once.",
			common_err: "An error has occurred. Try again later.",
			partial_upload_success: " was successfully uploaded.",
			MIME_err: "Invalid file format."
		},

		//List of all valid MIME types
		validMIME: [
			'video/quicktime',
			'video/mpeg',
			'application/x-troff-msvideo',
			'video/avi',
			'video/msvideo',
			'video/x-msvideo',
			'video/x-flv',
			'video/x-f4v',
			'video/mp4',
			'video/x-m4v',
			'video/x-ms-asf',
			'video/x-ms-wmv',
			'video/dvd',
			'video/3gpp',
			'video/x-matroska',
			'video/divx',
			'video/x-xvid',
			'video/webm'
		]
	};

	angular.module('wistia.core')
		.constant('COMMON', COMMON);

})();