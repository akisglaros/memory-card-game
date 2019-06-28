SHELL='/bin/bash'

npm-install:
	docker run \
			--rm \
			--tty \
			--interactive \
			--workdir /app \
			--volume "$(PWD)":/app \
			--user $(shell id -u):$(shell id -g) \
			node:12.4.0 npm install

npm-install-package:
	docker run \
			--rm \
			--tty \
			--interactive \
			--workdir /app \
			--volume "$(PWD)":/app \
			--user $(shell id -u):$(shell id -g) \
			node:12.4.0 npm install $(PACKAGE)

npm-install-dev-package:
	docker run \
			--rm \
			--tty \
			--interactive \
			--workdir /app \
			--volume "$(PWD)":/app \
			--user $(shell id -u):$(shell id -g) \
			node:12.4.0 npm install --save-dev $(PACKAGE)

npm-uninstall-package:
	docker run \
			--rm \
			--tty \
			--interactive \
			--workdir /app \
			--volume "$(PWD)":/app \
			--user $(shell id -u):$(shell id -g) \
			node:12.4.0 npm uninstall $(PACKAGE)

npm-test:
	docker run \
			--rm \
			--tty \
			--interactive \
			--workdir /app \
			--volume "$(PWD)":/app \
			--user $(shell id -u):$(shell id -g) \
			node:12.4.0 npm test
