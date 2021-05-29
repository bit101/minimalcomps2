default:
	@npm run build
	@ffreload

clean:
	@rm out

docs:
	@npm run docs
	@rsync -avz --delete out/ dh_5zgt4q@bit-101.com:/home/dh_5zgt4q/minimalcomps2.com/documentation
	@rsync -avz --delete images/ dh_5zgt4q@bit-101.com:/home/dh_5zgt4q/minimalcomps2.com/images

