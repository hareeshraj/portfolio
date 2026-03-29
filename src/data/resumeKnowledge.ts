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
  'What are his strongest backend skills?',
  'What cloud and DevOps tools does he use?',
  'What AI tools does he actively use?',
  'Summarize his CDW experience in 5 lines.',
  'What testing practices does he follow?',
];

const resumeRules: ResumeRule[] = [
  {
    keywords: ['summary', 'about', 'introduce', 'profile', 'who is', 'tell me about'],
    answer: {
      text: 'Hareesh is a Full Stack Developer with 3+ years of experience building scalable and high-performance applications for e-commerce and enterprise platforms. He specializes in Java 17, Spring Boot 3, REST APIs, microservices, cloud-native deployment, and business-focused integrations.',
      sources: [
        {
          section: 'Professional Summary',
          snippet: '3+ years across scalable applications, Java/Spring Boot, REST APIs, microservices, and cloud-native deployments.',
        },
      ],
    },
  },
  {
    keywords: ['current role', 'present', 'consultant', 'cdw', 'current company'],
    answer: {
      text: 'He is currently a Consultant at CDW Technologies India Pvt Ltd (October 2025 to Present). Key work includes scalable e-commerce launch, modular UI components, gift-card lifecycle, full-stack self-service dashboard, third-party integrations (Avalara/Klaviyo/ShipHero), and legacy migration with SEO-safe rewrites.',
      sources: [
        {
          section: 'Work Experience',
          snippet: 'Consultant at CDW Technologies India Pvt Ltd | October 2025 – Present.',
        },
        {
          section: 'Work Experience',
          snippet: 'Built gift card lifecycle and self-service dashboard; led legacy migration with SEO URL rewrites.',
        },
      ],
    },
  },
  {
    keywords: ['experience', 'years', 'career', 'timeline', 'work history'],
    answer: {
      text: 'His resume shows 3+ years at CDW across four roles: Student Intern (Feb 2023 to May 2023), Trainee Consultant (Jul 2023 to Mar 2024), Associate Consultant (Apr 2024 to Sep 2025), and Consultant (Oct 2025 to Present).',
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
    keywords: ['backend', 'java', 'spring boot', 'api', 'microservice', 'rabbitmq', 'java 17', 'spring boot 3'],
    answer: {
      text: 'His backend stack includes Java 17, Spring Boot 3, microservices, REST APIs, and RabbitMQ. He has delivered high-performance APIs, asynchronous queue-based integrations, and reliable backend systems for high-traffic production use cases.',
      sources: [
        {
          section: 'Skills',
          snippet: 'Backend: Java 17, Spring Boot 3, Microservices, REST APIs, RabbitMQ.',
        },
        {
          section: 'Work Experience',
          snippet: 'Implemented asynchronous messaging and optimized APIs for speed and reliability.',
        },
      ],
    },
  },
  {
    keywords: ['frontend', 'react', 'typescript', 'redux', 'ui', 'user interface', 'less', 'sass'],
    answer: {
      text: 'Frontend skills listed are HTML/CSS, JavaScript, TypeScript, React.js 17, Redux, and LESS/SASS. In delivery work, he built modular UI components, improved booking workflows, and integrated frontend with backend APIs for better user experience.',
      sources: [
        {
          section: 'Skills',
          snippet: 'Frontend: HTML/CSS, JavaScript, TypeScript, React.js 17, Redux, LESS/SASS.',
        },
        {
          section: 'Work Experience',
          snippet: 'Built modular UI components and integrated frontend workflows with backend services.',
        },
      ],
    },
  },
  {
    keywords: ['cloud', 'aws', 'devops', 'docker', 'kubernetes', 'deployment', 'github actions'],
    answer: {
      text: 'Cloud/DevOps tools in the resume are AWS (EC2, S3, RDS, DynamoDB, ECS), Docker, Kubernetes, and GitHub Actions. The summary also highlights cloud-native deployments.',
      sources: [
        {
          section: 'Skills',
          snippet: 'Cloud & DevOps: AWS (EC2, S3, RDS, DynamoDB, ECS), Docker, Kubernetes, GitHub Actions.',
        },
        {
          section: 'Professional Summary',
          snippet: 'Mentions cloud-native deployments and scalable platform delivery.',
        },
      ],
    },
  },
  {
    keywords: ['ai', 'copilot', 'cursor', 'claude', 'chatgpt', 'ai adoption'],
    answer: {
      text: 'He actively uses AI tools in day-to-day engineering. Resume-listed tools are GitHub Copilot, Cursor, Claude, and ChatGPT.',
      sources: [
        {
          section: 'Skills',
          snippet: 'AI Adoption: GitHub Copilot, Cursor, Claude, ChatGPT.',
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
    keywords: ['testing', 'junit', 'jmeter', 'postman', 'swagger', 'quality', 'best practices', 'sdd', 'spec driven'],
    answer: {
      text: 'Testing and quality practices listed are Spec Driven Development, JUnit, JMeter, code reviews, integration testing, Postman, and Swagger documentation/testing.',
      sources: [
        {
          section: 'Skills',
          snippet: 'Testing & Best Practices include Spec Driven Development, JUnit, JMeter, integration testing, Postman, and Swagger.',
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
