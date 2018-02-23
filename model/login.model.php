<?php
require_once './conection.php';
class Login extends Conexion{
    private $message='El sistema no se encuentra disponible';
    private $messageok=false;
    public $response;
    private function validatetype($data){
        $conexion=new Conexion();
        $stm=$conexion->query('SELECT tpd_id FROM tipo_documento WHERE tpd_nombre=:tipo');
        $stm->execute(array('tipo'=>$data));
        $resultado=$stm->fetchAll();
        return $resultado;
     }
    private function validate($data){
       $conexion=new Conexion();
       $stm=$conexion->query('SELECT usu_id, rol_id, usu_password, usu_documento FROM usuario WHERE usu_documento=:number, tipo_documento_id=:tipo');
       $stm->execute(array(':number'=>$data['number'],'tipo'=>['tipo']));
       $resultado=$stm->fetchAll();
       return $resultado;
    }
    public function login($data){
        $rol=$this->validatetype($data['roltipo']);
        $arr=array('number'=>$data['number'],'tipo'=>$rol);
        $datos=$this->validate($arr);
        if(count($datos)>0){
            $pass= $datos[0]->usu_password;
            if(password_verify($data['pass'],$pass)){
                $this-> $message='Bienvenido';
                $this->$messageok=true;
            }else{
                $this-> $message='Datos incorrectos';
                $this->$messageok=false;
            }
        }else{
            $this-> $message='Datos incorrectos';
            $this->$messageok=false;
        }
        $this->response=array('mensaje'=>$this->message,'respuesta'=>$this->messageok);
    }
    }