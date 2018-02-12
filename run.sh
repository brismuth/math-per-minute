docker rm -f math

docker run -d \
	--name math \
	-p 3000:3000 \
    -v /ssd_files/math/access.log:access.log \
    -v /ssd_files/math/logs/:/root/.pm2/logs/ \
    -e VIRTUAL_HOST=mathperminute.com \
    -e "LETSENCRYPT_HOST=mathperminute.com" \
    -e "LETSENCRYPT_EMAIL=brismuth@gmail.com" \
	math

docker logs -f math