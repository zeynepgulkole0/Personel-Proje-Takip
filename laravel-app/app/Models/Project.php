<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $fillable = ['project_name','project_type','start_date','finish_date'];

    public function getEmployee()
    {
        return $this->belongsToMany(Employee::class,Pivot::class, 'employee_id','project_id');
    }

    public function getData(){
        return $this->belongsToMany(Employee::class, Pivot::class, 'project_id','employee_id',);
    }
}
