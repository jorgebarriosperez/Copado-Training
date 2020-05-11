<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>Email_alerta_de_prueba</fullName>
        <description>Email alerta de prueba</description>
        <protected>false</protected>
        <recipients>
            <type>owner</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/SalesNewCustomerEmail</template>
    </alerts>
    <rules>
        <fullName>WF_test22</fullName>
        <active>true</active>
        <criteriaItems>
            <field>Case.case_text1__c</field>
            <operation>contains</operation>
        </criteriaItems>
        <criteriaItems>
            <field>Case.case_text2__c</field>
            <operation>contains</operation>
        </criteriaItems>
        <description>descripcion corruptaaaaa</description>
        <triggerType>onCreateOnly</triggerType>
        <workflowTimeTriggers>
            <actions>
                <name>Email_alerta_de_prueba</name>
                <type>Alert</type>
            </actions>
            <timeLength>0</timeLength>
            <workflowTimeTriggerUnit>Hours</workflowTimeTriggerUnit>
        </workflowTimeTriggers>
    </rules>
</Workflow>