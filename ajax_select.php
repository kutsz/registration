<?php
require_once 'Model.php';

Model::db_connection();

$text = $_POST["text"];

if(isset($text)){
	$ter_pid = Model::getPlace_by_id($text);
	$place = [];
	$place = Model::getList_places($ter_pid);

	foreach ($place as $placeItem){
		echo "<option>$placeItem</option>";
	}

}

