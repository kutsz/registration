<?php
require_once 'Model.php';

Model::db_connection();

// $text = $_POST["text"];
  $id = $_POST["id"];


//if(isset($text)){
	// $ter_pid = Model::getPlace_by_id($text);
	// $place = [];
	// $place = Model::getList_places($ter_pid);
if(isset($id)){

	$place = [];
	$place = Model::getList_places($id);


	foreach ($place as $placeItem){
		echo "<option id = ".$placeItem['ter_id'].">{$placeItem['ter_name']}</option>";
		//echo "<option>$placeItem</option>";
	}

}

