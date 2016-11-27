<?php
require_once 'model.php';

$text = $_POST["text"];


if(isset($text)){
	$ter_pid = getPlace_by_id($text);
	$place = [];
	$place = getList_places($ter_pid);

	foreach ($place as $placeItem){
		echo "<option>$placeItem</option>";
	}

}

