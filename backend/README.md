## General GitHub Information 
### Folder Structure
```markdown
-> backend
    -> app
        -> __init__.py
        -> main.py
    -> venv
    -> Dockerfile
    -> README.md
    -> requirements.txt
```
### FastAPI
Example FastAPI server `main.py`
- https://fastapi.tiangolo.com/tutorial/first-steps/
```python
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}
```
### Docker Deployment
Example Dockerfile
- `backend` is added since files are not in root
- https://fastapi.tiangolo.com/deployment/docker/
```dockerfile
#
FROM python:3.9

#
WORKDIR /code

#
COPY ./backend/requirements.txt /code/requirements.txt

#
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

#
COPY ./backend/app /code/app

#
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]
```
Pulling from Docker on ARM Macs
```bash
docker pull --platform linux/x86_64 jamesliangg/hackwestern

docker run -d --name hackwestern -p 80:80 jamesliangg/hackwestern
```
### Github Actions
GitHub workflows
- change tag to DockerHub destination
- `backend` is added since files are not in root
- add `DOCKERHUB_ACCESS_TOKEN` and `DOCKERHUB_USERNAME` to `Settings -> Secrets and variables -> Actions -> Repository secrets`:
- https://itskmyoo.medium.com/automating-fastapi-project-build-with-github-actions-and-push-to-dockerhub-b4c6df319b2a
```yaml
name: FastAPI Docker Build and Push

on:
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v1
      
    - name: Login to Docker Hub
      run: echo ${{ secrets.DOCKERHUB_ACCESS_TOKEN }} | docker login -u ${{ secrets.DOCKERHUB_USERNAME }} --password-stdin

    - name: Build and push Docker image
      run: |
        docker buildx create --use
        docker buildx build \
          --file ./backend/Dockerfile \
          --tag jamesliangg/hackwestern:latest \
          --push .

    env:
      DOCKER_CLI_EXPERIMENTAL: enabled
      DOCKER_BUILDKIT: 1
```
## Developer Commands
Below are done in the `./backend` directory:
```bash
pip freeze > requirements.txt 
```
```bash
source venv/bin/activate
```
```bash
uvicorn app.main:app --reload --port 8080  
```
### References
- https://open.canada.ca/data/en/organization/pc?res_type=api
- https://github.com/open-meteo/open-meteo