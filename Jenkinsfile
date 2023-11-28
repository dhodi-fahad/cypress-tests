pipeline{
    agent any
    environment {
        CI = 'true'
    }

    stages {

        stage('Run Tests'){

            steps {
                slackSend (message: "Starting build for ${env.JOB_NAME}")
                dir('e2e_tests'){
                    catchError(buildResult: 'FAILURE', stageResult: 'FAILURE'){

                    sh "npm i"
                    sh "npm run demo-headless"
                    sh "rm -rf node_modules"
                    }
                    publishHTML (target : [
                                            allowMissing: false,
                                            alwaysLinkToLastBuild: true,
                                            keepAll: true,
                                            reportDir: './cypress/reports/',
                                            reportFiles: 'index.html',
                                            reportName: 'rx-stable-2 e2e Tests Report',
                                            reportTitles: 'rx-stable-2 e2e Tests Report'])
                }
            }
         }

    }
  
    
    post {

        success {
            script {
                slackSend color: "good", message: "Job: ${env.JOB_NAME} with buildnumber ${env.BUILD_NUMBER} was successful! Check it out: ${env.BUILD_URL}"
            }
        }
        unstable {
            script {
                slackSend color: "warning", message: "Job: ${env.JOB_NAME} with buildnumber ${env.BUILD_NUMBER} was unstable! Check it out: ${env.BUILD_URL}"
            }
        }
        aborted {
            script {
                slackSend color: "danger", message: "Job: ${env.JOB_NAME} with buildnumber ${env.BUILD_NUMBER} its result was unclear! Check it out: ${env.BUILD_URL}"
            }
        }
        failure {
            script {
                slackSend color: "danger", message: "Job: ${env.JOB_NAME} with buildnumber ${env.BUILD_NUMBER} was failed! Check it out: ${env.BUILD_URL}"
            }
        }
    }
    
}
