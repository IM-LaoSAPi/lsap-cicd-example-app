pipeline {
    agent any

    tools {
        nodejs "Node_18"  // 你設定的名稱
    }

    stages {
        stage('Build & Test') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}
