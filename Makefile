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
	npx sequelize-cli db:migrate

db-seed:
	npx sequelize-cli db:seed:all
