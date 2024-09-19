customLocationRPOID="51dfe1e8-70c6-4de5-a08e-e18aff23d815"
resourceGroup="Cerebral"

az config set extension.use_dynamic_install=yes_without_prompt

az connectedk8s enable-features --name $arcClusterName --resource-group $resourceGroup --features cluster-connect custom-locations --custom-locations-oid $customLocationRPOID

az extension add --upgrade --name azure-iot-ops

echo fs.inotify.max_user_instances=8192 | sudo tee -a /etc/sysctl.conf
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf

sudo sysctl -p

echo fs.file-max = 100000 | sudo tee -a /etc/sysctl.conf

sudo sysctl -p