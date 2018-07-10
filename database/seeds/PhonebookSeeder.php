<?php

use Illuminate\Database\Seeder;
use\App\Phonebook;
class PhonebookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $add_details  = new Phonebook();
        $add_details->name = "Elemson Ifeanyi";
        $add_details->email= "ielemson@gmail.com";
        $add_details->phone = "08067407355";
        $add_details->save();

    }
}
