<?xml version="1.0" encoding="utf-8"?>
<serviceModel xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" name="Curae.Azure" generation="1" functional="0" release="0" Id="eb8cbc29-de86-4375-8033-23b7d2d9e266" dslVersion="1.2.0.0" xmlns="http://schemas.microsoft.com/dsltools/RDSM">
  <groups>
    <group name="Curae.AzureGroup" generation="1" functional="0" release="0">
      <componentports>
        <inPort name="Curae:Endpoint1" protocol="http">
          <inToChannel>
            <lBChannelMoniker name="/Curae.Azure/Curae.AzureGroup/LB:Curae:Endpoint1" />
          </inToChannel>
        </inPort>
      </componentports>
      <settings>
        <aCS name="Curae:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="">
          <maps>
            <mapMoniker name="/Curae.Azure/Curae.AzureGroup/MapCurae:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </maps>
        </aCS>
        <aCS name="CuraeInstances" defaultValue="[1,1,1]">
          <maps>
            <mapMoniker name="/Curae.Azure/Curae.AzureGroup/MapCuraeInstances" />
          </maps>
        </aCS>
      </settings>
      <channels>
        <lBChannel name="LB:Curae:Endpoint1">
          <toPorts>
            <inPortMoniker name="/Curae.Azure/Curae.AzureGroup/Curae/Endpoint1" />
          </toPorts>
        </lBChannel>
      </channels>
      <maps>
        <map name="MapCurae:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" kind="Identity">
          <setting>
            <aCSMoniker name="/Curae.Azure/Curae.AzureGroup/Curae/Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </setting>
        </map>
        <map name="MapCuraeInstances" kind="Identity">
          <setting>
            <sCSPolicyIDMoniker name="/Curae.Azure/Curae.AzureGroup/CuraeInstances" />
          </setting>
        </map>
      </maps>
      <components>
        <groupHascomponents>
          <role name="Curae" generation="1" functional="0" release="0" software="C:\Users\akasht\Desktop\CuraeAnalytics\Curae\Curae.Azure\csx\Release\roles\Curae" entryPoint="base\x64\WaHostBootstrapper.exe" parameters="base\x64\WaIISHost.exe " memIndex="-1" hostingEnvironment="frontendadmin" hostingEnvironmentVersion="2">
            <componentports>
              <inPort name="Endpoint1" protocol="http" portRanges="80" />
            </componentports>
            <settings>
              <aCS name="Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="" />
              <aCS name="__ModelData" defaultValue="&lt;m role=&quot;Curae&quot; xmlns=&quot;urn:azure:m:v1&quot;&gt;&lt;r name=&quot;Curae&quot;&gt;&lt;e name=&quot;Endpoint1&quot; /&gt;&lt;/r&gt;&lt;/m&gt;" />
            </settings>
            <resourcereferences>
              <resourceReference name="DiagnosticStore" defaultAmount="[4096,4096,4096]" defaultSticky="true" kind="Directory" />
              <resourceReference name="EventStore" defaultAmount="[1000,1000,1000]" defaultSticky="false" kind="LogStore" />
            </resourcereferences>
          </role>
          <sCSPolicy>
            <sCSPolicyIDMoniker name="/Curae.Azure/Curae.AzureGroup/CuraeInstances" />
            <sCSPolicyUpdateDomainMoniker name="/Curae.Azure/Curae.AzureGroup/CuraeUpgradeDomains" />
            <sCSPolicyFaultDomainMoniker name="/Curae.Azure/Curae.AzureGroup/CuraeFaultDomains" />
          </sCSPolicy>
        </groupHascomponents>
      </components>
      <sCSPolicy>
        <sCSPolicyUpdateDomain name="CuraeUpgradeDomains" defaultPolicy="[5,5,5]" />
        <sCSPolicyFaultDomain name="CuraeFaultDomains" defaultPolicy="[2,2,2]" />
        <sCSPolicyID name="CuraeInstances" defaultPolicy="[1,1,1]" />
      </sCSPolicy>
    </group>
  </groups>
  <implements>
    <implementation Id="23244b2d-312f-49bd-8319-97cd53471d7d" ref="Microsoft.RedDog.Contract\ServiceContract\Curae.AzureContract@ServiceDefinition">
      <interfacereferences>
        <interfaceReference Id="7fb7180e-aa5b-403c-8ffa-1574aa224f6b" ref="Microsoft.RedDog.Contract\Interface\Curae:Endpoint1@ServiceDefinition">
          <inPort>
            <inPortMoniker name="/Curae.Azure/Curae.AzureGroup/Curae:Endpoint1" />
          </inPort>
        </interfaceReference>
      </interfacereferences>
    </implementation>
  </implements>
</serviceModel>