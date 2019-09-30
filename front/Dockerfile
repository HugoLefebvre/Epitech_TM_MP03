FROM node:lts-alpine

COPY . app/
WORKDIR app/

#COPY package*.json ./

RUN apk update
RUN apk add git
RUN npm install
RUN npm audit fix --force
RUN npm rebuild node-sass
RUN npm run build
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
# COPY Epitech_TM_MP02/ .


EXPOSE 8080
CMD [ "npm", "run","serve" ]
