# Docker Compose Configuration for Development and Production

This project uses two Docker Compose files to manage different environments:

-   `docker-compose.yml`: For local development.
-   `docker-compose.prod.yml`: For production deployment.

## Setup

1.  Copy the `.env.example` file to `.env`:
    ```bash
    cp .env.example .env
    ```

2.  Modify the `.env` file with your specific credentials and configuration for both development and production.

## Development

To start the services for local development (with hot-reloading):

```bash
docker-compose -f docker-compose.yml up --build
```

-   Uses `docker-compose.yml`.
-   Builds images locally based on `Dockerfile` in each service directory.
-   Mounts local source code directories into the containers for immediate code changes.
-   Exposes ports according to `.env` variables (or defaults).

## Production & CI/CD

### Basic CI/CD Flow:

1.  **Build & Push Images:** Your CI/CD pipeline (e.g., GitHub Actions, GitLab CI, Jenkins) builds the Docker images for `main`, `sso`, `vector`, and `gateway` services using their respective `Dockerfile`s.
2.  **Tag Images:** Tag the built images appropriately (e.g., with the Git commit SHA, version number, or `latest`).
3.  **Push Images:** Push the tagged images to a Docker registry (e.g., Docker Hub, AWS ECR, GCP GCR, GitLab Registry). Remember to replace `your-registry/` in `docker-compose.prod.yml` with your actual registry path.
4.  **Deploy:** On your production server:
    *   Ensure the `.env` file is present and correctly configured.
    *   Pull the latest images (or specific tags) from the registry.
    *   Run the production compose file:
        ```bash
        # Set the IMAGE_TAG if not using latest
        # export IMAGE_TAG=your-tag
        docker-compose -f docker-compose.prod.yml pull # Pull new images
        docker-compose -f docker-compose.prod.yml up -d # Start services
        ```

### Production Configuration (`docker-compose.prod.yml`):

-   Uses pre-built images specified by the `image:` directive (requires replacing `your-registry/` and potentially setting `IMAGE_TAG`).
-   Does **not** build images or mount local volumes.
-   Sets `NODE_ENV=production`.
-   Includes restart policies (`restart: always`).
-   Includes resource limits (`deploy: resources: ...`) for PostgreSQL.
-   Only exposes necessary ports (e.g., the gateway port `3000`, MinIO ports `9000`/`9001`). Internal services like `main`, `sso`, `vector`, `postgres`, and `qdrant` are not directly exposed.

## Environment Variables

Both compose files use environment variables from the `.env` file (located in the same directory as the compose files).

## Services

-   **Main Service**: Main application service
-   **SSO Service**: Authentication and authorization service
-   **Vector Service**: Vector database interface
-   **Gateway Service**: API gateway that routes requests to appropriate services
-   **PostgreSQL**: Database service
-   **MinIO**: Object storage service
-   **Qdrant**: Vector database service

## Service Communication

Services communicate with each other using their defined `hostname`s (e.g., `main`, `sso`, `postgres`, `minio`) within the Docker network.

## Network

All services are connected through a private `dps-network` for secure communication.

## Volumes

-   **postgres_data**: Persistent storage for the PostgreSQL database
-   **minio_data**: Persistent storage for MinIO object storage
-   **qdrant_data**: Persistent storage for Qdrant vector database

## Ports (Production)

-   Gateway Service: `${GATEWAY_SERVICE_PORT:-3000}` (Host) -> 3000 (Container)
-   MinIO: 9000 (API), 9001 (Console)
-   (Other service ports are not exposed externally in the default production config)

## Resource Limits (Production)

-   PostgreSQL is configured with:
    -   CPU Limit: 1.0 core
    -   Memory Limit: 2GB
    -   CPU Reservation: 0.5 cores
    -   Memory Reservation: 1GB

## PrismaORM Integration

-   The `Dockerfile` generates the Prisma client during the image build.
-   The `docker-entrypoint.sh` script handles database migrations (`npx prisma migrate deploy`) at container startup if the `PRISMA_MIGRATE=true` environment variable is set in `.env`. 