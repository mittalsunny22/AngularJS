var translationsEN = {
  HEADLINE: 'What an awesome module!',
  PARAGRAPH: 'Srsly!',
  PASSED_AS_TEXT: 'Hey there! I\'m passed as text value!',
  PASSED_AS_ATTRIBUTE: 'I\'m passed as attribute value, cool ha?',
  PASSED_AS_INTERPOLATION: 'Beginners! I\'m interpolated!',
  VARIABLE_REPLACEMENT: 'Hi {{name}}',
  MISSING_TRANSLATION: 'Oops! I have not been translated into German...',
  BUTTON_LANG_DE: 'German',
  BUTTON_LANG_EN: 'English'
};
 
var translationsDE= {
  HEADLINE: 'Was für ein großartiges Modul!',
  PARAGRAPH: 'Ernsthaft!',
  PASSED_AS_TEXT: 'Hey! Ich wurde als text übergeben!',
  PASSED_AS_ATTRIBUTE: 'Ich wurde als Attribut übergeben, cool oder?',
  PASSED_AS_INTERPOLATION: 'Anfänger! Ich bin interpoliert!',
  VARIABLE_REPLACEMENT: 'Hi {{name}}',
  // MISSING_TRANSLATION is ... missing :)
  BUTTON_LANG_DE: 'Deutsch',
  BUTTON_LANG_EN: 'Englisch'
};

var app = angular.module('myApp', ['pascalprecht.translate']);
 
app.config(['$translateProvider', function ($translateProvider) {
  // add translation tables
  $translateProvider.translations('en', translationsEN);
  $translateProvider.translations('de', translationsDE);
  $translateProvider.preferredLanguage('en');
  $translateProvider.fallbackLanguage('en');
}]);
 
app.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {
 
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
}]);