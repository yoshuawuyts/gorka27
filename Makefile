all: build server

server:
	httpster -p 1337&

build:
	gulp&

.PHONY: all build server
