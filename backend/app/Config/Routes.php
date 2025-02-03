<?php

use CodeIgniter\Router\RouteCollection;
use App\Controllers\BlogController;
/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');


service('auth')->routes($routes);

$routes->get('blogs', 'BlogController::getBlogs');

$routes->post('/blogs', 'BlogController::addBlog');
$routes->options('/blogs', 'BlogController::handleOptions');  
