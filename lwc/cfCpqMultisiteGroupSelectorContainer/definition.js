let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"{\"selectedGroupType\":\"\",\n\"groupMemberTypeList\":\"\"}","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1632370250969-8bw66hfe9","label":"Load Member Types","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"groupMemberTypeList","fieldValue":"{action.optionList}"}],"id":"flex-action-1632241277142","type":"cardAction"}}],"channelname":"cpq_groups_{recordId}","displayLabel":"cpq_groups_{recordId}:loadgroumemberlist","element":"action","eventLabel":"pubsub","eventname":"loadgroumemberlist","eventtype":"pubsub","key":"event-0","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1632370250969-7rvvhp01l","label":"Set Selected Member Type","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"selectedGroupType","fieldValue":"{action.selectedGroupType}"}],"id":"flex-action-1632241047962","type":"cardAction"}}],"channelname":"cpq_groups_{recordId}","displayLabel":"cpq_groups_{recordId}:setmembertype","element":"action","eventLabel":"pubsub","eventname":"setmembertype","eventtype":"pubsub","key":"event-1","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":false,"isOpen":true,"key":"1632370250969-2dk331vyi","label":"Change selected group type","stateAction":{"eventName":"cpq_groups_{recordId}","extraParams":{"selectedGroupType":"{action.value}"},"hasExtraParams":true,"id":"flex-action-1632370268558","message":"setgroupsbasedonselectedgrouptype","subType":"PubSub","type":"Event"}}],"channelname":"groupTypeSearch_{recordId}","displayLabel":"groupTypeSearch_{recordId}:baseinputvaluechange","element":"action","eventLabel":"pubsub","eventname":"baseinputvaluechange","eventtype":"pubsub","key":"event-2","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqMultisiteGroupSelectorContainer_1_Vlocity","Id":"0Rb8V000000xCaW0A2","ManageableState":"unmanaged","MasterLabel":"cfCpqMultisiteGroupSelectorContainer_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"selectableMode":"Multi","states":[{"actions":[],"childCards":["cpqMultiSiteGroupsContainer"],"components":{"layer-0":{"children":[{"children":[{"children":[{"class":"slds-col ","element":"baseInputElement","elementLabel":"multisite-group-type-dropdown-container-Select-1","key":"element_element_element_block_0_0_block_0_0_baseInputElement_0_0","name":"Select","parentElementKey":"element_element_block_0_0_block_0_0","property":{"action":{"actionData":{"card":"{card}","stateAction":{"displayName":"Action","eventName":"cpq_{recordid}","extraParams":{"activeOnly":"true"},"hasExtraParams":true,"id":"flex-action-1632218406381","message":"loadGroupMemberTypeList","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}"},"eventType":"onchange","iconName":"standard-default","label":"Action","name":""},"card":"{card}","propertyObj":{"action":{"actionData":{"card":"{card}","stateAction":{"displayName":"Action","eventName":"cpq_{recordid}","extraParams":{"activeOnly":"true"},"hasExtraParams":true,"id":"flex-action-1632218406381","message":"loadGroupMemberTypeList","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}"},"eventType":"onchange","iconName":"standard-default","label":"Action","name":""},"customProperties":[{"id":0,"label":"options","value":"{groupMemberTypeList}"},{"id":1,"label":"value","value":"{selectedGroupType}"},{"id":2,"label":"name","value":"groupTypeSearch_{recordId}"}],"fieldBinding":"","label":" ","options":[],"type":"combobox","value":""},"record":"{record}","type":"combobox"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-group-name-dropdown","container":{"class":""},"customClass":"cpq__multisite-group-name-dropdown","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-group-name-dropdown","container":{"class":""},"customClass":"cpq__multisite-group-name-dropdown","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"multisite-group-type-dropdown-container","key":"element_element_block_0_0_block_0_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-group-type-container","container":{"class":""},"customClass":"cpq__multisite-group-type-container","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-group-type-container","container":{"class":""},"customClass":"cpq__multisite-group-type-container","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true},{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"multisite-group-selector-dropdown","key":"element_element_element_block_0_0_block_1_0_childCardPreview_0_0","name":"FlexCard","parentElementKey":"element_element_block_0_0_block_1_0","property":{"cardName":"cpqMultiSiteGroupsContainer","cardNode":"","isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"11","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-group","container":{"class":""},"customClass":"cpq__multisite-group","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-group","container":{"class":""},"customClass":"cpq__multisite-group","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"multisite-group-name-dropdown-container","key":"element_element_block_0_0_block_1_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-group-name-container","container":{"class":""},"customClass":"cpq__multisite-group-name-container","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-group-name-container","container":{"class":""},"customClass":"cpq__multisite-group-name-container","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"Container-block","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-group-selector-container","container":{"class":""},"customClass":"cpq__multisite-group-selector-container","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-group-selector-container","container":{"class":""},"customClass":"cpq__multisite-group-selector-container","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true},{"class":"slds-col ","element":"customLwc","elementLabel":"Custom LWC-1","name":"Custom LWC","property":{"cartType":"Quote","channelName":"cpq_groups_{recordId}","contextId":"{recordId}","currentTabName":"summary","customEventName":"multisite","customlwcname":"cpqMultiSiteUtil","getGroupMembersIPName":"MultiSite_GetGroupMembers","getGroupMembersTypeListIPName":"MultiSite_GetMemberTypeList","getGroupsIPName":"MultiSite_GetGroups","getUngroupedRecordsIPName":"MultiSite_GetUngroupedRecords","groupsPageSize":"30","loadMoreGroupMembersLabel":"{Label.MSLoadMoreLabel}","memberType":"ServicePoint","pageSize":"10","siteKeyField":"Id.value","transformSiteColumnsMethodName":"transformSiteColumnsUsingBasicAlgo","transformSiteDataMethodName":"transformSiteDataUsingBasicAlgo"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-m-around_none cpq__group-selector","container":{"class":"slds-card"},"customClass":"cpq__group-selector","elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqMultisiteGroupSelectorContainer","Id":"a5a8V000000xH5GAAG","vlocity_cmt__GlobalKey__c":"cpqMultisiteGroupSelectorContainer/Vlocity/1/1631775084784"};
  export default definition