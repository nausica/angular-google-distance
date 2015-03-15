# angular-google-distance
An angular.js wrapper around the Google Distance Matrix API, inspired by [AngularJS-Google-Places](https://github.com/arunisrael/angularjs-google-places)


Bower
--
This module is available as bower package, install it with this command:

```bash
bower install angular-google-distance
```
or

```bash
bower install git://github.com/nausica/angular-google-distance.git
```

Demo
--
See this [plunker](http://embed.plnkr.co/nyklmf4ytgR2Fxfiyonh/preview)

Usage
--
- Include the [Google Maps JS library](http://maps.googleapis.com/maps/api/js?sensor=true_or_false) in your app
- Add angular-google-distance as a dependency
- Inject GoogleDistanceAPI as a dependency to your controller or other service
- Invoke the getDistanceMatrix method and pass in origins and destinations


License
--
MIT