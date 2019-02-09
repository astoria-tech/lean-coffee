# Astoria-arch Lean Coffee App

### The goal is to build a lean-coffee app that we can use as a group to suggest and vote on popular topics for discussion prior to the meetup. This will allow us to brainstorm more interesting topics and organize who will be in each discussion and at what time they will happen.

```ruby
  git clone git@github.com:astoria-arc/lean-coffee.git
  cd lean-coffee
  git checkout -b my_feature

  server:
  bundle install
  rake db:create
  rake db:migrate
  rails s -p 3001

  client
  cd client
  yarn install
  yarn start

  visit http://localhost:3000
  ```
  ### Tech Stack:
   - Rails-API
   - React
   - Heroku
   - Redux
   - GraphQL
   - Typescript
   - Material-UI
