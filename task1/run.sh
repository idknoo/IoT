docker compose down
chmod 600 data/replica.key
sudo chown 999 data/replica.key
sudo chgrp 999 data/replica.key
chmod +x sourceScripts/*
chmod +x targetScripts/*
docker-compose build --no-cache
docker compose up --build -d
sleep 40
curl -d @"kafka-connect/mongoSource.json" -H "Content-Type: application/json" -X POST http://localhost:8083/connectors
curl -d @"kafka-connect/mongoTarget.json" -H "Content-Type: application/json" -X POST http://localhost:8083/connectors
