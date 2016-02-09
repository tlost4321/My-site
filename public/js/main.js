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
    .factory('techFactory', function(){

        var techList = []

        var Tech = function(name, type, image){
            this.name = name;
            this.type = type;
            this.image = image;

            techList.push(this)
        }

        new Tech('HTML 5', 'Front-End', '../images/tags/html5.png')
        new Tech('CSS3', 'Front-End', "../images/tags/css3.jpg")
        new Tech('Bootstrap', 'Front-End', '../images/tags/bootstrap.png')
        new Tech('JavaScript', 'Front and Back-End', '../images/tags/js.png')
        new Tech('AngularJS', 'Front-End', '../images/tags/angularjs.png')
        new Tech('NodeJS', 'Back-End', '../images/tags/nodejs.png')
        new Tech('MongoDB', 'Back-End', '../images/tags/mongodb.png')
        new Tech('SQL', 'Back-End', '../images/tags/sql.png')

        return {
            Tech : Tech,
            techList : techList
        }
    })
angular.module('meApp')
	.controller('meController', ['$scope', 'techFactory', function($scope, techFactory){

        $scope.techs = techFactory.techList


	}])