<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'category_id',
        'title',
        'description',
        'job_type',
        'location',
        'salary_range',
        'contract_id'
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function category()
    {
        return $this->belongsTo(JobCategory::class);
    }

    public function contract()
    {
        return $this->belongsTo(JobContract::class);
    }

    public function applications()
    {
        return $this->hasMany(Application::class);
    }
}