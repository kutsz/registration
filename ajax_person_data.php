<?php
require_once 'Model.php';

Model::db_connection();

$full_name = $_POST["full_name"];
$email = $_POST["e_mail"];
$region = $_POST["region"];
$city = $_POST["city"];
$area = $_POST["area"];

if(!empty($full_name) && !empty($email) && !empty($region) && !empty($city) && !empty($area)){

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
	 //$person = Model::get_Person_Data($email);
		
		$namePerson = $person['name'];
		$emailPerson = $person['email'];
		$territoryPerson = $person['territory'];
	//list($regionPerson,$cityPerson,$areaPerson) = explode(",", $territoryPerson);

		$result = "$namePerson,$emailPerson,$territoryPerson";
		echo $result;

	}else{
		$test = Model::addPerson($full_name, $email, $region, $city, $area);	
	}


}

