pipeline {
    agent any
    stages {
        stage('Clone') {
            steps{
                git 'https://github.com/pnquang2405/Network_Social.git'
            }
        }
        stage('Build') {
            steps{
                withDockerRegistry(credentialsId: 'docker-hub', url: './Dockerfile') {
                    sh 'docker build -t pnquang/network-social:v1 .'
                    sh 'docker push pnquang/network-social:v1'
                }
            }
        }
    }
}