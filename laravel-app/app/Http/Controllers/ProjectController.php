<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employee = Project::with("getEmployee")->get();
        // $employee->project()->sync([1,2]);
        return response()->json($employee);



    }

    public function list($id){

        $data = Project::where('id',$id)->with("getData")->get();
        return $data;
        return response()->json($data);
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $validated = $request->validate([
        //     'project_name' => 'required',
        //     'project_type' => 'required',
        //     'start_date' => 'nullable',
        //     'finish_date' => 'nullable',

        // ]);

        $create = Project::create([

            'project_name' => $request -> project_name,
            'project_type' => $request -> project_type,
            'start_date' => date("Y-m-d", strtotime($request-> start_date)),
            'finish_date' => date("Y-m-d", strtotime($request->finish_date)),

        ]);

        return response()->json([
            'status' => 201,
            'message' => 'Olusturma başarılı'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $show = Project::where('id',$id)->get();
        return response()->json($show);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $update = Project::where('id',$id)->update($request->all());

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Project::find($id)->delete();

    }
}
