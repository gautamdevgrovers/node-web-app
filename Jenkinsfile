pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                // Cloning the repository
                git branch: 'main',
                    url: 'https://github.com/gautamdevgrovers/node-web-app.git'
            }
        }
        stage('Build') {
            steps {
                script {
                    // Build the Docker image on Jenkins host
                    sh 'docker build -t mynodevalaapp:latest .'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Deploy the container on Jenkins host
                    sh 'docker run -d -p 3000:3000 mynodevalaapp:latest'
                }
            }
        }
    }
}
