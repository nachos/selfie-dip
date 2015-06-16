'use strict';

angular.module('selfieApp')
  .directive('selfieVideo', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/selfie-video/selfie-video.template.html',
      replace: true,
      link: function (scope, element, attrs, controllers) {
        if(navigator.webkitGetUserMedia)
        {
          navigator.webkitGetUserMedia({video:true}, function(stream){
            element.attr('src', URL.createObjectURL(stream));
          }, function() {
            // fuck
          });
        }
      }
    }
  });
