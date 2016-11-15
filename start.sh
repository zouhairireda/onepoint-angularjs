#!/bin/bash

docker-compose build
docker-compose up -d

echo "Server started at 192.168.99.100:3000"