angular.module('Sample',[
])
.controller('MainCtrl',function($scope){
	$scope.Steps = [{"id":"1","text":"Step 1"},
					{"id":"2","text":"Step 2"},
					{"id":"3","text":"Step 3"},
					{"id":"4","text":"Step 4"}
					];
	$scope.actions = [
		{"id":"1","value":"http://www.google.co.in","map":"1","text":"Google"},
		{"id":"2","value":"http://www.yahoo.co.in","map":"2","text":"Yahoo"},
		{"id":"3","value":"http://www.rediffmail.com","map":"3","text":"Rediffmail"},
		{"id":"4","value":"http://www.hotmail.com","map":"4","text":"Hotmail"},
		{"id":"5","value":"http://www.linkedin.com","map":"4","text":"LinkedIn"}
	];
	
	$scope.currentStep = null;
	$scope.currentAction = null;
	$scope.isCreating=false;
	$scope.isEditing=false;
	$scope.task = {id:0,value:'',map:0,text:''};

	function resetTask(){
		$scope.task = {id:0,value:'',map:0,text:''};
	}
	
	function createTask(task){
		task.id = $scope.actions.length+1;
		task.map = $scope.currentStep.id;
		$scope.actions.push(task);		
		resetTask();
	};
	
	function saveTask(task){
		var index = _.indexOf($scope.actions,_.find($scope.actions,function(num){return num.id == task.id}));
		$scope.actions[index] = task;
		$scope.isEditing = false;
	}
	
	function deleteAction(task){
		$scope.actions = _.reject($scope.actions,function(t){
			return task.id == t.id;
		});
	}
	
	function setCurrentStep(step){
		$scope.currentStep = step;
		$scope.isCreating = false;
		$scope.isEditing = false;
	};
	
	function isCurrentStepSet(){
		return !($scope.currentStep === null);
	}
	
	
	function startCreating(){
		$scope.isCreating = true;
		$scope.isEditing = false;
		resetTask();
	}
	
	function cancelCreating(){
		$scope.currentAction = null;
		$scope.isCreating = false;
	}
	
	function startEditing(action){
		$scope.currentAction =  angular.copy(action);
		$scope.isCreating = false;
		$scope.isEditing = true;
	}
	
	function cancelEditing(){
		$scope.isEditing = false;
	}
	
	function shouldShowCreating(){
		return $scope.currentStep && !$scope.isEditing && $scope.isCreating;
	}
	
	function shouldShowEditing(){
		return $scope.currentStep && $scope.isEditing && !$scope.isCreating;
	}
	
	$scope.setCurrentStep = setCurrentStep;
	$scope.startCreating = startCreating;
	$scope.cancelCreating = cancelCreating;
	$scope.startEditing = startEditing;
	$scope.cancelEditing = cancelEditing;
	$scope.shouldShowCreating = shouldShowCreating;
	$scope.shouldShowEditing = shouldShowEditing;
	$scope.isCurrentStepSet = isCurrentStepSet;
	$scope.createTask = createTask;
	$scope.saveTask = saveTask;
	$scope.deleteAction = deleteAction;
})