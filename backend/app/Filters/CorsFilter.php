<?php

namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

class CorsFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        // Allow from any origin (You can specify your frontend URL instead of "*")
        header("Access-Control-Allow-Origin: *");

        // Allowed HTTP methods
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

        // Allowed headers
        header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

        // Allow preflight request
        if ($request->getMethod() == 'options') {
            return \Config\Services::response()->setStatusCode(200);
        }
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // Optional: you can add more post-response handling here
    }
}
