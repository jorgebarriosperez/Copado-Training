let definition = 
                {"GlobalKey__c":"Event Story LWC/Vlocity/2/1580726144391","dataSource":{"type":null},"enableLwc":true,"filter":{"['objAPIName']":"Event"},"states":[{"blankStateCheck":false,"collapse":false,"conditions":{"group":[{"field":"$scope.data.status","operator":"===","type":"system","value":"'active'"},{"field":"['onGoing']","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}]},"definedActions":{"actions":[]},"disableAddCondition":false,"fields":[{"collapse":true,"editing":true,"fieldType":"standard","label":"Account","name":"['parentName']","relationshipId":"parentId","relationshipTypeField":"parentObjAPIName","type":"string"},{"collapse":true,"editing":true,"fieldType":"standard","label":"Time","name":"['strActivityDate']","type":"string"},{"collapse":true,"editing":false,"fieldType":"standard","label":"Location","name":"['subtitle']","relationshipType":"_map","type":"string"},{"collapse":true,"editing":false,"fieldType":"standard","label":"Type","name":"['highlight']","type":"string"}],"filter":"$scope.data.status === 'active' && $scope.obj['onGoing'] == false","flyout":{"lwc":{"DeveloperName":"storyEditStateFlyout","Id":"0Rb5f000000dOS8CAI","MasterLabel":"storyEditStateFlyout","name":"storyEditStateFlyout"}},"flyoutAttributes":[{"name":"parent","val":"$scope.obj"}],"lwc":{"DeveloperName":"storyNormalState","Id":"0Rb5f000000dOSACAI","MasterLabel":"storyNormalState","name":"storyNormalState"},"name":"Event Normal","sObjectType":null,"templateUrl":"story-card"}],"title":"Events"}; 
            export default definition