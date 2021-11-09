<?php

  Route::get('v1/products', 'Api\v1\ProductController@index');
    //->name('products.index')
    //->middleware('permission:products.index');

  Route::get('v1/products/{product}', 'Api\v1\ProductController@show');
    //->name('products.show')
    //->middleware('permission:products.show');

  Route::post('v1/products', 'Api\v1\ProductController@store');
    //->name('products.store')
    //->middleware('permission:products.store');

  Route::put('v1/products/{product}', 'Api\v1\ProductController@update');
    //->name('products.update')
    //->middleware('permission:products.update');

  Route::put('v1/products/{id}/activate', 'Api\v1\ProductController@activate');
    //->name('products.activate')
    //->middleware('permission:products.activate');

  Route::put('v1/products/{id}/deactivate', 'Api\v1\ProductController@deactivate');
    //->name('products.deactivate')
    //->middleware('permission:products.deactivate');

?>