FROM ruby:2.6.2-alpine

# Install system dependencies
RUN apk add --update \
    gcc \
    libc-dev \
    make \
    postgresql-dev \
    tzdata

# Install project dependencies
ADD Gemfile .
RUN bundle install

# Add the project files
WORKDIR /srv
ADD . ./

CMD rails s -b 0.0.0.0 -p 3001
