<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Phonebook extends Model
{
   protected $fillable = [
        'created_at', 'updated_at',
    ];

}
