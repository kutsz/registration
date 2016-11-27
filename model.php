<?php

function open_database_connection()
{

	$link = new PDO("mysql:host=localhost;dbname=protest14;charset=utf8", 'bloguser', '123');
	return $link;
}

function close_database_connection($link)
{
	$link = null;
}

	function getRegion() 
	{        
		$link = open_database_connection();
		$result = $link->query("SELECT ter_name FROM t_koatuu_tree WHERE ter_pid IS NULL");
		$regionList = [];


		while($row = $result->fetch(PDO::FETCH_ASSOC)) {
			$regionList[] = $row['ter_name'];
		}

		close_database_connection($link);

		return $regionList;
	}

	function getPlace_by_id($id) 
	{
		$link = open_database_connection();

		$result = $link->query("SELECT ter_id FROM t_koatuu_tree WHERE ter_name = '$id'");

		$ter_id = $result->fetch();
		
		$ter_pid = $ter_id['ter_id'];

		close_database_connection($link);
		
		return $ter_pid;


	}


	function getList_places($id){

		$link = open_database_connection();

		$result = $link->query("SELECT ter_name FROM t_koatuu_tree WHERE ter_pid = '$id'");
		$placeList = [];
		while($row = $result->fetch()) {
			$placeList[] = $row['ter_name'];

		}
		close_database_connection($link);

		return $placeList;

	}


	function addPerson($full_name, $e_mail, $region, $city, $area){

		$db = open_database_connection();

		$territory ="$region, $city, $area";

		$sql = 'INSERT INTO checked_in_people (name,email,territory)' 
		.'VALUES (:name, :email, :territory)';

		$result = $db->prepare($sql);
		$result->bindParam(':name', $full_name, PDO::PARAM_STR);
		$result->bindParam(':email', $e_mail, PDO::PARAM_STR);
		$result->bindParam(':territory', $territory, PDO::PARAM_STR);

		return $result->execute();

	}


	function getEmailList(){

		$link = open_database_connection();

		$result = $link->query("SELECT email FROM checked_in_people");
		$email = [];
		while($row = $result->fetch(PDO::FETCH_ASSOC)) {
			$email[] = $row['email'];

		}
		close_database_connection($link);

		return $email;
	}


	function getPersonData($email){

		$link = open_database_connection();

		$result = $link->query("SELECT*FROM checked_in_people WHERE email = '$email'");
		$data = [];
		while($row = $result->fetch(PDO::FETCH_ASSOC)) {
			$data['id'] = $row['id'];
			$data['name'] = $row['name'];
			$data['email'] = $row['email'];
			$data['territory'] = $row['territory'];

		}
		close_database_connection($link);

		return $data;

	}


function get_Person_Data($email){   //????

	$link = open_database_connection();


	$sql = 'SELECT * FROM checked_in_people WHERE email = :email';

	$result = $db->prepare($sql);
	$result->bindParam(':email', $email, PDO::PARAM_STR);
    $result->execute();
	$arr=$result->fetchAll(PDO::FETCH_ASSOC);
	$dataPerson=[];
	foreach ($arr as $key => $value){
		$dataPerson = $value;

	} 

	close_database_connection($link);

	return $dataPerson;

}



