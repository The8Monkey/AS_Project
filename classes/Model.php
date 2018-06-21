<?php
/**
 * Created by PhpStorm.
 * User: Clemens
 * Date: 21.06.2018
 * Time: 19:46
 */

class Model
{
    /** @var array */
    private $data = [
        'name' => 'all',
        'value' => 0,
        'children' => [

        ]
    ];

    public function getAll(){

    }

    public function getSingleYear($year){
        $db = new PDO('mysql:host=localhost;dbname=oszimt', 'root', '');
       /* $query = 'SELECT `code`, `name`, `geschlecht`, `' . $year .'` AS tode FROM `table 1`';

        foreach($db->query($query) as $row){
            echo $row['code'] . " ";
            echo $row['name'] . " ";
            echo $row['geschlecht']. " ";
            echo $row['tode'];
            echo "<br \>";

            if($row[''])
        }*/

        $query = 'SELECT distinct `code` FROM `table 1`';
        foreach($db->query($query) as $row){
            $result = $this->getInfoForEachCode($db, $row['code'], $year);
            $this->data['children'][] = $result;
            $this->data['value'] += $result['value'];
        }
        return $this->data;
    }

    private function getInfoForEachCode(PDO $db, $code, $year){
        $result = [
            'name' => '',
            'value' => 0,
            'children' => [
            ]
        ];
        $query = $this->getQuery('insgesamt', $year, $code);
        $stmnt = $db->query($query);

        $stmnt->execute();
        $row = $stmnt->fetch(PDO::FETCH_ASSOC);
        $result['name'] = $row['name'];
        $result['value'] = $row['tode'];

        $query = $this->getQuery('weiblich', $year, $code) ;
        $stmnt = $db->query($query);
        $stmnt->execute();
        $row = $stmnt->fetch(PDO::FETCH_ASSOC);
        $result['children'][] = ['name' => $row['geschlecht'], 'value' => $row['tode']];

        $query = $this->getQuery('maennlich', $year, $code);
        $stmnt = $db->query($query);
        $stmnt->execute();
        $row = $stmnt->fetch(PDO::FETCH_ASSOC);
        $result['children'][] = ['name' => $row['geschlecht'], 'value' => $row['tode']];

        return $result;
    }

    private function getQuery($geschlecht, $year, $code){
        return 'SELECT `name`, `geschlecht`, `' . $year .'` AS tode FROM `table 1` WHERE geschlecht = "' . $geschlecht . '" AND `code` = "' . $code .'"';
    }
}