FROM ruby:2.6.2-alpine

# Install system dependencies
RUN apk add --update \
    gcc \
    libc-dev \
    make \
    postgresql-dev \
    tzdata

# Add the project files
WORKDIR /srv
ADD . ./

# Install project dependencies
RUN bundle install

CMD rails s -b 0.0.0.0 -p 3001
