angular.module('components', [])
    .directive('timer', function () {
        return {
            restrict: 'E',

            templateUrl: '../app/templates/timer.html',

            scope: {
                duration: '@',
                autostart: '@'
            },

            replace: false,

            link: function (scope) {
                scope.$watch('duration', function (_duration) {
                    if (scope.autostart && _duration.length) {
                        setTimeout(function () {
                            scope.start();
                        }, 1);
                    }
                });
            },

            controller: function ($rootScope, $scope) {
                var timerInterval = null,
                    secondsLeft,
                    duration;

                $scope.duration = 0;

                $scope.reset = function () {
                    $scope.stop();


                    timerInterval = -1;

                    secondsLeft = $scope.duration;
                    duration = parseFloat(secondsLeft) * 1000;

                };

                $scope.restart = function () {
                    $scope.stop();
                    $scope.reset();
                    setTimeout(function () {
                        $scope.$apply(function () {
                            $scope.start();
                        });
                    }, 1);
                };

                $scope.start = function () {
                    $scope.reset();
                    timerInterval = setInterval(function () {
                        $scope.$apply(function () {});
                        secondsLeft -= 1 / 100;
                    }, 10);
                    $scope.$emit('timer_started');
                };

                $scope.stop = function (ended) {
                    if (timerInterval) {
                        clearInterval(timerInterval);
                        timerInterval = ended ? null : -1;
                        if (ended) {
                            $scope.$emit('timer_ended');
                        } else {
                            $scope.$emit('timer_stopped');
                        }
                    }
                };

                $scope.getTimerStatus = function () {
                    var status = 'stopped';
                    if (timerInterval === null) {
                        status = 'ended';
                    } else if (timerInterval !== -1) {
                        status = 'started';
                    }
                    return status;
                };

                $scope.getReadableCurrentTime = function () {
                    var secs = secondsLeft < 0 ? 0 : secondsLeft,
                        split = 60,
                        min = 0,
                        rsecs = 0,
                        rmins = 0;

                    if (secs > split) {
                        min = Math.floor(secs / split).toFixed(0);
                        rsecs = (secs % split).toFixed(0);
                    } else {
                        rsecs = (secs * 1).toFixed(0);
                    }

                    if (rsecs < 10) {
                        rsecs = "0" + rsecs;
                    }

                    if (min < 10) {
                        min = "0" + min;
                    }

                    rmins = min + ":" + rsecs;
                    return rmins;
                };

                $scope.reset();
                $rootScope.$broadcast('timer_initialized');
            }
        }
    });


