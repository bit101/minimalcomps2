default:
	@npm run build
	@ffreload

clean:
	@rm dist/*
	@rm demos/globaldemo/minimalcomps_1.0.0.min.js
	@rm demos/moduledemo/minimalcomps_1.0.0.min.mjs

