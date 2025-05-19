#!/bin/bash
gcloud auth configure-docker \
    southamerica-west1-docker.pkg.dev
docker build -t southamerica-west1-docker.pkg.dev/dsn-dev-438322/dsn-web/dsn-web:latest  .

docker push southamerica-west1-docker.pkg.dev/dsn-dev-438322/dsn-web/dsn-web:latest 

gcloud run deploy dsn-web \
    --image=southamerica-west1-docker.pkg.dev/dsn-dev-438322/dsn-web/dsn-web:latest  \
    --region=us-east1 \
    --platform=managed \
    --allow-unauthenticated \
    --port=80