<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateBlog extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'NICB_id'         => [
                'type'           => 'INT',
                'unsigned'       => true,
                'auto_increment' => true,
            ],
            'title'           => [
                'type'           => 'VARCHAR',
                'constraint'     => '255',
            ],
            'content'         => [
                'type'           => 'TEXT',
            ],
            'author'          => [
                'type'           => 'VARCHAR',
                'constraint'     => '255',
            ],
            'created_at'      => [
                'type'           => 'DATETIME',
                'null'           => true,
            ],
            'updated_at'      => [
                'type'           => 'DATETIME',
                'null'           => true,
            ],
        ]);

        // Add the primary key
        $this->forge->addKey('NICB_id', true);

        // Create the table
        $this->forge->createTable('NICB_blogs');
    }

    public function down()
    {
        // Drop the table if needed
        $this->forge->dropTable('NICB_blogs');
    }
}
