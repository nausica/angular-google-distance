'use strict';

	describe('Get Distance', function () {

		var service,
			rootScope;

		beforeEach(function() {
			module('angular.google.distance');
			
			inject(function ($rootScope, _GoogleDistanceAPI_) {
				service = _GoogleDistanceAPI_;
				rootScope = $rootScope.$new;
			});
		});

		it('should have a getdistance function', function () { 
			expect(angular.isFunction(service.getDistanceMatrix)).toBe(true);
		});

		// TODO Override Parameters

		// Mock service response
	});
