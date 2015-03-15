'use strict';

angular.module('angular.google.distance', [])
	.value('googleMaps', google.maps)
	.provider('GoogleDistanceAPI', function() {

		var defaults = {
			unitSystem: null,
			durationInTraffic: false,
			avoidHighways: false,
			avoidTolls: false
		};

		this.$get = function($rootScope, $q, googleMaps, $window) {
			var _travelModes = [];
			var _unitSystems = [];

			_travelModes.driving = googleMaps.TravelMode.DRIVING;
			_travelModes.bicycling = googleMaps.TravelMode.BICYCLING;
			_travelModes.transit = googleMaps.TravelMode.TRANSIT;
			_travelModes.walking = googleMaps.TravelMode.WALKING;
			
			_unitSystems.metric = googleMaps.UnitSystem.METRIC;
			_unitSystems.imperial = googleMaps.UnitSystem.IMPERIAL;

			function exec(args) {
				var req = angular.copy(defaults, {});
				angular.extend(req, args);
				var deferred = $q.defer();
				var elem, service;

				function callback(results, status) {
					if (status === googleMaps.DistanceMatrixStatus.OK || status === googleMaps.DistanceMatrixStatus.ZERO_RESULTS) {
						$rootScope.$apply(function() {
							return deferred.resolve(results);
						});
					} else {
						$rootScope.$apply(function() {
							return deferred.reject(status);
						});
					}
				}
				if (req.map) {
					elem = req.map;
				} else if (req.elem) {
					elem = req.elem;
				} else {
					elem = $window.document.createElement('div');
				}
				service = new googleMaps.DistanceMatrixService();
				service.getDistanceMatrix(req, callback);
				return deferred.promise;
			}

			return {
				getDistanceMatrix: function(args) {
					args.travelMode = _travelModes[args.travelMode] || googleMaps.TravelMode.DRIVING;
					args.unitSystem = _unitSystems[args.unitSystem] || googleMaps.UnitSystem.METRIC;
					return exec(args);
				}
			};
		};

		this.$get.$inject = ['$rootScope', '$q', 'googleMaps', '$window'];

});

