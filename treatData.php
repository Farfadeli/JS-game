<?php

class CsvToData
{
    private $file;
    private $strCsv = array();
    private $tableau;
    private $type;
    private $rep;

    public function __construct($files,$types)
    {
        $this->file = $files;
        $this->type = $types;
        $this->readCsv($this->file);
        $this -> tableau = new Tableau($this->strCsv);
        $this->tableau = $this->tableau->reponse();
    }
    public function readCsv()
    {
        $open = fopen($this->file, 'r');
        while (($line = fgetcsv($open)) != FALSE) {
            array_push($this->strCsv, $line);
        }
    }

    public function getTableau(){
        return $this->tableau;
    }
    public function getType(){
        return $this->type;
    }
    public function finish(){
        $res = new Data($this->tableau,$this->type);
        return $res->finish();
    }
}

class Tableau
{

    private $csv;

    public function __construct($csvs)
    {
        $this->csv = $csvs;
        $this->ParseTab();
    }

    public function ParseTab(){
        for($e = 0; $e != count($this->csv); $e++){
            $this->csv[$e] = $this->csv[$e][0];
            $this->csv[$e] = explode(";",$this->csv[$e]);
        }
    }
    public function reponse(){
        return $this->csv;
    }
}

class Data{
    private $tab;
    private $type;
    private $index;
    private $rep = array();
    private $res = array();

    public function __construct($tabs,$types)
    {
        $this->tab = $tabs;
        $this->type = $types;
        $this->getIndex();
        $this->defineValue();
    }
    public function getIndex(){
        for($e = 0; $e != count($this->tab[0]);$e++){
            if($this->tab[0][$e] == $this->type){
                $this->index = $e;
                break;
            }
        }
        unset($this->tab[0]);
    }
    public function defineValue(){
        $good = count($this->tab[1]);
        for($e = 1; $e != count($this->tab)+1;$e++){
            if(count($this->tab[$e]) == $good)
            {
                array_push($this->rep, $this->tab[$e][$this->index]);
            }
        }
    }

    public function recupyear(){
        $res = [];
        for($e = 0; $e != count($this->rep); $e++){
            if(strlen($this->rep[$e]) <= 4){
                array_push($res, "-");
            }
            else{
                $rec = $this->rep[$e][0].$this->rep[$e][1].$this->rep[$e][2].$this->rep[$e][3].$this->rep[$e][4];
                array_push($res, $rec);
            }
        }
        $this->rep = $res;
    }
    public function finish(){
        if($this->type == '"Dernière communication"')
        {
            $this->recupyear();
        }
        $rep = array_count_values($this->rep);
        $a = array();
        $b = array();
        foreach($rep as $key => $elem){
            array_push($a,$key);
            array_push($b,$elem);
        }
        array_push($this->res,$a);
        array_push($this->res,$b);
        return $this->res;
    }


    

    

}



