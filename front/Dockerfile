FROM node:lts-alpine

COPY . app/
WORKDIR app/

#COPY package*.json ./

RUN npm rebuild node-sass
RUN npm install
RUN npm run build
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
# COPY Epitech_TM_MP02/ .


EXPOSE 8080
CMD [ "npm", "run","serve" ]
