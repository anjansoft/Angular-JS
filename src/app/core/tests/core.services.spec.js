describe('Service: Util', function() {
  var Util;
  var MIMEtypes = [
		['video/quicktime', true],
		['video/mpeg', true],
		['application/x-troff-msvideo', true],
		['video/avi', true],
		['video/msvideo', true],
		['video/x-msvideo', true],
		['video/x-flv', true],
		['video/x-f4v', true],
		['video/mp4', true],
		['video/x-m4v', true],
		['video/x-ms-asf', true],
		['video/x-ms-wmv', true],
		['video/dvd', true],
		['video/3gpp', true],
		['video/x-matroska', true],
		['video/divx', true],
		['video/x-xvid', true],
		['video/webm', true],
		['image/bmp', false],
		['image/x-ico', false],
		['image/gif', false],
		['image/jpeg', false],
		['image/png', false],
		['image/tiff', false]
  ];

  function testValidMIME (arr) {
  	it('should check if ' + arr[0] + ' is valid', function() {
      expect(Util.isValidType(arr[0])).toBe(arr[1]);
    });
  }

  beforeEach(angular.mock.module('wistia.core'));

  beforeEach(inject(function (_Util_) {
  	Util = _Util_;
  }));

  it('should exist', function () {
  	expect(Util).toBeDefined();
  });

  describe('.isValidType()', function() {
    // A simple test to verify the method `isValidType` exists
    it('should exist', function() {
      expect(Util.isValidType).toBeDefined();
    });

    // Test for all valid MIME types and some invalids
    MIMEtypes.forEach(testValidMIME);
  });
});