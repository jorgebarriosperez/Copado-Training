let definition =
      {"states":[{"fields":[],"conditions":{"id":"state-condition-object","isParent":true,"group":[]},"definedActions":{"actions":[]},"name":"Active","isSmartAction":false,"smartAction":{},"styleObject":{"padding":[{"type":"around","size":"x-small"}],"margin":[{"type":"around","size":"none"}],"container":{"class":"slds-card"},"size":{"isResponsive":false,"default":"12"},"sizeClass":"slds-size_12-of-12","class":"slds-card slds-p-around_x-small slds-m-bottom_x-small"},"components":{"layer-0":{"children":[{"name":"Block","element":"block","size":{"isResponsive":false,"default":"12"},"stateIndex":0,"class":"slds-col ","property":{"label":"Block","collapsible":false,"record":"{record}","collapsedByDefault":false,"card":"{card}"},"type":"block","styleObject":{"padding":[{"type":"around","size":"x-small","label":"around:x-small"}],"class":"slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-around_x-small slds-m-bottom_small ","sizeClass":"slds-size_12-of-12 ","margin":[{"type":"bottom","size":"small","label":"bottom:small"}],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"12"},"container":{"class":""},"border":{"type":["border_top","border_right","border_bottom","border_left"],"width":"","color":"#cccccc","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"box-shadow:5px 5px 5px grey;\nborder 1px solid #cccccc;","style":"     border-color:#cccccc;        box-shadow:5px 5px 5px grey;\nborder 1px solid #cccccc;"},"children":[{"key":"element_element_block_0_0_outputField_0_0","name":"Text","element":"outputField","size":{"isResponsive":false,"default":"3"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%20class=%22slds-text-heading_large%22%3E%7BContactName%7D%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_3-of-12 ","padding":[{"type":"around","size":"small","label":"around:small"}],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"3"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","class":"slds-p-around_small ","style":"             "},"parentElementKey":"element_block_0_0","elementLabel":"Block-0-Text-0"},{"key":"element_element_block_0_0_outputField_1_0","name":"Text","element":"outputField","size":{"isResponsive":false,"default":"3"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%20class=%22slds-text-title_caps%22%3E%3Cspan%20style=%22font-size:%2010pt;%22%3EEmail%3C/span%3E%3C/div%3E%0A%3Cdiv%3E%3Cspan%20style=%22font-size:%2012pt;%22%3E%7BContactEmail%7D%3C/span%3E%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_3-of-12 ","padding":[{"type":"around","size":"x-small","label":"around:x-small"}],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"3"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","class":"slds-p-around_x-small ","style":"             "},"parentElementKey":"element_block_0_0","elementLabel":"Block-0-Text-1"},{"key":"element_element_block_0_0_outputField_2_0","name":"Text","element":"outputField","size":{"isResponsive":false,"default":"3"},"stateIndex":0,"class":"slds-col ","property":{"record":"{record}","mergeField":"%3Cdiv%20class=%22slds-text-title_caps%22%3E%3Cspan%20style=%22font-size:%2010pt;%22%3EPHONE%3C/span%3E%3C/div%3E%0A%3Cdiv%3E%3Cspan%20style=%22font-size:%2012pt;%22%3E%7BContactPhone%7D%3C/span%3E%3C/div%3E","card":"{card}"},"type":"text","styleObject":{"sizeClass":"slds-size_3-of-12 ","padding":[{"type":"around","size":"x-small","label":"around:x-small"}],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"3"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","class":"slds-p-around_x-small ","style":"             "},"parentElementKey":"element_block_0_0","elementLabel":"Block-0-Text-2"},{"key":"element_element_block_0_0_action_3_0","name":"Action","element":"action","size":{"isResponsive":false,"default":"3"},"stateIndex":0,"class":"slds-col ","property":{"stateObj":"{record}","card":"{card}","record":"{record}","stateAction":{"id":"flex-action-1607651623981","type":"OmniScript","displayName":"Update Contact","vlocityIcon":"action:edit_groups","openUrlIn":"New Tab/Window","layoutType":"lightning","omniType":{"Name":"sample/editContact/English","Id":"a295f000000PbBtAAA","isLwcOs":true},"isLwcOS":true},"contextId":"\\{ContactId}"},"type":"element","styleObject":{"sizeClass":"slds-size_3-of-12 ","padding":[{"type":"around","size":"small","label":"around:small"}],"margin":[],"background":{"color":"","image":"","size":"","repeat":"","position":""},"size":{"isResponsive":false,"default":"3"},"container":{"class":""},"border":{"type":"","width":"","color":"","radius":"","style":""},"elementStyleProperties":{},"text":{"align":"","color":""},"inlineStyle":"","class":"slds-p-around_small ","style":"             "},"parentElementKey":"element_block_0_0","elementLabel":"Block-0-Action-3"}],"elementLabel":"Block-0"}]}},"childCards":[],"actions":[],"omniscripts":[{"type":"sample","subtype":"editContact","language":"English"}]}],"dataSource":{"type":"IntegrationProcedures","value":{"resultVar":"[\"Contact\"]","ipMethod":"sample_getMasterAccountDetails","vlocityAsync":false,"inputMap":{"AccountId":"{recordId}"}},"orderBy":{"name":"","isReverse":false},"contextVariables":[{"name":"recordId","val":"0015f0000048DqJAAE","id":1}]},"title":"sampleContacts","enableLwc":true,"isFlex":true,"theme":"slds","lwc":{"DeveloperName":"cfSampleContacts_1_VU","Id":"0Rb5f000000dOS3CAC","MasterLabel":"cfSampleContacts_1_VU","NamespacePrefix":"c"},"Id":"a3g5f000000PLWvQAY","GlobalKey__c":"sampleContacts/VU/1/1607648523582","IsChildCard__c":true};
  export default definition