<?php

  Route::get('v1/categories', 'Api\v1\CategoryController@index');
    //->name('categories.index')
    //->middleware('permission:categories.index');

  Route::get('v1/categories/{category}', 'Api\v1\CategoryController@show');
    //->name('categories.show')
    //->middleware('permission:categories.show');

  Route::post('v1/categories', 'Api\v1\CategoryController@store');
    //->name('categories.store')
    //->middleware('permission:categories.store');

  Route::put('v1/categories/{category}', 'Api\v1\CategoryController@update');
    //->name('categories.update')
    //->middleware('permission:categories.update');

?>