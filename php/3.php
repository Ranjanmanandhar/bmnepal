<?php   

class helper {
    static function connect() {
      // connect to database
   }
}

class database {

    function doSomething() {

        //connect to database using helper
        $db = helper::connect();

        return 'connect to data base with helper';


    }
}

