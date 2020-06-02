pipeline {
    agent {
        label 'node1'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                echo "install dependencies"
                npm install
                echo 'create build'
                npm run build
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                aws s3 cp --recursive build s3://react-burger-app-dev
            }
        }
    }
}