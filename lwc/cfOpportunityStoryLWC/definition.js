let definition = 
                {"GlobalKey__c":"Opportunity Story LWC/Vlocity/2/1580726167009","dataSource":{"type":null},"enableLwc":true,"filter":{"['objAPIName']":"Opportunity"},"sessionVars":[],"states":[{"blankStateCheck":false,"collapse":false,"conditions":{"group":[{"field":"$scope.data.status","operator":"===","type":"system","value":"'active'"},{"field":"['onGoing']","logicalOperator":"&&","operator":"==","type":"custom","value":"false"}]},"definedActions":{"actions":[]},"disableAddCondition":false,"fields":[{"collapse":true,"editing":false,"fieldType":"standard","label":"Stage","name":"['subtitle']","type":"string"},{"collapse":true,"editing":false,"fieldType":"standard","label":"Amount","name":"['highlight']","type":"string"}],"filter":"$scope.data.status === 'active' && $scope.obj['onGoing'] == false","flyout":{"lwc":{"DeveloperName":"storyEditStateFlyout","Id":"0Rb5f000000dOS8CAI","MasterLabel":"storyEditStateFlyout","name":"storyEditStateFlyout"}},"flyoutAttributes":[{"name":"parent","val":"$scope.obj"}],"lwc":{"DeveloperName":"storyNormalState","Id":"0Rb5f000000dOSACAI","MasterLabel":"storyNormalState","name":"storyNormalState"},"name":"Opportunity","sObjectType":"Opportunity","templateUrl":"story-card"},{"collapse":false,"conditions":{"group":[{"field":"$scope.data.status","operator":"===","type":"system","value":"'active'"},{"field":"['onGoing']","logicalOperator":"&&","operator":"==","type":"custom","value":"true"}]},"definedActions":{"actions":[]},"disableAddCondition":false,"fields":[{"collapse":true,"displayLabel":"['subtitle']","editing":false,"fieldType":"standard","group":"Custom Properties","label":"Stage","name":"['subtitle']","type":"string"},{"collapse":true,"displayLabel":"['highlight']","editing":false,"fieldType":"standard","group":"Custom Properties","label":"Amount","name":"['highlight']","type":"string"}],"filter":"$scope.data.status === 'active' && $scope.obj['onGoing'] == true","flyout":{"lwc":{"DeveloperName":"storyEditStateFlyout","Id":"0Rb5f000000dOSBCAY","MasterLabel":"storyEditStateFlyout","name":"storyEditStateFlyout"}},"flyoutAttributes":[{"name":"parent","val":"$scope.obj"}],"lwc":{"DeveloperName":"storyOngoingState","Id":"0Rb5f000000dOS9CAY","MasterLabel":"storyOngoingState","name":"storyOngoingState"},"name":"Opportunity Ongoing","templateUrl":"story-card"}],"title":"Opportunities"}; 
            export default definition