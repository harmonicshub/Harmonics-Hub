<?php
declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    harmonics_json_response(405, [
        'ok' => false,
        'message' => 'Method not allowed.'
    ]);
}

$formType = trim((string) ($_POST['form_type'] ?? ''));
$firstName = trim((string) ($_POST['firstname'] ?? ''));
$lastName = trim((string) ($_POST['lastname'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$phone = trim((string) ($_POST['mobilenumber'] ?? ''));
$service = trim((string) ($_POST['service'] ?? ''));
$course = trim((string) ($_POST['course'] ?? ''));
$level = trim((string) ($_POST['level'] ?? ''));
$format = trim((string) ($_POST['format'] ?? ''));
$cohort = trim((string) ($_POST['cohort'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));
$sourcePage = trim((string) ($_POST['source_page'] ?? ''));
$honeypot = trim((string) ($_POST['company_website'] ?? ''));

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
