#!make

logs:
	docker-compose logs -f;

api-logs:
	docker logs -f --tail 100 pokemon_api;

db-logs:
	docker logs -f --tail 100 pokemon_postgres;

build:
	yarn;
	docker-compose build;
	docker-compose up -d;
	docker-compose exec api npx sequelize-cli db:migrate;

rebuild:
	docker-compose down;
	sudo rm -rf data;
	yarn;
	docker-compose build;
	docker-compose up -d;
	docker-compose exec api npx sequelize-cli db:migrate;

start:
	docker-compose up -d;

stop:
	docker-compose down;

db-migrate:
	docker-compose exec api npx sequelize-cli db:migrate;

db-seed:
	docker-compose exec api npx sequelize-cli db:seed:all;

