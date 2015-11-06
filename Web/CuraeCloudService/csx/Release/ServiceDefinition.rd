<?xml version="1.0" encoding="utf-8"?>
<serviceModel xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" name="CuraeCloudService" generation="1" functional="0" release="0" Id="d5d4dcdf-3b62-441d-bc64-889608b3c53b" dslVersion="1.2.0.0" xmlns="http://schemas.microsoft.com/dsltools/RDSM">
  <groups>
    <group name="CuraeCloudServiceGroup" generation="1" functional="0" release="0">
      <componentports>
        <inPort name="CuraeAnalytics:Endpoint1" protocol="http">
          <inToChannel>
            <lBChannelMoniker name="/CuraeCloudService/CuraeCloudServiceGroup/LB:CuraeAnalytics:Endpoint1" />
          </inToChannel>
        </inPort>
      </componentports>
      <settings>
        <aCS name="CuraeAnalytics:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="">
          <maps>
            <mapMoniker name="/CuraeCloudService/CuraeCloudServiceGroup/MapCuraeAnalytics:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </maps>
        </aCS>
        <aCS name="CuraeAnalyticsInstances" defaultValue="[1,1,1]">
          <maps>
            <mapMoniker name="/CuraeCloudService/CuraeCloudServiceGroup/MapCuraeAnalyticsInstances" />
          </maps>
        </aCS>
      </settings>
      <channels>
        <lBChannel name="LB:CuraeAnalytics:Endpoint1">
          <toPorts>
            <inPortMoniker name="/CuraeCloudService/CuraeCloudServiceGroup/CuraeAnalytics/Endpoint1" />
          </toPorts>
        </lBChannel>
      </channels>
      <maps>
        <map name="MapCuraeAnalytics:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" kind="Identity">
          <setting>
            <aCSMoniker name="/CuraeCloudService/CuraeCloudServiceGroup/CuraeAnalytics/Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </setting>
        </map>
        <map name="MapCuraeAnalyticsInstances" kind="Identity">
          <setting>
            <sCSPolicyIDMoniker name="/CuraeCloudService/CuraeCloudServiceGroup/CuraeAnalyticsInstances" />
          </setting>
        </map>
      </maps>
      <components>
        <groupHascomponents>
          <role name="CuraeAnalytics" generation="1" functional="0" release="0" software="C:\Users\akasht\documents\visual studio 2013\Projects\CuraeCloudService\csx\Release\roles\CuraeAnalytics" entryPoint="base\x64\WaHostBootstrapper.exe" parameters="base\x64\WaIISHost.exe " memIndex="-1" hostingEnvironment="frontendadmin" hostingEnvironmentVersion="2">
            <componentports>
              <inPort name="Endpoint1" protocol="http" portRanges="80" />
            </componentports>
            <settings>
              <aCS name="Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="" />
              <aCS name="__ModelData" defaultValue="&lt;m role=&quot;CuraeAnalytics&quot; xmlns=&quot;urn:azure:m:v1&quot;&gt;&lt;r name=&quot;CuraeAnalytics&quot;&gt;&lt;e name=&quot;Endpoint1&quot; /&gt;&lt;/r&gt;&lt;/m&gt;" />
            </settings>
            <resourcereferences>
              <resourceReference name="DiagnosticStore" defaultAmount="[4096,4096,4096]" defaultSticky="true" kind="Directory" />
              <resourceReference name="EventStore" defaultAmount="[1000,1000,1000]" defaultSticky="false" kind="LogStore" />
            </resourcereferences>
          </role>
          <sCSPolicy>
            <sCSPolicyIDMoniker name="/CuraeCloudService/CuraeCloudServiceGroup/CuraeAnalyticsInstances" />
            <sCSPolicyUpdateDomainMoniker name="/CuraeCloudService/CuraeCloudServiceGroup/CuraeAnalyticsUpgradeDomains" />
            <sCSPolicyFaultDomainMoniker name="/CuraeCloudService/CuraeCloudServiceGroup/CuraeAnalyticsFaultDomains" />
          </sCSPolicy>
        </groupHascomponents>
      </components>
      <sCSPolicy>
        <sCSPolicyUpdateDomain name="CuraeAnalyticsUpgradeDomains" defaultPolicy="[5,5,5]" />
        <sCSPolicyFaultDomain name="CuraeAnalyticsFaultDomains" defaultPolicy="[2,2,2]" />
        <sCSPolicyID name="CuraeAnalyticsInstances" defaultPolicy="[1,1,1]" />
      </sCSPolicy>
    </group>
  </groups>
  <implements>
    <implementation Id="14ad6770-1a05-4824-9cd0-a9dfc44f5600" ref="Microsoft.RedDog.Contract\ServiceContract\CuraeCloudServiceContract@ServiceDefinition">
      <interfacereferences>
        <interfaceReference Id="bfc5ca25-0439-41ee-9a84-1e82836dfd3c" ref="Microsoft.RedDog.Contract\Interface\CuraeAnalytics:Endpoint1@ServiceDefinition">
          <inPort>
            <inPortMoniker name="/CuraeCloudService/CuraeCloudServiceGroup/CuraeAnalytics:Endpoint1" />
          </inPort>
        </interfaceReference>
      </interfacereferences>
    </implementation>
  </implements>
</serviceModel>