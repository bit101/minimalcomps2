default:
	@uglifyjs \
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
	-o demo/minimalcomps.js
