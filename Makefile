SHELL='/bin/bash'

server-up:
	make npm-install
	docker-compose \
		--file docker/docker-compose.yml \
		up \
		--build \

npm-install:
	docker run \
			--rm \
			--tty \
			--interactive \
			--workdir /app \
			--volume "$(PWD)":/app \
			--user 1000:1000 \
			node:12.7.0 npm install

npm-install-package:
	docker run \
			--rm \
			--tty \
			--interactive \
			--workdir /app \
			--volume "$(PWD)":/app \
			--user 1000:1000 \
			node:12.7.0 npm install $(PACKAGE)

npm-install-dev-package:
	docker run \
			--rm \
			--tty \
			--interactive \
			--workdir /app \
			--volume "$(PWD)":/app \
			--user 1000:1000 \
			node:12.7.0 npm install --save-dev $(PACKAGE)

npm-uninstall-package:
	docker run \
			--rm \
			--tty \
			--interactive \
			--workdir /app \
			--volume "$(PWD)":/app \
			--user 1000:1000 \
			node:12.7.0 npm uninstall $(PACKAGE)

npm-test:
	docker run \
			--rm \
			--tty \
			--interactive \
			--workdir /app \
			--volume "$(PWD)":/app \
			--user 1000:1000 \
			node:12.7.0 npm test
