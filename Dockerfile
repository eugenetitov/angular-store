FROM node:8

WORKDIR /store-web-app

# Bundle app source
COPY . .

EXPOSE 4000

RUN ["npm", "install"]

RUN ["npm", "rebuild", "node-sass", "--force"]

RUN ["npm", "run", "build:ssr"]
CMD ["npm", "run", "serve:ssr"]

# RUN npm run build

# start app
#CMD [ "npm", "rebuild node-sass --force && build:ssr && serve:ssr" ]

