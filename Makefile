default:
	@npm run build
	@ffreload

clean:
	@rm dist/*
	@rm demos/globaldemo/minimalcomps*js

