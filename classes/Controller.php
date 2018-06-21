<?php
/**
 * Created by PhpStorm.
 * User: Clemens
 * Date: 21.06.2018
 * Time: 19:46
 */

class Controller
{
    public function __construct()
    {

    }

    public function getDataFromDB($year){
        $model = new Model();
        $data = $model->getSingleYear($year);
        return $data;
    }
}