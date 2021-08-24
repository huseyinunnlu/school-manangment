<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Teacher extends Model
{
    use HasFactory;
    use Sluggable;
    protected $table = 'teachers';
    protected $fillable = ['firstName','lastName','slug','address','email','phone','gender','birth'];

    public function sluggable():array
    {
        return [
            'slug' => [
                'source' => ['firstName','lastName'],
                'onUpdate' => true,
            ]
        ];
    }

    public function branch()
    {
        return $this->hasMany('App\Models\TeacherBranch');
    }
}
