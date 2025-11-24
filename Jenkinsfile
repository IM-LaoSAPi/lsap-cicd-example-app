pipeline {
    agent any

    stages {
        stage('Build & Test') {
            steps {
                echo "Running CI on branch: ${env.BRANCH_NAME}"
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}
