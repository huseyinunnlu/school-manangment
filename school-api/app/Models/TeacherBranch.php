<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeacherBranch extends Model
{
    use HasFactory;
    protected $table = 'teacher_branches';
    protected $fillable = ['teacher_id','branch_id'];
    public $timestamps = false;

    public function name()
    {
        return $this->belongsTo('App\Models\Branch'::class, 'branch_id');
    }
}
