<?php
require_once '../view/json.php';
$id=$_POST['id'];
$usu=$_POST['usu'];
session_start();
if($id==$_SESSION['usu_id'] && $usu==$_SESSION['sesion']){
    $respuesta=TRUE;
}else{
    $respuesta=false;
}
$salidaJSON= $respuesta;
$response=new Response($salidaJSON);
echo $response->response();
?>