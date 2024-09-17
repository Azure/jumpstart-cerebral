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
param githubAccount string = 'dkirby-ms'

@description('Target GitHub branch')
param githubBranch string = 'main'

@description('Choice to deploy Bastion to connect to the client VM')
param deployBastion bool = false

@description('Bastion host Sku name. The Developer SKU is currently supported in a limited number of regions: https://learn.microsoft.com/azure/bastion/quickstart-developer-sku')
@allowed([
  'Basic'
  'Standard'
  'Developer'
])
param bastionSku string = 'Basic'

var templateBaseUrl = 'https://raw.githubusercontent.com/${githubAccount}/CerebralHackathon/${githubBranch}/'
var k3sArcClusterName = '${namingPrefix}-K3s-${guid}'
var k3sClusterNodesCount = 3 // Number of nodes to deploy in the K3s cluster


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

module ubuntuRancherK3sNodesDeployment 'kubernetes/ubuntuRancherNodes.bicep' = [for i in range(0, k3sClusterNodesCount): {
  name: 'ubuntuRancherK3sNodesDeployment-${i}'
  params: {
    sshRSAPublicKey: sshRSAPublicKey
    stagingStorageAccountName: toLower(stagingStorageAccountDeployment.outputs.storageAccountName)
    logAnalyticsWorkspace: logAnalyticsWorkspaceName
    templateBaseUrl: templateBaseUrl
    subnetId: mgmtArtifactsAndPolicyDeployment.outputs.subnetId
    azureLocation: location
    vmName : '${k3sArcClusterName}-Node-0${i}'
    storageContainerName: toLower(k3sArcClusterName)
    namingPrefix: namingPrefix
  }
  dependsOn: [
    ubuntuRancherK3sDeployment
  ]
}]

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
