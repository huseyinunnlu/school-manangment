<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Teacher;
use App\Models\TeacherBranch;

class TeacherController extends Controller
{
    public function get()
    {
        $teachers = Teacher::with('branch.name')->get();
        return response()->json($teachers);
    }
    public function create(Request $request)
    {
        $request->validate([
            'firstName'=>'required|max:50',
            'lastName'=>'required|max:50',
            'email'=>'required|email|unique:teachers',
            'phone'=>'required|min:11|max:11|unique:teachers',
            'address'=>'required:max:150',
            'birth'=>'required',
            'gender'=>'required',
            'branch'=>'required',
        ]);
        $teacher = Teacher::create([
            'firstName'=>$request->firstName,
            'lastName'=>$request->lastName,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'address'=>$request->address,
            'gender'=>$request->gender,
            'birth'=>$request->birth,
        ]);

        if($teacher){
            $lastTeacher = Teacher::where('firstName',$teacher->firstName)->where('lastName',$teacher->lastName)->where('email',$teacher->email)->orderBy('id','desc')->select('id')->first();
            foreach($request->branch as $branch){
                TeacherBranch::create([
                    'teacher_id'=>$lastTeacher->id,
                    'branch_id'=>$branch,
                ]);
            }
        }
    }

    public function edit($id)
    {
        $teacher = Teacher::whereId($id)->with('branch.name')->first();
        $activeBranches = [];
        if($teacher->id){
            foreach($teacher->branch as $branch){
                array_push($activeBranches, $branch->name->id);
            }
        }
        $teacher->activeBranches = $activeBranches;
        return response()->json($teacher);
    }

    public function update(Request $request,$id)
    {
        $request->validate([
            'firstName'=>'required|max:50',
            'lastName'=>'required|max:50',
            'email'=>'required|email|unique:teachers,email,'.$id,
            'phone'=>'required|min:11|max:11|unique:teachers,phone,'.$id,
            'address'=>'required:max:150',
            'birth'=>'required',
            'gender'=>'required',
            'activeBranches'=>'required',
        ]);


        Teacher::whereId($id)->first()->update([
            'firstName'=>$request->firstName,
            'lastName'=>$request->lastName,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'address'=>$request->address,
            'birth'=>$request->birth,
            'gender'=>$request->gender,
        ]);

        TeacherBranch::where('teacher_id',$id)->delete();

        foreach($request->activeBranches as $branch){
            TeacherBranch::create([
                'teacher_id'=>$id,
                'branch_id'=>$branch,
            ]);
        }
    }

    public function delete($id)
    {
        Teacher::whereId($id)->delete();
    }
}
