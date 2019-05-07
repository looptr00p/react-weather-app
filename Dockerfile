FROM node:8-alpine
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN yarn
EXPOSE 8000
CMD ["npm", "start"]