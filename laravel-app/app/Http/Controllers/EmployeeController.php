<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employee = Employee::with('projects')->get();

        // $adres = Employee::with('getadres')->get();
        // $employee2->project()->sync([1,2]);
        return response()->json($employee);
        // return response()->json([$employee,$adres]);
        // $employee = Employee::where("id", 1)->first()->load("project");


    }

    public function list($id){

        $data = Employee::where('id',$id)->with("getDataNext")->get();
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


            $create = Employee::create([
                'employee_name' => $request->employee_name,
                'employee_surname' => $request->employee_surname,
                'project_role' => $request->project_role,

            ]);

            //$create->projects()->sync($request->employe);

            return response()->json($create, 201);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $show=Employee::where('id',$id)->get();
        return response()->json($show);  }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

       $edit = Employee::findOrFail($id);

       return response()->json($edit);
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
        $update = Employee::where('id', $id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Employee::where('id', $id)->delete();
    }
}
