<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class HeroRequest extends FormRequest
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
            'name' => 'required|min:3|max:100',
            'side' => [
                'required',
                Rule::in(['light', 'dark']),
            ],
            'hit-points' => 'required|min:0|max:10',
            'attack' => 'required|min:0|max:10',
            'special-ability' => 'required|min:3|max:256',
        ];
    }
}
