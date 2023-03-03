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
    <alerts>
        <fullName>test_change_email</fullName>
        <description>test change email</description>
        <protected>false</protected>
        <recipients>
            <recipient>jbarrios@dev1copa.do</recipient>
            <type>user</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/first_email_template</template>
    </alerts>
    <rules>
        <fullName>WF_test22</fullName>
        <active>false</active>
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
    </rules>
</Workflow>