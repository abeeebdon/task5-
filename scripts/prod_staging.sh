#!/bin/bash

set -e

cd "$(git rev-parse --show-toplevel)"
git pull origin staging
docker pull hngtechie/aivideo:prod
docker compose --project-name prod-aivideo -f docker/staging/docker-compose.yml up -d