<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'id',
        'name',
        'image',
        'details',
        'discount',
        'stars',
        'price',
        'price_old',
        'price_member',
        'stars',
        'discount',
        'state',
        'brand_id',
        'category_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class)->select('id', 'name');
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class)->select('id', 'name');
    }
}
