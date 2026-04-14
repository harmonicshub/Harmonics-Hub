<?php
declare(strict_types=1);

function harmonics_content_payload(): array
{
    return [
        'company' => [
            'name' => 'HARMONICS HUB',
            'website' => 'https://harmonicshub.com/',
            'contactEmail' => 'hello@harmonicshub.com',
            'responseWindow' => 'Within 1-2 business days',
            'heroTitle' => 'We design brands, build software, train teams, and support business operations.',
            'heroText' => 'HARMONICS HUB helps organizations look sharper, move faster, and operate with more confidence through brand design, web and software development, practical technology education, and dependable IT support.',
            'mission' => 'Make technology more useful, more human, and easier to operate.',
            'about' => 'HARMONICS HUB combines design thinking, digital product delivery, practical tech education, and managed support so businesses can move with more confidence.'
        ],
        'trustSignals' => [
            [
                'title' => 'Integrated delivery',
                'body' => 'Design, product, training, and operations support under one brand.'
            ],
            [
                'title' => '1-2 business day response',
                'body' => 'Clear communication for project, training, and support requests.'
            ],
            [
                'title' => 'Hands-on approach',
                'body' => 'Projects and training designed around practical business outcomes.'
            ]
        ],
        'services' => [
            [
                'tag' => 'Graphics Design',
                'title' => 'Design systems that make your company look more organized and more trusted.',
                'body' => 'Brand identity design, marketing assets, pitch decks, event visuals, social graphics, and day-to-day design support for business communication.'
            ],
            [
                'tag' => 'Web Development',
                'title' => 'Responsive websites built for visibility, credibility, and conversion.',
                'body' => 'Corporate websites, portfolio sites, landing pages, school websites, and service-based business platforms designed around speed and clarity.'
            ],
            [
                'tag' => 'Software Development',
                'title' => 'Custom applications and internal tools for teams that need better systems.',
                'body' => 'Business process tools, data entry systems, internal dashboards, customer workflow systems, and digital products tailored to your operations.'
            ],
            [
                'tag' => 'IT Infrastructure',
                'title' => 'Steady support for the devices, networks, and systems your company depends on.',
                'body' => 'Infrastructure setup, support routines, device management, operational documentation, and continuity planning for smoother day-to-day operations.'
            ]
        ],
        'academyTracks' => [
            [
                'title' => 'Web Development',
                'description' => 'HTML, CSS, JavaScript, responsive design, and project-based website building for real client scenarios.'
            ],
            [
                'title' => 'Software Engineering',
                'description' => 'Programming fundamentals, application logic, version control, problem solving, and collaborative workflows.'
            ],
            [
                'title' => 'UI/UX Design',
                'description' => 'Wireframing, user flows, design systems, usability thinking, and interface design for digital products.'
            ],
            [
                'title' => 'Data Analysis',
                'description' => 'Data cleaning, spreadsheet workflows, dashboards, reporting, and insight storytelling for decision making.'
            ],
            [
                'title' => 'Cybersecurity Fundamentals',
                'description' => 'Digital safety, threat awareness, secure habits, access control, and practical security concepts for teams.'
            ],
            [
                'title' => 'Cloud Computing',
                'description' => 'Cloud basics, hosting, deployment workflows, storage, collaboration tools, and scalable service environments.'
            ],
            [
                'title' => 'Digital Operations',
                'description' => 'Digital tools, productivity systems, documentation habits, and collaboration processes for business teams.'
            ]
        ],
        'academyFormats' => [
            [
                'title' => 'Beginner Track',
                'subtitle' => 'Foundation learning',
                'detail' => 'Ideal for learners starting a new skill path and needing guided structure.'
            ],
            [
                'title' => 'Professional Track',
                'subtitle' => 'Portfolio and project focus',
                'detail' => 'Best for learners preparing for freelance, internship, or job opportunities.'
            ],
            [
                'title' => 'Corporate Training',
                'subtitle' => 'Team upskilling',
                'detail' => 'Tailored sessions built around company workflows, tools, and productivity needs.'
            ]
        ],
        'resources' => [
            [
                'title' => 'Website project brief checklist',
                'badge' => 'Branded Worksheet',
                'description' => 'A polished planning worksheet with fill-in prompts and print-ready formatting for website scoping conversations.',
                'url' => 'https://harmonicshub.com/downloads/website-project-brief.html'
            ],
            [
                'title' => 'Training needs planning worksheet',
                'badge' => 'Branded Worksheet',
                'description' => 'A planner for defining learner groups, outcomes, schedule preferences, and follow-up support needs.',
                'url' => 'https://harmonicshub.com/downloads/training-needs-planner.html'
            ],
            [
                'title' => 'Website and onboarding launch support',
                'badge' => 'Support Package',
                'description' => 'For organizations that want a website build paired with messaging, launch coordination, and onboarding support.',
                'url' => 'https://harmonicshub.com/contactus.html'
            ]
        ],
        'insights' => [
            [
                'category' => 'Design',
                'title' => 'Why strong design systems help tech companies earn trust faster',
                'summary' => 'Visual consistency affects trust, speed of communication, and how polished a business appears across digital channels.',
                'url' => 'https://harmonicshub.com/insights-design-systems-trust.html'
            ],
            [
                'category' => 'Development',
                'title' => 'What growing businesses should check before building custom software',
                'summary' => 'Good software projects start with workflow clarity, user priorities, and a realistic scope tied to business outcomes.',
                'url' => 'https://harmonicshub.com/insights-custom-software-checklist.html'
            ],
            [
                'category' => 'Training',
                'title' => 'How practical tech training improves team performance faster than theory-heavy sessions',
                'summary' => 'People retain more when training mirrors the tasks, tools, and decisions they face in real working environments.',
                'url' => 'https://harmonicshub.com/insights-practical-training-performance.html'
            ]
        ],
        'contactServices' => [
            'Graphics Design',
            'Web Development',
            'Software Development',
            'Tech Training',
            'IT Infrastructure Management'
        ],
        'academyOptions' => [
            'courses' => [
                'Web Development',
                'Software Engineering',
                'UI/UX Design',
                'Data Analysis',
                'Cybersecurity Fundamentals',
                'Cloud Computing',
                'Digital Operations'
            ],
            'levels' => ['Beginner', 'Intermediate', 'Advanced'],
            'formats' => ['On-site', 'Online', 'Hybrid'],
            'cohorts' => ['Weekday', 'Weekend', 'Intensive bootcamp']
        ],
        'meta' => [
            'generatedAt' => gmdate('c'),
            'source' => 'harmonics-backend'
        ]
    ];
}
