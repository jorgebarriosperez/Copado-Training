<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>Email_alerta_de_prueba123</fullName>
        <description>Email alerta de prueba123</description>
        <protected>false</protected>
        <recipients>
            <type>accountOwner</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/MarketingProductInquiryResponse</template>
    </alerts>
    <rules>
        <fullName>Workflow_Opp_Rule</fullName>
        <actions>
            <name>Email_alerta_de_prueba123</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Opportunity.StageName</field>
            <operation>contains</operation>
            <value>Prospecting</value>
        </criteriaItems>
        <description>Workflow_Opp_Rule</description>
        <triggerType>onCreateOnly</triggerType>
    </rules>
</Workflow>
