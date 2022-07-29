let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"[\n  {\n    \"type\": \"text\",\n    \"fieldName\": \"vlocity_cmt__MarketIdentifier__c.value\",\n    \"label\": \"Market Identifier\",\n    \"title\": \"ServicePoints Data\"\n  },\n  {\n    \"type\": \"text\",\n    \"fieldName\": \"vlocity_cmt__PremisesId__r.vlocity_cmt__StreetAddress__c.value\",\n    \"label\": \"Street Address\"\n  },\n  {\n    \"type\": \"text\",\n    \"fieldName\": \"vlocity_cmt__PremisesId__r.vlocity_cmt__City__c.value\",\n    \"label\": \"City\"\n  }\n]","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":false,"isOpen":true,"key":"1632745732281-xwmv3pf1g","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Session.selectedValues","fieldValue":"{action.value}"}],"id":"flex-action-1632745750732","type":"cardAction"}}],"channelname":"cpq_filter_columns_{recordId}","displayLabel":"cpq_filter_columns_{recordId}:baseinputvaluechange","element":"action","eventLabel":"pubsub","eventname":"baseinputvaluechange","eventtype":"pubsub","key":"event-0","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqMultisiteTableColumnFilter_1_Vlocity","Id":"0Rb8V000000xCZr0AU","ManageableState":"unmanaged","MasterLabel":"cfCpqMultisiteTableColumnFilter_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"selectableMode":"Multi","sessionVars":[{"name":"selectedValues","val":"none"}],"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-1-Text-0","key":"element_element_block_0_0_outputField_0_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-heading_small%22%3E%3Cstrong%3E%7Btitle%7D%3C/strong%3E%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xxx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:xxx-small","size":"xxx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xxx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:xxx-small","size":"xxx-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-1","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[{"field":"title","hasMergeField":false,"id":"state-new-condition-0","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_x-small slds-p-bottom_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:x-small","size":"x-small","type":"top"},{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_x-small slds-p-bottom_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:x-small","size":"x-small","type":"top"},{"label":"bottom:x-small","size":"x-small","type":"bottom"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"flexIcon","elementLabel":"Block-2-Icon-0","key":"element_element_block_1_0_flexIcon_0_0","name":"Icon","parentElementKey":"element_block_1_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"selected","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"extraclass":"slds-icon_container slds-icon__svg--default ","iconName":"utility:check","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"x-small","variant":"success"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Block-2-Action-1","key":"element_element_block_1_0_action_1_0","name":"Action","parentElementKey":"element_block_1_0","property":{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"hideActionIcon":true,"isOpen":true,"key":"1635244206383-1lt5hu6z9","label":"Action","record":"{record}","stateAction":{"displayName":"{label}","eventName":"cpq_{recordId}_{Parent.type}","extraParams":{"selectedColumn":"{fieldName}"},"hasExtraParams":true,"id":"flex-action-1635244211588","message":"filterGridColumns","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}"}],"card":"{card}","flyoutDetails":{},"hideActionIcon":true,"iconName":"standard-default","label":"\\{label}","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"11","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-left_xx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"left:xx-small","size":"xx-small","type":"left"}],"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-left_xx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"left:xx-small","size":"xx-small","type":"left"}],"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-2","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq_multisite_each_group slds-p-top_xx-small slds-p-bottom_xx-small ","container":{"class":"cpq_multisite_each_group"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"},{"label":"bottom:xx-small","size":"xx-small","type":"bottom"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq_multisite_each_group slds-p-top_xx-small slds-p-bottom_xx-small ","container":{"class":"cpq_multisite_each_group"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:xx-small","size":"xx-small","type":"top"},{"label":"bottom:xx-small","size":"xx-small","type":"bottom"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq_multisite_columns_flyout slds-m-around_none ","container":{"class":"cpq_multisite_columns_flyout"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqMultisiteTableColumnFilter","Id":"a5a8V000000xH5CAAG","vlocity_cmt__GlobalKey__c":"cpqMultisiteTableColumnFilter/Vlocity/1/1632729244958"};
  export default definition