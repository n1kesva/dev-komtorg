<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/product-categories', function () {
    return view('productCategories');
});
Route::get('/about-us', function () {
    return view('aboutUs');
});
Route::get('/product-list', function () {
    return view('productList');
});

Route::get('/cart', function () {
    return view('cart');
});

Route::get('/contacts', function () {
    return view('contacts');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
//Route::get('/product-categories', 'ProductCategoriesController@index')->name('product-categories');

