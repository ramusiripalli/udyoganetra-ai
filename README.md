# 🚀 UdyogaNetra AI  
## AI Powered Career Copilot For Job Seekers

UdyogaNetra AI is an intelligent AI powered career platform designed to help students, freshers and software engineers accelerate their career growth using Artificial Intelligence.

Instead of switching between multiple platforms for resume analysis, interview preparation, career planning and job searching, **UdyogaNetra AI combines everything into one AI powered ecosystem.**

## 🌐 Live Demo

👉 [UdyogaNetra AI Live Website](https://udyoganetra-ai.vercel.app/)

### Our Mission

> Help job seekers learn faster, apply smarter and get hired better using AI.

---

# ❌ Problem Statement

Today job seekers face multiple challenges:

- Resumes get rejected by ATS systems before recruiters even see them
- Candidates do not know what skills companies expect
- Interview preparation is unstructured
- Students follow random learning paths without direction
- Users search jobs on multiple websites manually
- Candidates do not know what they are missing for dream companies

Current platforms like:

- LinkedIn
- Naukri
- Indeed
- Wellfound

mainly show jobs.

They **do not provide intelligent career guidance**.

---

# ✅ Solution — UdyogaNetra AI

UdyogaNetra AI works like a personal AI Career Assistant.

It helps users:

- Improve resumes for ATS systems
- Match resume with suitable jobs
- Identify missing skills for top companies
- Generate personalized career roadmaps
- Practice technical interview questions using AI

Instead of guessing career direction, users receive AI powered guidance.

---

# 🌟 Core AI Features

---

## 1. Resume ATS Analyzer 📄

Users upload resume PDF.

### System Flow

Upload Resume  
↓  
Extract PDF Text using pdf-parse  
↓  
Send extracted text to AI  
↓  
AI analyzes ATS compatibility  
↓  
Show structured report  

### AI Returns

- ATS Score out of 100
- Resume Strengths
- Resume Weaknesses
- Improvement Suggestions

### Example Response

```json
{
  "atsScore": 84,
  "strengths": [
    "Strong MERN Stack"
  ],
  "weaknesses": [
    "No Certifications"
  ],
  "suggestions": [
    "Add measurable achievements"
  ]
}
```

---

## 2. AI Job Match Engine 💼

Users upload resume PDF.

### System Flow

Upload Resume  
↓  
Extract skills automatically from resume  
↓  
AI analyzes projects + experience  
↓  
Find best matching jobs  
↓  
Return job recommendations  

### AI Returns

- Top matching jobs
- Match score percentage
- Why candidate matches
- Missing skills

### Example Response

```json
{
  "matchedJobs": [
    {
      "company": "Google",
      "role": "Frontend Engineer",
      "matchScore": 92
    }
  ],
  "missingSkills": [
    "Docker",
    "Redis"
  ]
}
```

### This answers

> Which jobs can I apply for today?

---

## 3. Skill Gap Analyzer 🧠

Users upload resume and enter dream company.

Example:

- Company → Google
- Role → SDE 1

### System Flow

Upload Resume  
↓  
AI extracts current skills  
↓  
Compare with target company expectations  
↓  
Find missing skills  
↓  
Generate learning priorities  

### AI Returns

- Readiness Score
- Existing Skills
- Missing Skills
- Priority Learning Plan

### Example Response

```json
{
  "readinessScore": 68,
  "existingSkills": [
    "React",
    "Node.js"
  ],
  "missingSkills": [
    "Docker",
    "System Design"
  ],
  "priorityLearning": [
    "DSA",
    "Docker"
  ]
}
```

### This answers

> What am I missing to get hired by my dream company?

---

## 4. AI Career Roadmap Generator 🛣️

Users enter:

- Current Skills
- Target Role
- Duration in Days

Example:

- React, Node.js
- SDE 1
- 120 Days

### AI Generates

- Weekly learning plan
- Topics to study
- Projects to build
- Daily action plan

### Example Response

```json
{
  "roadmap": [
    {
      "week": 1,
      "focus": "JavaScript Fundamentals"
    }
  ]
}
```

### This answers

> How should I learn for the next few months?

---

## 5. AI Interview Preparation 🎤

Users enter:

- Skills
- Experience Level
- Difficulty Level

Example:

- React, JavaScript, Node.js
- 2 Years Experience
- Medium Difficulty

### AI Generates

- 50 Technical Questions
- Detailed Answers
- Interview Tips

### Features

- Pagination
- 10 questions per page
- Skill based question generation

### This helps users

Practice before real interviews.

---

# 🚀 Why AI Is Important For Careers

Artificial Intelligence helps candidates in multiple ways.

### Faster Learning

AI creates personalized learning paths based on user goals.

### Better Resume Optimization

ATS systems reject thousands of resumes every day.

### Better Interview Preparation

Practice company level interview questions before interviews.

### Skill Gap Detection

AI tells what companies actually expect.

### Smarter Job Search

Instead of random applications, AI finds suitable opportunities.

---

# ⚙️ Tech Stack

---

## Frontend

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Redux Toolkit
- Axios

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- pdf-parse

---

## AI Integration

Using:

- OpenRouter API
- DeepSeek AI Model

AI is used for:

- Resume Analysis
- Job Matching
- Skill Gap Analysis
- Interview Question Generation
- Roadmap Generation

---

# 🏗 System Architecture

```text
Frontend (React + Tailwind)

        ↓

REST API (Express Backend)

        ↓

File Upload (Multer)

        ↓

PDF Extraction (pdf-parse)

        ↓

AI Processing (DeepSeek via OpenRouter)

        ↓

Structured JSON Response

        ↓

Premium Dashboard UI
```

---

# 🖥 Dashboard Features

Premium SaaS inspired dashboard.

Includes:

- Welcome User Section
- AI Career Tools
- Why AI Matters Section
- Future Features Section
- Dark Theme + Light Theme
- Fully Responsive Design

---

# 🔮 Future Features

Planned future features for platform growth.

---

## Recruiter Dashboard 👨‍💼

Recruiters can directly post curated verified jobs.

Features:

- Add jobs manually
- Approve jobs
- Manage applicants

---

## Curated Daily Jobs 🔥

Daily jobs collected from multiple sources.

Sources:

- LinkedIn
- Naukri
- Indeed
- Wellfound
- YC Startups

Users can directly visit external source and apply.

---

## AI Resume Builder ✍️

Generate ATS optimized resume automatically.

Features:

- Multiple templates
- AI generated resume summary
- ATS optimized formatting

---

## WhatsApp / Telegram Job Alerts 📲

Users receive instant job alerts.

Features:

- Telegram integration
- WhatsApp alerts
- Daily recommendations

---

## Company Specific Interview Prep 🏢

Prepare for:

- Google
- Amazon
- Microsoft
- Razorpay
- Swiggy
- Flipkart

AI will generate company specific interview questions.

---

# 🎯 Product Vision

UdyogaNetra AI is not just another job board.

It is building an:

# AI Powered Career Operating System

Where users can:

- Learn
- Practice
- Improve
- Get Matched
- Apply
- Get Hired

All in one ecosystem.

---

# Why This Project Matters

Most job platforms only show jobs.

UdyogaNetra AI solves the bigger problem.

### Helping candidates become employable.

Instead of random job applications, candidates receive intelligent career guidance.

This creates better hiring outcomes.

---

# Demo Workflow

### Step 1

Upload Resume  
↓  
Resume ATS Analysis

### Step 2

AI Job Match  
↓  
Find matching opportunities

### Step 3

Skill Gap Analysis  
↓  
Know missing skills

### Step 4

AI Career Roadmap  
↓  
Learn intelligently

### Step 5

Interview Preparation  
↓  
Prepare for real interviews

---

# Built For Hackathon 🏆

Built as an end-to-end AI powered career ecosystem for job seekers.

Goal:

> Use AI to help people build better careers.

---

# Team

Solo Builder 💻

Built with passion to solve career problems using Artificial Intelligence.

---

# Future Goal

Build UdyogaNetra AI into a complete hiring ecosystem where:

- Candidates learn with AI
- Recruiters post verified jobs
- AI helps candidates improve skills
- Users apply only to jobs matching their profile

A smarter future for hiring.

---

# Final Thought

> Jobs platforms help people find jobs.

> UdyogaNetra AI helps people become hireable.
