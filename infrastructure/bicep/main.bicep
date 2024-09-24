@maxLength(5)
@description('Random GUID')
param namingGuid string = toLower(substring(newGuid(), 0, 5))

@description('RSA public key used for securing SSH access to ArcBox resources. This parameter is only needed when deploying the DataOps or DevOps flavors.')
@secure()
param sshRSAPublicKey string = ''

@description('Random GUID for cluster names')
param guid string = substring(newGuid(),0,4)

@description('Azure location to deploy all resources')
param location string = resourceGroup().location

@description('Tags to assign for all resources')
param resourceTags object = {
  Solution: 'cerebral_hackthon'
}

@maxLength(7)
@description('The naming prefix for the nested virtual machines and all Azure resources deployed. The maximum length for the naming prefix is 7 characters.')
param namingPrefix string = 'Crbrl'

@description('Name for your log analytics workspace')
param logAnalyticsWorkspaceName string

@description('Target GitHub account')
param githubAccount string = 'Azure'

@description('Target GitHub branch')
param githubBranch string = 'main'

@description('Choice to deploy Bastion to connect to the client VM')
param deployBastion bool = true

@description('Bastion host Sku name. The Developer SKU is currently supported in a limited number of regions: https://learn.microsoft.com/azure/bastion/quickstart-developer-sku')
@allowed([
  'Basic'
  'Standard'
  'Developer'
])
param bastionSku string = 'Basic'

@minLength(5)
@maxLength(50)
@description('Name of the Azure Container Registry')
param acrName string = 'crbrlacr${namingGuid}'

var templateBaseUrl = 'https://raw.githubusercontent.com/${githubAccount}/jumpstart-cerebral/${githubBranch}/'
var k3sArcClusterName = '${namingPrefix}-K3s-${guid}'

module ubuntuRancherK3sDeployment 'kubernetes/ubuntuRancher.bicep' = {
  name: 'ubuntuRancherK3sDeployment'
  params: {
    sshRSAPublicKey: sshRSAPublicKey
    stagingStorageAccountName: toLower(stagingStorageAccountDeployment.outputs.storageAccountName)
    logAnalyticsWorkspace: logAnalyticsWorkspaceName
    templateBaseUrl: templateBaseUrl
    subnetId: mgmtArtifactsAndPolicyDeployment.outputs.subnetId
    azureLocation: location
    vmName : k3sArcClusterName
    storageContainerName: toLower(k3sArcClusterName)
    namingPrefix: namingPrefix
  }
}

module stagingStorageAccountDeployment 'mgmt/mgmtStagingStorage.bicep' = {
  name: 'stagingStorageAccountDeployment'
  params: {
    location: location
    namingPrefix: namingPrefix
  }
}

module mgmtArtifactsAndPolicyDeployment 'mgmt/mgmtArtifacts.bicep' = {
  name: 'mgmtArtifactsAndPolicyDeployment'
  params: {
    workspaceName: logAnalyticsWorkspaceName
    deployBastion: deployBastion
    bastionSku: bastionSku
    location: location
    resourceTags: resourceTags
    namingPrefix: namingPrefix
  }
}

module acr 'kubernetes/acr.bicep' = {
  name: 'acrDeployment'
  params: {
    acrName: acrName
    location: location
  }
}

module ai 'ai/ai.bicep' = {
  name: 'aiDeployment'
  params:{
    location: location
    
  }
}
