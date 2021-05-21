default:
	@rollup -c
	@uglifyjs dist/minimalcomps_1.0.0.js -o dist/minimalcomps_1.0.0.min.js
	@uglifyjs dist/minimalcomps_1.0.0.mjs -o dist/minimalcomps_1.0.0.min.mjs


	@cp dist/minimalcomps*.min.js demos/globaldemo/
	@cp dist/minimalcomps*.min.mjs demos/moduledemo/
