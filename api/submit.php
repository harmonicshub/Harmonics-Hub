<?php
declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';

harmonics_handle_preflight();

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    harmonics_json_response(405, [
        'ok' => false,
        'message' => 'Method not allowed.'
    ]);
}

$request = harmonics_request_data();

$formType = trim((string) ($request['form_type'] ?? ''));
$firstName = trim((string) ($request['firstname'] ?? ''));
$lastName = trim((string) ($request['lastname'] ?? ''));
$email = trim((string) ($request['email'] ?? ''));
$phone = trim((string) ($request['mobilenumber'] ?? ''));
$service = trim((string) ($request['service'] ?? ''));
$course = trim((string) ($request['course'] ?? ''));
$level = trim((string) ($request['level'] ?? ''));
$format = trim((string) ($request['format'] ?? ''));
$cohort = trim((string) ($request['cohort'] ?? ''));
$message = trim((string) ($request['message'] ?? ''));
$sourcePage = trim((string) ($request['source_page'] ?? ''));
$honeypot = trim((string) ($request['company_website'] ?? ''));

if ($honeypot !== '') {
    harmonics_json_response(200, [
        'ok' => true,
        'message' => 'Submission received.'
    ]);
}

$baseRequired = [$formType, $firstName, $lastName, $email, $phone, $message];
foreach ($baseRequired as $value) {
    if ($value === '') {
        harmonics_json_response(422, [
            'ok' => false,
            'message' => 'Please complete all required fields.'
        ]);
    }
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    harmonics_json_response(422, [
        'ok' => false,
        'message' => 'Please enter a valid email address.'
    ]);
}

if (!in_array($formType, ['inquiry', 'academy-registration'], true)) {
    harmonics_json_response(422, [
        'ok' => false,
        'message' => 'Unsupported form type.'
    ]);
}

if ($formType === 'inquiry' && $service === '') {
    harmonics_json_response(422, [
        'ok' => false,
        'message' => 'Please select the service you need.'
    ]);
}

if ($formType === 'academy-registration') {
    foreach ([$course, $level, $format, $cohort] as $value) {
        if ($value === '') {
            harmonics_json_response(422, [
                'ok' => false,
                'message' => 'Please complete all academy registration fields.'
            ]);
        }
    }
}

try {
    $pdo = harmonics_db();
    $statement = $pdo->prepare(
        'INSERT INTO submissions (
            form_type,
            first_name,
            last_name,
            email,
            phone,
            service,
            course,
            experience_level,
            learning_format,
            preferred_cohort,
            message,
            source_page
        ) VALUES (
            :form_type,
            :first_name,
            :last_name,
            :email,
            :phone,
            :service,
            :course,
            :experience_level,
            :learning_format,
            :preferred_cohort,
            :message,
            :source_page
        )'
    );

    $statement->execute([
        ':form_type' => $formType,
        ':first_name' => $firstName,
        ':last_name' => $lastName,
        ':email' => $email,
        ':phone' => $phone,
        ':service' => $service !== '' ? $service : null,
        ':course' => $course !== '' ? $course : null,
        ':experience_level' => $level !== '' ? $level : null,
        ':learning_format' => $format !== '' ? $format : null,
        ':preferred_cohort' => $cohort !== '' ? $cohort : null,
        ':message' => $message,
        ':source_page' => $sourcePage !== '' ? $sourcePage : null
    ]);
} catch (Throwable $exception) {
    harmonics_json_response(500, [
        'ok' => false,
        'message' => 'We could not save your submission right now.'
    ]);
}

harmonics_json_response(200, [
    'ok' => true,
    'message' => $formType === 'academy-registration'
        ? 'Your academy registration has been submitted successfully.'
        : 'Your inquiry has been submitted successfully.'
]);
