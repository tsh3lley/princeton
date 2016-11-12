
var voteApp = angular.module('voteApp', []);

voteApp.controller('voteCtrl', function ($scope){

	$scope.candids = [0, "Hillary Clinton", "Bernie Sanders", "Jill Stein", "Donald Trump"];
	$scope.finalData = [0, 0, 0, 0];

	$scope.usrData = {
		number:"",
		vote: [0,"","",""],
		voteChosen: [0, false, false, false]
	};

	$scope.saveNumber = function(number){
		if (number.length != 10){
			alert("Enter valid phone number (10 digits)");
		}
		else{
			$scope.usrData.number = number;
			//window.location.replace("/vote_screen");
			document.body.removeChild(document.getElementById("startVoteProcess"));
			document.getElementById("voteSection").style.visibility = "visible";
		}
	}

	$scope.aPick = function(id){

		var candid = "";
		var ID = parseInt(id.substring(id.length-1));

		for (var i = 1; i < $scope.candids.length; i++){
			if (id.indexOf("r"+i) >= 0)
				candid = $scope.candids[i];
		}

		/*if (id.indexOf("r1") >= 0){
			candid = $scope.candids[1];
		}
		else if (id.indexOf("r2") >= 0){
			candid = $scope.candids[2];
		}
		else if (id.indexOf("r3") >= 0){
			candid = $scope.candids[3];
		}*/

		if (document.getElementById(id).className == "btn btn-default" && !$scope.usrData.voteChosen[ID] && $scope.usrData.vote.indexOf(candid) == -1){		//picked candid
			document.getElementById(id).className = "btn btn-primary";
			$scope.usrData.voteChosen[ID] = true;
			$scope.usrData.vote[ID] = candid;
		}
		else if (document.getElementById(id).className == "btn btn-primary" && $scope.usrData.voteChosen[ID]){		
			document.getElementById(id).className = "btn btn-default";	//unpicked candid
			candid = "";
			$scope.usrData.voteChosen[ID] = false;
			$scope.usrData.vote[ID] = candid;
		}

	}

	$scope.submitVote = function(){
		for (var i = 0; i < $scope.candids.length-1; i++){
			$scope.finalData[i] = $scope.usrData.vote.indexOf($scope.candids[i+1]);
		}
		console.log($scope.finalData);
	}



});