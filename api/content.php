<?php
declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';
require_once __DIR__ . '/content-data.php';

harmonics_handle_preflight();

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'GET') {
    harmonics_json_response(405, [
        'ok' => false,
        'message' => 'Method not allowed.'
    ]);
}

harmonics_json_response(200, [
    'ok' => true,
    'data' => harmonics_content_payload()
]);
