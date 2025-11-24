pipeline {
    agent any

    tools {
        // 這個名字要跟 Jenkins 後台設定的 NodeJS 名稱一樣
        nodejs 'node-20'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
