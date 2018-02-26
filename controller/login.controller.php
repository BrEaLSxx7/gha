<?php

// importar los archivos necesarios
require_once '../model/login.model.php';
require_once '../view/json.php';

// Recibir los datos enviados desde angular js
$pass=$_POST['pass'];
$number=$_POST['number'];
$tipe=$_POST['roltipo'];
$data=array('pass'=>$pass,'number'=>$number,'roltipo'=>$tipe);

// llamar las clases y objetos requeridas
$login = new Login();
$login->log($data);
$salidaJSON= $login->response;
$response=new Response($salidaJSON);
echo $response->response();