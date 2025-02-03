<?php

namespace App\Models;

use CodeIgniter\Model;
use App\Entities\BlogEntity;
class BlogModel extends Model
{
    protected $table            = 'NICB_blogs';
    protected $primaryKey       = 'NICB_id';
    protected $useAutoIncrement = true;
    protected $returnType       = BlogEntity::class;
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields = ['title', 'content', 'author', 'created_at', 'updated_at'];



    // Dates
    protected $useTimestamps = true;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';

    
}
