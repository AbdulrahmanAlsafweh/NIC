<?php

namespace App\Controllers;

use CodeIgniter\HTTP\ResponseInterface;
use App\Models\BlogModel;
use App\Entities\BlogEntity;
use CodeIgniter\RESTful\ResourceController;
class BlogController extends ResourceController
{

    protected $blogModel;

    public function __construct(){
        $this->blogModel = new BlogModel();
    }
    public function getBlogs()
    {
        $blogs = $this->blogModel->findAll();

        // Check if blogs are found
        if (!$blogs) {
            return $this->respond([
                'status' => 404,
                'message' => 'No blogs found'
            ], 404);
        }

        // Return successful response with data
        return $this->respond([
            'status' => 200,
            'message' => 'Blogs retrieved successfully',
            'data' => $blogs
        ], 200);
    }

    public function addBlog()
    {
        header("Access-Control-Allow-Origin: http://localhost:3000"); // Adjust if needed
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");

        // Get the data
        $blogData = $this->request->getJSON(true);


        // Debugging: Print data before inserting
        if (empty($blogData)) {
            return $this->respond(['error' => 'No data received.'], 400);
        }

        // Insert into database
        $this->blogModel->insert($blogData);

        return $this->respond(['success' => 'Blog added successfully.']);
    }

    public function handleOptions()
    {
        return $this->response
            ->setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            ->setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
            ->setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
            ->setStatusCode(200);
    }
}
