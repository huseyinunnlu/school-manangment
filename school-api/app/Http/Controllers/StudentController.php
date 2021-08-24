<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function get()
    {
        $students = Student::get();
        return response()->json($students);
    }

    public function create(Request $request)
    {
        $request->validate([
            'firstName'=>'required|max:50',
            'lastName'=>'required|max:50',
            'email'=>'required|email|unique:students',
            'phone'=>'required|min:11|max:11|unique:students',
            'address'=>'required:max:150',
            'birth'=>'required|date',
            'gender'=>'required',
            'status'=>'required',
        ]);

        if($request->hasFile('image')){
            $request->validate([
                'image'=>'required|image|mimes:png,jpg,jpeg|max:1024',
            ]);
            $key = '';
            $keys = array_merge(range('a', 'z'), range('A', 'Z'));
            for($i=0; $i <= 20; $i++) {
                $key .= $keys[array_rand($keys)];
            }
            $imageName = 'http://localhost:8000/uploads/'.$key.$request->image->getClientOriginalName();
            $request->image->move(public_path('uploads'), $imageName);
        }else{
            $imageName = 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg';
        }

        Student::create([
            'image'=>$imageName,
            'firstName'=>$request->firstName,
            'lastName'=>$request->lastName,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'address'=>$request->address,
            'birth'=>$request->birth,
            'gender'=>$request->gender,
            'status'=>$request->status,
        ]);
    }

    public function edit($id)
    {
        $student = Student::whereId($id)->first();
        return response()->json($student);
    }

    public function delete($id)
    {
        Student::whereId($id)->first()->delete();
    }

    public function update(Request $request,$id)
    {
        $request->validate([
            'firstName'=>'required|max:50',
            'lastName'=>'required|max:50',
            'address'=>'required:max:150',
            'birth'=>'required|date',
            'gender'=>'required',
            'status'=>'required',
        ]);
        
        if($request->hasFile('image')){
            $request->validate([
                'image'=>'required|image|mimes:png,jpg,jpeg|max:1024',
            ]);
            $key = '';
            $keys = array_merge(range('a', 'z'), range('A', 'Z'));
            for($i=0; $i <= 20; $i++) {
                $key .= $keys[array_rand($keys)];
            }
            $imageName = 'http://localhost:8000/uploads/'.$key.$request->image->getClientOriginalName();
            $request->image->move(public_path('uploads'), $imageName);
        }else{
            $imageName = 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg';
        }

        Student::whereId($id)->update([
            'image'=>$imageName,
            'firstName'=>$request->firstName,
            'lastName'=>$request->lastName,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'address'=>$request->address,
            'birth'=>$request->birth,
            'gender'=>$request->gender,
            'status'=>$request->status,
        ]);
    }
}
