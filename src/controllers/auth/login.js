function AuthLoginCtrl($scope, $auth, $state, $rootScope) {
  $scope.data = {};

  $scope.handleSubmit = function() {
    $auth.login($scope.data)
      .then(res => {
        $rootScope.$broadcast('currentUser', res.data.user);
        $state.go('home');
      })
      .catch(() => {
        $rootScope.$broadcast('flashMessage', {
          type: 'danger',
          content: 'Invalid credentials'
        });

        $scope.data.password = '';
      });
  };
}

export default AuthLoginCtrl;
