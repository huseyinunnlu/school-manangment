<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Branch;

class BranchController extends Controller
{
    public function get()
    {
        $branches = Branch::get();
        return response()->json($branches);
    }

    public function getActiveBranches()
    {
        $branches = Branch::where('status','0')->get();
        foreach($branches as $branch){
            $branch->value = $branch->id;
        }
        return response()->json($branches);
    }

    public function create(Request $request)
    {
        $request->validate([
            'name'=>'required|max:55',
            'status'=>'required',
        ]);
        Branch::create([
            'name'=>$request->name,
            'status'=>$request->status,
        ]);
    }

    public function delete($id)
    {
        Branch::whereId($id)->first()->delete();
    }
    
    public function edit($id)
    {
        $branch = Branch::whereId($id)->first();
        return response()->json($branch);
    }

    public function update(Request $request,$id)
    {
        $request->validate([
            'name'=>'required|max:55',
            'status'=>'required',
        ]);
        Branch::whereId($id)->first()->update([
            'name'=>$request->name,
            'status'=>$request->status,
        ]);
       
    }
}
