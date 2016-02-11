(function(){
    'use strict';

    angular.module('App', ['tmh.dynamicLocale'])
        .config(function(tmhDynamicLocaleProvider) {
            tmhDynamicLocaleProvider.localeLocationPattern('assets/vendor/angular-i18n/angular-locale_{{locale}}.js');
        })

}());