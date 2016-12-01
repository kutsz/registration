<?php
require_once 'Model.php';

Model::db_connection();

$full_name = $_POST["full_name"];
$email = $_POST["e_mail"];
$area_id = $_POST["area_id"];

 if(!empty($full_name) && !empty($email) && !empty($area_id)){


	$emailList=Model::getEmailList();
	$flag = false;

	foreach ($emailList as $emailItem){
		if($email == $emailItem){
			$flag = true;
			break;
		}
	}
	
	if($flag){
		$person = Model::getPersonData($email);
		
		$namePerson = $person['name'];
		$emailPerson = $person['email'];
		$territoryPerson_id = $person['territory'];

	    $territoryPerson = Model::getAddres_ter($territoryPerson_id); 

		$result = "$namePerson,$emailPerson,$territoryPerson";
		
		echo $result;

	}else{
		$test = Model::addPerson($full_name, $email, $area_id);	
	}


}

