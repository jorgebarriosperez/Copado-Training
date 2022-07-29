let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{},"type":null,"value":{}},"enableLwc":true,"isFlex":true,"lwc":{"DeveloperName":"cfCpqConfigureCartAttributes_1_Vlocity","Id":"0Rb8V000000xCYrCAG","ManageableState":"unmanaged","MasterLabel":"cfCpqConfigureCartAttributes_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"states":[{"actions":[],"childCards":["CPQAttributeConfigFields_filters"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Text-0","name":"Text","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BName%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_left ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"left","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_left ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"left","color":""}}}],"type":"text"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-1","name":"FlexCard","property":{"cardName":"CPQAttributeConfigFields_filters","cardNode":"{record.productAttributes.records}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"isChildCardTrackingEnabled":false,"parentAttribute":{"attributeCategoryId":"{id}","cartType":"{Parent.cartType}","hierarchyPath":"{Parent.hierarchyPath}","itemid":"{Parent.itemid}","vdfName":"cpqProductAttributes_{recordId}","view":"browse"},"recordId":"{recordId}","selectedState":"Text"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"}]}},"conditions":{"group":[{"field":"ParentisReadOnly","id":"state-condition-3","operator":"==","type":"custom","value":"false"},{"field":"ParentisReadOnly","id":"state-condition-4","logicalOperator":"||","operator":"==","type":"custom","value":"undefined"},{"field":"Parent.flowType","hasMergeField":false,"id":"state-new-condition-13","logicalOperator":"&&","operator":"!=","type":"custom","value":"bulkChange"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card ","container":{"class":"slds-card"},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":["CPQAttributeConfigFields_MACDBulkChange","CPQAttributeConfigFields_filters"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Text-2","name":"Text","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BName%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_left ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"left","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_left ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"left","color":""}}}],"type":"text"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-0","name":"FlexCard","property":{"cardName":"CPQAttributeConfigFields_MACDBulkChange","cardNode":"{record.productAttributes.records}","data-conditions":{"group":[{"field":"Parent.bulkAction","hasMergeField":false,"id":"state-new-condition-37","operator":"!=","type":"custom","value":"ADD"}],"id":"state-condition-object","isParent":true},"isChildCardTrackingEnabled":false,"parentAttribute":{"attributeCategoryId":"{id}","cartType":"{Parent.cartType}","hierarchyPath":"{Parent.hierarchyPath}","itemid":"{Parent.itemid}","vdfName":"cpqProductAttributesMACD_{recordId}"},"recordId":"{recordId}","selectedState":"Text"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-1","name":"FlexCard","property":{"cardName":"CPQAttributeConfigFields_filters","cardNode":"{record.productAttributes.records}","data-conditions":{"group":[{"field":"Parent.bulkAction","hasMergeField":false,"id":"state-new-condition-44","operator":"==","type":"custom","value":"ADD"}],"id":"state-condition-object","isParent":true},"isChildCardTrackingEnabled":false,"parentAttribute":{"attributeCategoryId":"{id}","cartType":"{Parent.cartType}","hierarchyPath":"{Parent.hierarchyPath}","itemid":"{Parent.itemid}","vdfName":"cpqProductAttributesMACD_{recordId}","view":"browse"},"recordId":"{recordId}","selectedState":"Text"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"}]}},"conditions":{"group":[{"field":"Parent.isReadOnly","id":"state-condition-2","operator":"==","type":"custom","value":"false"},{"field":"Parent.isReadOnly","id":"state-condition-3","logicalOperator":"||","operator":"==","type":"custom","value":"undefined"},{"field":"Parent.flowType","hasMergeField":false,"id":"state-new-condition-0","logicalOperator":"&&","operator":"==","type":"custom","value":"bulkChange"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card ","container":{"class":"slds-card"},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqConfigureCartAttributes","uniqueKey":"id","Id":"a5a8V000000xH8JAAG","vlocity_cmt__GlobalKey__c":"cpqConfigureCartAttributes/Vlocity/3/1622627926362"};
  export default definition