#!make
db-start:
	docker-compose build
	docker-compose up -d

db-stop:
	docker-compose down

db-rebuild:
	docker-compose down
	sudo rm -rf data
	docker-compose build

db-migrate:
	yarn typeorm migration:run

db-migrate-revert:
	yarn typeorm migration:revert
