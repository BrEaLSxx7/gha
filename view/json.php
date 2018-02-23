<?php
class Response{
    private $user;
    function _construct($data){
        $this->user=$data;
    }
    function response (){
        return json_encode($this->user);
    }
}