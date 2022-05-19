<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $fillable = ['employee_name','employee_surname','project_role'];

    public function projects(){
        return $this -> belongsToMany(Project::class, Pivot::class,'employee_id','project_id');
    }

    public function getDataNext(){
        return $this->belongsToMany(Project::class, Pivot::class, 'employee_id','project_id',);
    }
}
