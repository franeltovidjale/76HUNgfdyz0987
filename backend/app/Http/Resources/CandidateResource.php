<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CandidateResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'resume' => $this->resume,
            'skills' => $this->skills,
            'experience_years' => $this->experience_years,
            'desired_salary' => $this->desired_salary,
            'temp_salary' => $this->temp_salary,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}