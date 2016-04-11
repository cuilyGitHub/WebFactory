all: vendor

vendor: build_zepto build_angular

VENDOR_PATH=vendor

build_zepto:
	cd $(VENDOR_PATH)/zepto; npm install
	cd $(VENDOR_PATH)/zepto; npm run-script dist
	mkdir -p release/js
	cp $(VENDOR_PATH)/zepto/dist/* release/js/

build_angular:
	bower install angular --allow-root
	mkdir -p release/js
	cp bower_components/angular/angular.js release/js/
	cp bower_components/angular/angular.min.js release/js/
	cp bower_components/angular/angular.min.js.map release/js/
