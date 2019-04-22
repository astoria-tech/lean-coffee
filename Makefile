dev: clean build prepare-db run

clean:
	docker-compose stop -t0
	docker-compose rm -f

clean-data: clean
	docker volume rm $(shell basename $(PWD))_postgres

build:
	docker-compose build

start-postgres:
	@printf '> Starting Postgres...'
	@docker-compose up -d postgres > /dev/null 2>&1
	@docker-compose exec postgres sh -c 'while ! nc -z postgres 5432; do sleep 0.1; done'
	@echo ' done'

prepare-db: start-postgres
	@docker-compose run api sh -c "rake db:create && rake db:migrate"

run:
	docker-compose up
