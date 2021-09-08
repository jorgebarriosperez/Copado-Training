<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <fieldUpdates>
        <fullName>vlocity_cmt__UniqueNameUpdate</fullName>
        <field>vlocity_cmt__UniqueNameField__c</field>
        <formula>&apos;&apos;</formula>
        <name>UniqueNameUpdate</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>true</reevaluateOnChange>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>vlocity_cmt__UpdateCode</fullName>
        <field>vlocity_cmt__Code__c</field>
        <formula>vlocity_cmt__AutoCode__c</formula>
        <name>UpdateCode</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
        <reevaluateOnChange>true</reevaluateOnChange>
    </fieldUpdates>
    <rules>
        <fullName>vlocity_cmt__GenerateSegmentCode</fullName>
        <actions>
            <name>vlocity_cmt__UpdateCode</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <formula>ISBLANK(vlocity_cmt__Code__c)</formula>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
    <rules>
        <fullName>vlocity_cmt__UniqueAttributeName</fullName>
        <actions>
            <name>vlocity_cmt__UniqueNameUpdate</name>
            <type>FieldUpdate</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>vlocity_cmt__Attribute__c.vlocity_cmt__AutoCode__c</field>
            <operation>notEqual</operation>
        </criteriaItems>
        <triggerType>onAllChanges</triggerType>
    </rules>
</Workflow>
