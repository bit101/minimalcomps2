default:
	@cat \
	src/component.js \
	src/button.js \
	src/checkbox.js \
	src/hslider.js \
	src/label.js \
	src/panel.js \
	src/progressbar.js \
	src/radiobutton.js \
	src/radiobuttongroup.js \
	src/style.js \
	src/textarea.js \
	src/textinput.js \
	src/vslider.js \
	src/colorpicker.js \
	src/numericstepper.js \
	> dist/temp.js

	@rollup dist/temp.js --file dist/minimalcomps.js --format iife --name mc2
	@rollup dist/temp.js --file dist/minimalcomps.mjs --format es

	@rm dist/temp.js
	@cp dist/minimalcomps.js demos/globaldemo/
	@cp dist/minimalcomps.mjs demos/moduledemo/
