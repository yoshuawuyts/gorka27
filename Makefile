all: server

server:
	httpster -p 1337

assets:
	gulp

.PHONY: all server assets
