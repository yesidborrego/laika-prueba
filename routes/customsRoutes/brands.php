<?php

  Route::get('v1/brands', 'Api\v1\BrandController@index');
    //->name('brands.index')
    //->middleware('permission:brands.index');

  Route::get('v1/brands/{brand}', 'Api\v1\BrandController@show');
    //->name('brands.show')
    //->middleware('permission:brands.show');

  Route::post('v1/brands', 'Api\v1\BrandController@store');
    //->name('brands.store')
    //->middleware('permission:brands.store');

  Route::put('v1/brands/{brand}', 'Api\v1\BrandController@update');
    //->name('brands.update')
    //->middleware('permission:brands.update');

?>