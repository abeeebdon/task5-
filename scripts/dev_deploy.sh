#!/bin/bash

set -e

cd "$(git rev-parse --show-toplevel)"
git pull origin dev
docker pull hngtechie/aivideo:dev
docker compose --project-name dev-aivideo -f docker/development/docker-compose.yml up -d