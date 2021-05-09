default:
	@uglifyjs \
	src/module/component.js \
	src/module/button.js \
	src/module/checkbox.js \
	src/module/hslider.js \
	src/module/label.js \
	src/module/panel.js \
	src/module/progressbar.js \
	src/module/radiobutton.js \
	src/module/radiobuttongroup.js \
	src/module/style.js \
	src/module/textarea.js \
	src/module/textinput.js \
	src/module/vslider.js \
	-o src/minimalcomps.js
