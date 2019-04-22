FROM node:10-alpine

# Add the project files and install
WORKDIR /srv
ADD . ./
RUN yarn install

CMD yarn start
