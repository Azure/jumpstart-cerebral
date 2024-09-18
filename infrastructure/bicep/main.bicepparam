using 'main.bicep'

param sshRSAPublicKey = '<your RSA public key>'

param logAnalyticsWorkspaceName = '<your unique Log Analytics workspace name>'

param deployBastion = false

param resourceTags = {} // Add tags as needed
