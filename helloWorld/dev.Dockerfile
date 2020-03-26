FROM node:12-alpine
USER node
WORKDIR /usr/src/app
CMD ["tail","-f","/dev/null"]