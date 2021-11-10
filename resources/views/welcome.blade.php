<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laika Mascotas - Universo peludo</title>

        <!-- Icon Fonts -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">

        <link rel="icon" type="image/png" href="https://laika.com.co/assets/home/laika_logo.png">

        <link href="{{ asset('css/styles.css') }}" rel="stylesheet">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    </head>
    <body>
        <div id="app" class="content">
            <home />
        </div>

        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
