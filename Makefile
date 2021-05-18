default:
	@rollup -c

	@cp dist/minimalcomps.js demos/globaldemo/
	@cp dist/minimalcomps.mjs demos/moduledemo/
