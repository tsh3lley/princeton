
var voteApp = angular.module('voteApp', []);

voteApp.controller('voteCtrl', function ($scope){

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


		if (id.indexOf("trump") >= 0){
			candid = "Donald Trump";
		}
		else if (id.indexOf("hillary") >= 0){
			candid = "Hillary Clinton";
		}
		else if (id.indexOf("bernie") >= 0){
			candid = "Bernie Sanders";
		}

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
		
		console.log($scope.usrData.vote.indexOf("Donald Trump"));

		console.log($scope.usrData.vote);

	}

});