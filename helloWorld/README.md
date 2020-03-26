##Repository for KT DockerNodeJs 

#to build the image to develompent with tag "nodedev"
docker build . -f .\dev.Dockerfile -t nodedev

#run image to create a container
docker run -d --name mycontainernodedev --volume ${PWD}:/usr/src/app -p 3000:3000 nodedev 

#to connect to docker container mycontainernodedev
docker exec -it mycontainernodedev sh

#to run the app 
1. npm install
2. node index.js