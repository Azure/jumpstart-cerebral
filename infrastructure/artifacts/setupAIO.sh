# customLocationRPOID=$(az ad sp list --filter "displayname eq 'Custom Locations RP'" --query "[?appDisplayName=='Custom Locations RP'].id" -o tsv) # needs to be run by account with Directory.Read perms on Entra tenant
customLocationRPOID="d7c8af5d-5320-435c-8d61-88d4cc0f345d" # for Azure Stack Infra Entra tenant
resourceGroup="JumpstartCerebral"
arcClusterName=$(az connectedk8s list -g $resourceGroup --query [].name -o tsv)
kvId=$(az keyvault list --resource-group $resourceGroup --query "[].id" -o tsv)
kvName=$(az keyvault list --resource-group $resourceGroup --query "[].name" -o tsv)
kvString="https://$kvName.vault.azure.net"
#oid=$()

az config set extension.use_dynamic_install=yes_without_prompt

az connectedk8s enable-features --name $arcClusterName --resource-group $resourceGroup --features cluster-connect custom-locations --custom-locations-oid $customLocationRPOID

az extension add --name azure-iot-ops --version 0.5.1b1

echo fs.inotify.max_user_instances=8192 | sudo tee -a /etc/sysctl.conf
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf

sudo sysctl -p

echo fs.file-max = 100000 | sudo tee -a /etc/sysctl.conf

sudo sysctl -p


#az keyvault set-policy --secret-permissions all --key-permissions all --name $kvName -- --resource-group $resourceGroup
appid=$(az keyvault secret show --id $kvString/secrets/SPNAppId --query value -o tsv)
appsecret=$(az keyvault secret show --id $kvString/secrets/SPNSecret --query value -o tsv)
az iot ops init --cluster $arcClusterName --resource-group $resourceGroup --kv-id $kvId --mq-insecure --sp-app-id $appid --sp-secret $appsecret

