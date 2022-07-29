let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"[]","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":false,"isOpen":true,"key":"1633426532666-g6m7v1x8j","label":"Get Applied Filters Data","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"records","fieldValue":"{action.response}"}],"id":"flex-action-1633426536687","type":"cardAction"}}],"channelname":"cpq_{recordId}_{Parent.type}","displayLabel":"cpq_{recordId}_{Parent.type}:get_multisite_applied_filters_data","element":"action","eventLabel":"pubsub","eventname":"get_multisite_applied_filters_data","eventtype":"pubsub","key":"event-0","recordIndex":"0","showSpinner":"false"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqMultiSiteAppliedFilters_4_Vlocity","Id":"0Rb8V000000xCa6CA4","ManageableState":"unmanaged","MasterLabel":"cfCpqMultiSiteAppliedFilters_4_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"selectableMode":"Multi","states":[{"actions":[],"childCards":["cpqMultiSiteAppliedFiltersChild"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Text-1","name":"Text","property":{"card":"{card}","data-conditions":{"group":[{"field":"name","hasMergeField":false,"id":"state-new-condition-0","operator":"!=","type":"custom","value":"Default_ClearAll"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%7Blabel%7D%20:%3C/div%3E","record":"{record}"},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-applied-filters_label slds-p-right_xx-small ","container":{"class":"cpq__multisite-applied-filters_label"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"right:xx-small","size":"xx-small","type":"right"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"      \n        color:#3E3E3C; ","text":{"align":"","color":"#3E3E3C"}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-applied-filters_label slds-p-right_xx-small ","container":{"class":"cpq__multisite-applied-filters_label"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"right:xx-small","size":"xx-small","type":"right"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"      \n        color:#3E3E3C; ","text":{"align":"","color":"#3E3E3C"}}}],"type":"text"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-2","name":"FlexCard","property":{"cardName":"cpqMultiSiteAppliedFiltersChild","cardNode":"{record.appliedFilterValue}","isChildCardTrackingEnabled":false,"parentAttribute":{"name":"{name}","recordId":"{Parent.recordId}","type":"{Parent.type}"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"10","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-applied-filters_child-card ","container":{"class":"cpq__multisite-applied-filters_child-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"10","isResponsive":false},"sizeClass":"slds-size_10-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-applied-filters_child-card ","container":{"class":"cpq__multisite-applied-filters_child-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"10","isResponsive":false},"sizeClass":"slds-size_10-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"}]}},"conditions":{"group":[{"field":"appliedFilterValue.length","hasMergeField":false,"id":"state-new-condition-0","operator":">","type":"custom","value":"0"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-horizontal_x-small slds-m-around_none ","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"horizontal:x-small","size":"x-small","type":"horizontal"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqMultiSiteAppliedFilters","uniqueKey":"{code}","Id":"a5a8V000000xH47AAG","vlocity_cmt__GlobalKey__c":"cpqMultiSiteAppliedFilters/Vlocity/3/1632739936478"};
  export default definition