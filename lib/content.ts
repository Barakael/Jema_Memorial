export const school = {
  name: "JEMA MEMORIAL PRE & PRIMARY SCHOOL",
  shortName: "JEMA Memorial",
  motto: "THE FUTURE BEGINS HERE",
  registration: "EM 20887",
  type: "English-medium · Day · Co-educational · Inclusive",
  location: {
    ward: "Napupa Ward",
    council: "Masasi Town Council",
    region: "Mtwara Region",
    landmark: "Near National Housing Corporation (NHC)",
    full: "Napupa Ward, Masasi Town Council, Mtwara Region",
  },
  phones: ["+255 717 689 939", "+255 715 178 587", "+255 714 520 857"],
  email: "jemaprimaryschool@gmail.com",
  hours: "7:30 a.m – 3:30 p.m",
  colours: ["Blue", "Yellow", "White"],
  director: {
    name: "Heri Ramadhani Hamad",
    title: "School Director",
  },
  headTeacher: {
    name: "Twaribu Hamza Mfaume",
    title: "Head Teacher",
  },
  enrolment: 108,
  staff: { total: 14, teaching: 8, nonTeaching: 6 },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
] as const;

export const vision =
  "To develop well-rounded, confident and responsible individuals who aspire to achieve their full potential. We will do this by providing a welcoming, happy, safe and supportive learning environment in which everyone is equal and all achievements are celebrated.";

export const mission =
  "To provide exceptional care to children while fostering each child's intellectual, social, physical and moral development in an academic-rich environment.";

export const values = [
  {
    title: "Integrity",
    description: "We encourage honesty, responsibility and doing the right thing.",
  },
  {
    title: "Respect",
    description: "We value every child, parent, colleague and community member.",
  },
  {
    title: "Excellence",
    description: "We strive for high standards in learning, behaviour and service.",
  },
  {
    title: "Care & Safety",
    description:
      "Children deserve to learn in a safe, caring and supportive environment.",
  },
  {
    title: "Teamwork",
    description:
      "We work together with families and stakeholders for children's success.",
  },
  {
    title: "Inclusiveness",
    description:
      "Every child is valued and supported to participate and progress.",
  },
] as const;

export const whyJema = [
  "English-medium learning environment",
  "Experienced and qualified teaching team",
  "Foundation-to-primary progression within one school",
  "Focus on academic, social, physical and moral development",
  "Child-friendly environment with play and sports",
  "Reliable school transport available",
] as const;

export const classes = [
  { level: "Pre-Primary", name: "Baby", pupils: 26 },
  { level: "Pre-Primary", name: "Middle", pupils: 13 },
  { level: "Pre-Primary", name: "Pre-Unit", pupils: 16 },
  { level: "Primary", name: "Grade One", pupils: 29, detail: "15 boys, 14 girls" },
  { level: "Primary", name: "Grade Two", pupils: 24, detail: "13 boys, 11 girls" },
] as const;

export const academicFocus = [
  "Early childhood foundations: communication, numeracy, social development, creativity and school readiness",
  "Primary literacy and numeracy supported by structured classroom learning",
  "Continuous assessment to identify strengths and areas needing support",
  "Homework packages and holiday assessment activities",
  "Preparation for progression through regular academic monitoring",
] as const;

export const performance = {
  date: "July 2026",
  summary: "84.26% of pupils achieved Grade A or B",
  grades: [
    { grade: "A", count: 44, percent: "40.74%" },
    { grade: "B", count: 47, percent: "43.52%" },
    { grade: "C", count: 17, percent: "15.74%" },
  ],
} as const;

export const beyondClassroom = [
  {
    area: "Sports & physical activity",
    focus: "Fitness, coordination, teamwork and discipline.",
  },
  {
    area: "Play & recreation",
    focus: "Creativity, social interaction and confidence.",
  },
  {
    area: "Arts & creativity",
    focus: "Self-expression, imagination and appreciation of creativity.",
  },
  {
    area: "Social skills",
    focus: "Communication, cooperation, respect and empathy.",
  },
  {
    area: "Moral development",
    focus: "Integrity, responsibility, good citizenship and positive behaviour.",
  },
  {
    area: "Leadership",
    focus: "Age-appropriate responsibility and teamwork opportunities.",
  },
] as const;

export const admissionSteps = [
  "Complete the school's joining/application form",
  "Attach a copy of the child's birth certificate",
  "Provide parent/guardian information and current contact details",
  "Provide relevant health information for safe care",
  "Pay the application and interview fees against an official receipt",
  "Complete admission requirements before reporting",
] as const;

export const fees = {
  year: 2026,
  application: 10000,
  interview: 10000,
  items: [
    { item: "Tuition / school fee (including food)", amount: 700000 },
    { item: "School transport (where used)", amount: 440000 },
    { item: "School T-shirt", amount: 15000 },
    { item: "School sweater", amount: 15000 },
    { item: "Learning materials package", amount: 34200 },
    { item: "Home package / holiday tests", amount: 20000 },
  ],
  totalExcludingTransport: 784200,
  totalIncludingTransport: 1224200,
} as const;

export const banks = [
  {
    bank: "NBC",
    account: "085174018807",
    name: "JEMA PRE AND PRIMARY SCHOOL",
  },
  {
    bank: "Posta Bank",
    account: "341218000266",
    name: "JEMA PRE AND PRIMARY SCHOOL",
  },
] as const;

export const uniforms = {
  boys: [
    "Shorts with school colours (blue, white and black)",
    "White short-sleeved shirt and school tie",
    "White socks and black leather shoes",
    "School T-shirt and sweater",
    "Black sports shorts with trim and white sports shoes",
  ],
  girls: [
    "School dress in the school colours (blue, white and black)",
    "White short-sleeved shirt",
    "White socks and black leather shoes",
    "School T-shirt and sweater",
    "Black sports shorts with trim and white sports shoes",
  ],
} as const;

export const directorMessage = `It is my great pleasure to welcome you to JEMA MEMORIAL PRE & PRIMARY SCHOOL. We established this school with a clear belief: every child deserves an opportunity to receive quality education in a safe, caring and supportive environment.

Our motto, “THE FUTURE BEGINS HERE,” expresses what we stand for. The future of our children is shaped by the quality of the foundation we give them today. We therefore place strong emphasis on academic development, discipline, confidence, integrity, physical wellbeing and positive relationships.

I invite parents to work closely with our teachers and management. Education succeeds best when school and family work as partners.`;

export const headTeacherMessage = `Our role as educators is not only to teach children academic subjects, but also to help them become confident, respectful, responsible and capable young people.

Our teachers work to understand each child's learning needs and to use assessment evidence to improve teaching. We value punctuality, regular attendance, cleanliness, correct school uniform, good behaviour and respectful communication.

As we prepare for the introduction of Grade Three, we remain committed to strengthening our teaching, learning resources, school environment and pupil support systems.`;

export const promises = [
  "Every child matters",
  "Every child deserves to be safe",
  "Every child deserves to learn",
  "Every child can develop and improve",
  "Every child should be encouraged to discover their potential",
] as const;

export const welcome =
  "JEMA MEMORIAL PRE & PRIMARY SCHOOL is a registered English-medium school located in Napupa Ward, Masasi Town Council, Mtwara Region, near National Housing Corporation (NHC). The school provides a caring, structured and child-centred environment in which children are supported to learn, grow, develop confidence and prepare for their future.";

export function formatTzs(amount: number) {
  return `TZS ${amount.toLocaleString("en-TZ")}`;
}
