all: vendor

vendor: build_zepto

VENDOR_PATH=vendor

build_zepto:
	cd $(VENDOR_PATH)/zepto; npm install
	cd $(VENDOR_PATH)/zepto; npm run-script dist
	mkdir -p release/js
	cp $(VENDOR_PATH)/zepto/dist/* release/js/
