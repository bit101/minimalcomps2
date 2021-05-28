default:
	@npm run build
	@ffreload

clean:
	@rm dist/*
	@rm out

deploy:
	@rsync -avz out/ dh_5zgt4q@bit-101.com:/home/dh_5zgt4q/minimalcomps2.com/documentation
	@rsync -avz images/ dh_5zgt4q@bit-101.com:/home/dh_5zgt4q/minimalcomps2.com/images
