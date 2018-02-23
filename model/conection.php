<?php
class Conexion{
    private function conexion(){
        try{
            $conexion=new PDO('pgsql:host=localhost;dbname=gha;port=5432','postgres','root');
            $conexion->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
            $conexion->setAttribute(\PDO::ATTR_DEFAULT_FETCH_MODE, \PDO::FETCH_OBJ);
        }
        catch(PDOException $exc){
            echo $exc->getMessage();
        }
    } 
}
?>