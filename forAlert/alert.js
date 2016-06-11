angular
.module('modalTest', ['ui.bootstrap', 'dialogs'])
.controller('dialogServiceTest', function ($scope, $rootScope, $timeout, $dialogs) {
    $scope.confirmed = 'You have yet to be confirmed!';
    $scope.name = '"Your name here."';

    $scope.launch = function (which) {
    var dlg = null;
    switch (which) {

    // Error Dialog
    // Notify Dialog
    case 'notify':
    dlg = $dialogs.notify('Times up!', 'Happy Birthday To you.');
    break;

    }
    ; // end switch
    }; // end launch


    }) // end dialogsServiceTest

