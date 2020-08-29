<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class TeamRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            /**
             * TODO:: add following validation requirements
             * requires more validation:
             * 1. team must be only dark or light for side
             * 2. Can use team member only once
             */
            'name' => 'required|min:3|max:100',
            'side' => [
                'required',
                Rule::in(['light', 'dark']),
            ],
            'heroes.*.id' => 'required|exists:App\Hero,id',
            'heroes.*' => 'size:5'
        ];
    }
}
