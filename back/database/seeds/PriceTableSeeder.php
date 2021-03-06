<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class PriceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
	DB::table('price')->insert([
            [
                'id' => '1',
		        'value' => '7.00',
                'language_id' => '1',
                'currency' => 'dollars',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]
        ]);   
    }
}
