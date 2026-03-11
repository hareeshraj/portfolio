export interface ResumeSource {
  section: string;
  snippet: string;
}

export interface ResumeAnswer {
  text: string;
  sources: ResumeSource[];
}

interface ResumeRule {
  keywords: string[];
  answer: ResumeAnswer;
}

export const suggestedResumeQuestions = [
  'What is his current role at CDW?',
  'What are his strongest backend skills?',
  'Summarize his experience in 5 lines.',
  'What cloud and DevOps tools does he use?',
  'What awards has he received?',
];

const resumeRules: ResumeRule[] = [
  {
    keywords: ['summary', 'about', 'introduce', 'profile', 'who is', 'tell me about'],
    answer: {
      text: 'Hareesh is a Full Stack Java Developer with 3+ years of experience building scalable applications with Java, Spring Boot, and React.js. His resume highlights REST APIs, microservices, high-performance backend systems, and production delivery for e-commerce and enterprise platforms.',
      sources: [
        {
          section: 'Professional Summary',
          snippet: '3+ years of experience with Java, Spring Boot, React.js, REST APIs, and microservices.',
        },
      ],
    },
  },
  {
    keywords: ['current role', 'present', 'consultant', 'cdw', 'current company'],
    answer: {
      text: 'He is currently working as a Consultant at CDW Technologies India Pvt Ltd (October 2025 to Present). Key work includes e-commerce platform launch, reusable React components, gift card lifecycle, third-party integrations (Avalara/Klaviyo/ShipHero), and legacy migration with SEO-safe URL rewrites.',
      sources: [
        {
          section: 'Work Experience',
          snippet: 'Consultant at CDW Technologies India Pvt Ltd | October 2025 – Present.',
        },
        {
          section: 'Work Experience',
          snippet: 'Built gift card lifecycle, order dashboard, and handled legacy migration with SEO URL rewrites.',
        },
      ],
    },
  },
  {
    keywords: ['experience', 'years', 'career', 'timeline', 'work history'],
    answer: {
      text: 'His resume shows 3+ years of professional experience at CDW across four roles: Student Intern (Feb 2023–May 2023), Trainee Consultant (Jul 2023–Mar 2024), Associate Consultant (Apr 2024–Sep 2025), and Consultant (Oct 2025–Present).',
      sources: [
        {
          section: 'Professional Summary',
          snippet: '3+ years of experience.',
        },
        {
          section: 'Work Experience',
          snippet: 'Progressed from intern to consultant at CDW.',
        },
      ],
    },
  },
  {
    keywords: ['backend', 'java', 'spring boot', 'api', 'microservice', 'kafka', 'rabbitmq'],
    answer: {
      text: 'His backend stack in the resume includes Java, Spring Boot, RESTful APIs, Kafka, RabbitMQ, Redis, and database optimization. He has also implemented asynchronous integrations using message queues and built scalable APIs for high-traffic systems.',
      sources: [
        {
          section: 'Skills',
          snippet: 'Backend Development: Java, Spring Boot, Kafka, RabbitMQ, RESTful APIs.',
        },
        {
          section: 'Work Experience',
          snippet: 'Implemented asynchronous messaging and optimized APIs for speed and reliability.',
        },
      ],
    },
  },
  {
    keywords: ['frontend', 'react', 'typescript', 'redux', 'ui', 'user interface'],
    answer: {
      text: 'Frontend skills listed are React.js, Redux, TypeScript, CSS, and jQuery. In delivery work, he built reusable UI components, revamped booking workflows, and created React dashboards connected with Spring Boot APIs.',
      sources: [
        {
          section: 'Skills',
          snippet: 'Frontend Development: React.js, Redux, TypeScript, CSS, jQuery.',
        },
        {
          section: 'Work Experience',
          snippet: 'Built reusable React components and user dashboards integrated with backend APIs.',
        },
      ],
    },
  },
  {
    keywords: ['cloud', 'aws', 'devops', 'docker', 'kubernetes', 'nginx', 'deployment'],
    answer: {
      text: 'Cloud/DevOps tools in the resume: AWS (EC2, S3, RDS, DynamoDB, ECS), Nginx, Docker, and Kubernetes. The summary also mentions cloud deployments on AWS.',
      sources: [
        {
          section: 'Skills',
          snippet: 'Cloud & DevOps: AWS (EC2, S3, RDS, DynamoDB, ECS), Nginx, Docker, Kubernetes.',
        },
        {
          section: 'Professional Summary',
          snippet: 'Cloud deployments on AWS.',
        },
      ],
    },
  },
  {
    keywords: ['database', 'mysql', 'postgres', 'mongodb', 'redis', 'sql', 'nosql'],
    answer: {
      text: 'Database technologies listed are MySQL, MongoDB, PostgreSQL, and Redis. The resume also highlights database optimization and Redis caching for performance improvements.',
      sources: [
        {
          section: 'Skills',
          snippet: 'Database Management: MySQL, MongoDB, PostgreSQL, Redis.',
        },
        {
          section: 'Work Experience',
          snippet: 'Implemented Redis caching and improved application performance.',
        },
      ],
    },
  },
  {
    keywords: ['education', 'college', 'degree', 'cgpa', 'university', 'coursework'],
    answer: {
      text: 'He completed B.E. in Computer Science and Engineering at Kongu Engineering College (Aug 2019 to Jun 2023) with CGPA 8.77/10. Coursework includes OOP, DBMS, DSA, OS, Computer Networks, and Machine Learning.',
      sources: [
        {
          section: 'Education',
          snippet: 'B.E. Computer Science and Engineering | CGPA: 8.77/10.',
        },
      ],
    },
  },
  {
    keywords: ['award', 'recognition', 'achievements', 'ace of the year', 'pat on the back', 'feather in the cap'],
    answer: {
      text: 'Awards on the resume: Ace Of The Year (2023), Feather in the Cap (Q1 2024), Pat on the Back (Q4 2024), and Pat on the Back (Q4 2025).',
      sources: [
        {
          section: 'Awards',
          snippet: 'Ace Of The Year 2023, Feather in the Cap, and two Pat on the Back awards.',
        },
      ],
    },
  },
  {
    keywords: ['contact', 'email', 'phone', 'linkedin', 'portfolio', 'reach'],
    answer: {
      text: 'You can reach him at hareesh1705@gmail.com. Resume contact links include LinkedIn and portfolio, and location is Chennai, India.',
      sources: [
        {
          section: 'Header',
          snippet: 'hareesh1705@gmail.com | +91 8667330395 | Chennai, India.',
        },
        {
          section: 'Header',
          snippet: 'LinkedIn and portfolio URLs are listed in the resume header.',
        },
      ],
    },
  },
];

const normalize = (value: string) => value.toLowerCase().trim();

export const getResumeAnswer = (question: string): ResumeAnswer => {
  const normalizedQuestion = normalize(question);

  let bestRule: ResumeRule | null = null;
  let bestScore = 0;

  for (const rule of resumeRules) {
    let score = 0;
    for (const keyword of rule.keywords) {
      if (normalizedQuestion.includes(keyword)) {
        score += keyword.includes(' ') ? 3 : 2;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestRule = rule;
    }
  }

  if (bestRule && bestScore >= 2) {
    return bestRule.answer;
  }

  return {
    text: 'I can answer only from Hareesh’s resume. Try asking about experience, skills, education, awards, or current role.',
    sources: [
      {
        section: 'Scope',
        snippet: 'Resume-grounded mode: answers are restricted to provided resume content.',
      },
    ],
  };
};
