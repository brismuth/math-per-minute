docker rm -f math
docker run -d --name math -p 3000:3000 math
docker logs -f math