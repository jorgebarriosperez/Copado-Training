<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <rules>
        <fullName>WF_CaseComment</fullName>
        <active>true</active>
        <criteriaItems>
            <field>CaseComment.CommentBody</field>
            <operation>notContain</operation>
        </criteriaItems>
        <description>WF_CaseComment</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
</Workflow>
