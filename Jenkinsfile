pipeline {
    agent any

    environment {
        IMAGE_NAME = "aurum-cartel:latest"
        CONTAINER_NAME = "aurum-cartel"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    echo 'Building the Docker image...'
                    sh 'docker build -t ${IMAGE_NAME} .'
                }
            }
        }

        stage('Deploy Containers') {
            steps {
                script {
                    echo 'Checking if the container is already running...'
                    sh '''
                    if [ "$(docker ps -q -f name=${CONTAINER_NAME})" ]; then
                        echo "Stopping and removing existing container..."
                        docker stop ${CONTAINER_NAME}
                        docker rm ${CONTAINER_NAME}
                    fi
                    '''
                    echo 'Running the Docker container...'
                    sh 'docker run -d --name ${CONTAINER_NAME} -p 4141:4141 ${IMAGE_NAME}'
                }
            }
        }
    }

    post {
        always {
            script {
                echo 'Cleaning workspace...'
                cleanWs()
            }
        }
    }
}
