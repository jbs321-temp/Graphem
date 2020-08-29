<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHeroTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('heroes', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->enum('side', ['dark', 'light']);
            $table->integer('hit-points');
            $table->integer('attack');
            $table->string('special-ability', 256);
            $table->timestamps();

            $table->index('name');
            $table->index('side');
            $table->index('hit-points');
            $table->index('attack');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('heroes');
    }
}
