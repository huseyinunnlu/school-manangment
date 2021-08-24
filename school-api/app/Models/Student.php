<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Student extends Model
{
    use HasFactory;
    use Sluggable;

    protected $table = 'students';
    protected $fillable = ['firstName','lastName','slug','image','address','email','phone','gender','status','desc','birth'];

    public function sluggable():array
    {
        return [
            'slug' => [
                'source' => ['firstName','lastName'],
                'onUpdate' => true,
            ]
        ];
    }
}
