<?php
/**
 * Created by PhpStorm.
 * User: Clemens
 * Date: 21.06.2018
 * Time: 19:49
 */

include('classes/Controller.php');
include('classes/Model.php');

$year = $_POST['year'] ?? 1998;

$controller = new Controller();

echo json_encode($controller->getDataFromDB($year));