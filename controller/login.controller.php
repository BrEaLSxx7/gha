<?php
require_once '../model/login.model.php';
require_once '../view/json.php';
$pass=$_GET['pass'];
$number=$_GET['number'];
$tipe=$_GET['roltipo'];
$data=array('pass'=>$pass,'number'=>$number,'roltipo'=>$tipe);
$login=new Login();
$login->login($data);
$salidaJSON=$login->response;
$response=new Response($salidaJSON);
echo $response->response();