angular.module('meApp', ['ngMaterial'])
	.config(function($mdThemingProvider) {
  		$mdThemingProvider.theme('default')
            .dark('grey',{

            })
    		

    			// 'default': '500',
    			// 'hue-1'  : '100',
    			// 'hue-2'  : '300',
    		
    .accentPalette('green',{
    	'default': '200'
   });
});
angular.module('meApp')
	.controller('meController', ['$scope', function(meController, $scope){

	}])