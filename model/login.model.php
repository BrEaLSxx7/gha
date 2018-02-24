<?php
require_once '../model/conection.php';
class Login extends Conexion{
    private $message='El sistema no se encuentra disponible';
    private $messageok=false;
    public $response;

    private function validatetype($data){
        $conexion = new Conexion();
        $db = $conexion->conexion();
        $stm = $db->prepare('SELECT tpd_id FROM tipo_documento WHERE tpd_nombre=:tipo');
        $stm->execute(array(':tipo'=>$data));
        $resultado=$stm->fetchAll();
        return $resultado;
     }

    private function validate($data){
       $conexion=new Conexion();
       $db=$conexion->conexion();
       $stm = $db->prepare("SELECT usu_id, rol_id, usu_password, usu_documento, usu_login, usu_actived FROM usuario WHERE usu_documento = :id_document AND tipo_documento_id =:tipo");
       $stm->execute(array(
           ':id_document'=> $data['number'],
           ':tipo'=> $data['tipo'])
        );
       $resultado=$stm->fetchAll();
       return $resultado;
    }

    public function log($data){
        $rol=$this->validatetype($data['roltipo']);
        $arr = array('number'=>$data['number'],'tipo'=> (integer)$rol[0]->tpd_id);
        $datos=$this->validate($arr);
        if(count($datos)>0){
            $pass= $datos[0]->usu_password;
            unset($datos[0]->usu_password);
            if($data['pass'] == $pass){
                $this->message='Bienvenido';
                $this->messageok=true;
            }else{
                $this->message='Datos incorrectos';
                $this->messageok=false;
            }
        }else{
            $this->message='Datos incorrectos';
            $this->messageok=false;
        }
        $this->response=array('datos'=>$datos,'mensaje'=>$this->message,'respuesta'=>$this->messageok);
    }
}