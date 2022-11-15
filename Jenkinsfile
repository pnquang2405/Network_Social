pipeline {
    agent any
    stages {
        stage('Clone') {
            steps{
                git 'https://github.com/pnquang2405/Network_Social.git'
            }
        }
        stage('Clone') {
            steps{
                withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t pnquang/network-social:v1 .'
                    sh 'docker push pnquang/network-social:v1'
                }
            }
        }
    }
}