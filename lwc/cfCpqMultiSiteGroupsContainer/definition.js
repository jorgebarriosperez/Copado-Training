let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"{ \"groups\" : []} ","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1632336139905-qj2pdq0jn","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Session.groups","fieldValue":"{action.groups}"},{"fieldName":"groups","fieldValue":"{action.groups}"}],"id":"flex-action-1631695193187","type":"cardAction"}}],"channelname":"cpq_groups_{recordId}","displayLabel":"cpq_groups_{recordId}:groupsoptions","element":"action","eventLabel":"pubsub","eventname":"groupsoptions","eventtype":"pubsub","key":"event-0","recordIndex":"0","showSpinner":"false"},{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1634921002121-fsukx94zl","label":"Action","stateAction":{"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"Session.Name","fieldValue":"{action.name}"}],"id":"flex-action-1634921047145","openUrlIn":"Current Window","subType":"PubSub","type":"cardAction","vlocityIcon":"standard-default"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_multisite_new_group_selected","element":"action","eventLabel":"pubsub","eventname":"cpq_multisite_new_group_selected","eventtype":"pubsub","key":"event-1","recordIndex":"0","showSpinner":"false"}],"isFlex":true,"lwc":{"DeveloperName":"cfCpqMultiSiteGroupsContainer_1_Vlocity","Id":"0Rb8V000000xCaQ0AM","ManageableState":"unmanaged","MasterLabel":"cfCpqMultiSiteGroupsContainer_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"selectableMode":"Multi","sessionVars":[{"name":"Name","val":"Select Groups"}],"states":[{"actions":[],"childCards":["cpqMultisiteGroupListContainer"],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"action","elementLabel":"Group Dropdown Content","key":"element_element_block_0_0_action_0_0","name":"Action","parentElementKey":"element_block_0_0","property":{"card":"{card}","record":"{record}","stateAction":{"cardName":"cpqMultisiteGroupListContainer","cardNode":"{record}","displayName":"{Session.Name}","flyoutLwc":"cpqMultisiteGroupListContainer","flyoutType":"childCard","hasExtraParams":false,"id":"flex-action-1631695204282","openFlyoutIn":"Popover","openUrlIn":"Current Window","type":"Flyout","vlocityIcon":""},"stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__group-dropdown","container":{"class":""},"customClass":"cpq__group-dropdown","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__group-dropdown","container":{"class":""},"customClass":"cpq__group-dropdown","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element","userUpdatedElementLabel":true}],"class":"slds-col ","element":"block","elementLabel":"Group Dropdown","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#fff","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__group-dropdown-container","container":{"class":""},"customClass":"cpq__group-dropdown-container","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#fff;      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"#fff","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__group-dropdown-container","container":{"class":""},"customClass":"cpq__group-dropdown-container","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#fff;      \n         ","text":{"align":"","color":""}}}],"type":"block","userUpdatedElementLabel":true}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-m-around_none ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqMultiSiteGroupsContainer","Id":"a5a8V000000xH8IAAG","vlocity_cmt__GlobalKey__c":"cpqMultiSiteGroupsContainer/Vlocity/1/1631280004977"};
  export default definition