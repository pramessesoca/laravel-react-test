<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        DB::table('products')->insert([
            [
                'img' => '/assets/pic1.jpg',
                'brand' => 'Nike',
                'title' => 'Air Zoom Runner',
                'rating' => 4.5,
                'reviews' => 128,
                'sellPrice' => 2499.00,
                'orders' => '350',
                'mrp' => '3999',
                'discount' => 38,
                'category' => 'men',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'img' => '/assets/pic2.jpg',
                'brand' => 'Adidas',
                'title' => 'Cloudfoam Comfort',
                'rating' => 4.2,
                'reviews' => 96,
                'sellPrice' => 2199.00,
                'orders' => '240',
                'mrp' => '3299',
                'discount' => 33,
                'category' => 'women',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
