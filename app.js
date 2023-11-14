let app = angular.module('app', []);

app.controller('AppCtrl', function ($scope) {
    $scope.notes = [];
    $scope.save = function (newTitle, newContent) {
        $scope.notes.push({ id: $scope.notes.length + 1, date: new Date(), title: newTitle, content: newContent , hidden : false });
    };




    $scope.showNote = function (note) {
        console.log(note)
        console.log($scope.notes[note.id-1].hidden);
        if ($scope.notes[note.id-1].hidden=== false) {
            $scope.notes[note.id-1].hidden= true;
        } else {
            $scope.notes[note.id-1].hidden = false;
        
        }
    };
});
