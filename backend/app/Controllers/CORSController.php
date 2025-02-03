<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;

class CORSController extends BaseController
{
    use ResponseTrait;

    public function handleOptions()
    {
        return $this->respond(null, 200)
            ->setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            ->setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    }

}