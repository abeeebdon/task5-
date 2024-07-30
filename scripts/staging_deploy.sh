#!/bin/bash

set -e

cd "$(git rev-parse --show-toplevel)"
git pull origin staging
docker pull hngtechie/aivideo:staging
docker compose --project-name staging-aivideo -f docker/staging/docker-compose.yml up -d