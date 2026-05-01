// ===== CHILD DATA =====
export const childData = {
  id: 1,
  name: 'سلمى إبراهيم',
  avatar: 'س',
  color: 'var(--color-mint)',
  level: 'الصف الثالث',
  age: 9,
  school: 'مدرسة النور الابتدائية',
  teacher: 'أ. فاطمة الزهراء',
  performance: 86,
  attendance: 95,
  homeworkCompletion: 88,
  behaviorScore: 90,
  subjects: { قراءة: 90, كتابة: 82, قواعد: 85, إملاء: 78 },
  strengths: ['القراءة الجهرية', 'التفاعل في الصف', 'حل التمارين بدقة'],
  weaknesses: ['التشكيل', 'الإملاء في الكلمات الصعبة'],
  monthlyScores: [70, 74, 78, 80, 82, 86],
};

// ===== WEEKLY PROGRESS =====
export const weeklyProgress = [
  { day: 'أحد', score: 75 },
  { day: 'إثنين', score: 80 },
  { day: 'ثلاثاء', score: 72 },
  { day: 'أربعاء', score: 85 },
  { day: 'خميس', score: 90 },
];

// ===== SUBJECT PERFORMANCE =====
export const subjectPerformance = [
  { name: 'قراءة', score: 90, color: 'var(--color-sky)' },
  { name: 'كتابة', score: 82, color: 'var(--color-coral)' },
  { name: 'قواعد', score: 85, color: 'var(--color-mint)' },
  { name: 'إملاء', score: 78, color: 'var(--color-sunny)' },
];

// ===== BEHAVIOR DATA =====
export const behaviorData = {
  classroom: 90,
  social: 85,
  participation: 92,
  notes: [
    { id: 1, text: 'سلمى تشارك بنشاط في الحصص الدراسية', date: '2026-04-28', type: 'positive' },
    { id: 2, text: 'تتعاون مع زميلاتها في الأنشطة الجماعية', date: '2026-04-25', type: 'positive' },
    { id: 3, text: 'تحتاج تحسين في الانتباه أثناء حصة الإملاء', date: '2026-04-22', type: 'attention' },
    { id: 4, text: 'أظهرت تحسناً ملحوظاً في المشاركة الصفية', date: '2026-04-20', type: 'positive' },
  ],
};

// ===== PHYSICAL ACTIVITY =====
export const physicalData = {
  sportsScore: 88,
  activities: [
    { id: 1, name: 'الجري', score: 90, status: 'ممتاز' },
    { id: 2, name: 'السباحة', score: 85, status: 'جيد جداً' },
    { id: 3, name: 'كرة القدم', score: 78, status: 'جيد' },
    { id: 4, name: 'الجمباز', score: 92, status: 'ممتاز' },
  ],
};

// ===== TEACHER NOTES =====
export const teacherNotes = [
  { id: 1, text: 'سلمى طالبة مجتهدة وتتحسن باستمرار في القراءة. أنصح بالاستمرار في القراءة اليومية في البيت.', date: '2026-04-28', teacher: 'أ. فاطمة الزهراء', type: 'observation' },
  { id: 2, text: 'أداء ممتاز في اختبار القواعد هذا الأسبوع. حصلت على 95/100.', date: '2026-04-25', teacher: 'أ. فاطمة الزهراء', type: 'achievement' },
  { id: 3, text: 'يُنصح بتدريب سلمى على كتابة التشكيل بشكل يومي لمدة 10 دقائق.', date: '2026-04-22', teacher: 'أ. فاطمة الزهراء', type: 'recommendation' },
  { id: 4, text: 'شاركت في مسابقة القراءة الجهرية وحصلت على المركز الثاني.', date: '2026-04-18', teacher: 'أ. فاطمة الزهراء', type: 'achievement' },
];

// ===== HOMEWORK DATA =====
export const homeworkData = [
  { id: 1, title: 'تمرين حروف الجر', subject: 'قواعد', dueDate: '2026-05-01', status: 'مكتمل', grade: 95, description: 'حل تمارين الصفحة 45-47 من كتاب القواعد' },
  { id: 2, title: 'إملاء الكلمات الجديدة', subject: 'إملاء', dueDate: '2026-05-02', status: 'مكتمل', grade: 82, description: 'كتابة 20 كلمة من القاموس الأسبوعي' },
  { id: 3, title: 'قراءة قصة الأسد والفأر', subject: 'قراءة', dueDate: '2026-05-03', status: 'قيد التنفيذ', grade: null, description: 'قراءة القصة والإجابة عن 5 أسئلة فهم' },
  { id: 4, title: 'كتابة فقرة عن الربيع', subject: 'كتابة', dueDate: '2026-05-04', status: 'لم يبدأ', grade: null, description: 'كتابة فقرة من 5 جمل عن فصل الربيع' },
  { id: 5, title: 'تمرين التاء المربوطة', subject: 'إملاء', dueDate: '2026-05-05', status: 'لم يبدأ', grade: null, description: 'التفريق بين التاء المربوطة والمفتوحة في 15 كلمة' },
  { id: 6, title: 'حل أسئلة أسماء الإشارة', subject: 'قواعد', dueDate: '2026-04-28', status: 'مكتمل', grade: 90, description: 'ملء الفراغات باستخدام أسماء الإشارة المناسبة' },
];

// ===== CONVERSATIONS =====
export const conversationsData = [
  {
    id: 1, name: 'أ. فاطمة الزهراء', avatar: 'ف', role: 'معلمة', color: 'var(--color-mint)', unread: true,
    messages: [
      { id: 1, text: 'السلام عليكم أستاذة، كيف حال سلمى في الدراسة؟', sender: 'parent', time: '09:00' },
      { id: 2, text: 'وعليكم السلام، سلمى تتحسن باستمرار والحمد لله', sender: 'other', time: '09:15' },
      { id: 3, text: 'هل تنصحين بتمارين إضافية في البيت؟', sender: 'parent', time: '09:20' },
      { id: 4, text: 'نعم، أنصح بقراءة قصة قصيرة يومياً لمدة 15 دقيقة وتدريب التشكيل', sender: 'other', time: '09:25' },
      { id: 5, text: 'شكراً جزيلاً لكِ أستاذة', sender: 'parent', time: '09:30' },
    ],
  },
  {
    id: 2, name: 'د. أحمد النفسي', avatar: 'أ', role: 'أخصائي نفسي', color: 'var(--color-grape)', unread: false,
    messages: [
      { id: 1, text: 'مرحباً دكتور، أريد الاستفسار عن سلوك سلمى مؤخراً', sender: 'parent', time: '14:00' },
      { id: 2, text: 'أهلاً بك، سلمى تبدي تقدماً جيداً في الثقة بالنفس', sender: 'other', time: '14:30' },
      { id: 3, text: 'لاحظت أنها أصبحت أكثر انفتاحاً في البيت أيضاً', sender: 'parent', time: '15:00' },
      { id: 4, text: 'هذا ممتاز! أنصح بالاستمرار في تشجيعها والثناء على إنجازاتها', sender: 'other', time: '15:15' },
    ],
  },
  {
    id: 3, name: 'أ. منى المرشدة', avatar: 'م', role: 'مرشدة طلابية', color: 'var(--color-sky)', unread: true,
    messages: [
      { id: 1, text: 'أستاذة منى، هل هناك ملاحظات على سلوك سلمى؟', sender: 'parent', time: '11:00' },
      { id: 2, text: 'سلمى طالبة مثالية في السلوك، تتعاون مع زميلاتها', sender: 'other', time: '11:20' },
    ],
  },
];

// ===== PSYCHOLOGIST DATA =====
export const psychologistData = {
  name: 'د. أحمد النفسي',
  specialization: 'علم نفس الطفل',
  recommendations: [
    { id: 1, text: 'تخصيص وقت يومي للحوار مع سلمى عن يومها الدراسي', status: 'قيد التنفيذ', priority: 'عالي', date: '2026-04-28' },
    { id: 2, text: 'تشجيع سلمى على التعبير عن مشاعرها بحرية', status: 'مكتمل', priority: 'عالي', date: '2026-04-20' },
    { id: 3, text: 'تجنب المقارنة مع الأقران والتركيز على تقدمها الشخصي', status: 'قيد التنفيذ', priority: 'متوسط', date: '2026-04-22' },
    { id: 4, text: 'ممارسة أنشطة إبداعية مثل الرسم والتلوين لتعزيز الثقة', status: 'جديد', priority: 'متوسط', date: '2026-04-25' },
  ],
  progressNotes: [
    { id: 1, text: 'سلمى تُظهر تحسناً ملحوظاً في التفاعل الاجتماعي مع الأقران', date: '2026-04-28' },
    { id: 2, text: 'مستوى القلق انخفض بشكل واضح مقارنة بالشهر الماضي', date: '2026-04-20' },
    { id: 3, text: 'تحتاج مزيداً من الدعم في بناء الثقة أثناء العروض الصفية', date: '2026-04-15' },
  ],
  behaviorTracking: [
    { month: 'يناير', confidence: 60, social: 65, emotional: 70 },
    { month: 'فبراير', confidence: 65, social: 68, emotional: 72 },
    { month: 'مارس', confidence: 70, social: 75, emotional: 78 },
    { month: 'أبريل', confidence: 78, social: 82, emotional: 85 },
  ],
};

// ===== SCHEDULE =====
export const scheduleData = [
  { id: 1, day: 'الأحد', lessons: [
    { time: '08:00 - 08:45', subject: 'قراءة', teacher: 'أ. فاطمة' },
    { time: '09:00 - 09:45', subject: 'قواعد', teacher: 'أ. فاطمة' },
    { time: '10:00 - 10:45', subject: 'رياضيات', teacher: 'أ. سارة' },
    { time: '11:00 - 11:45', subject: 'علوم', teacher: 'أ. نورة' },
  ]},
  { id: 2, day: 'الإثنين', lessons: [
    { time: '08:00 - 08:45', subject: 'إملاء', teacher: 'أ. فاطمة' },
    { time: '09:00 - 09:45', subject: 'كتابة', teacher: 'أ. فاطمة' },
    { time: '10:00 - 10:45', subject: 'تربية فنية', teacher: 'أ. هند' },
    { time: '11:00 - 11:45', subject: 'رياضة', teacher: 'أ. مريم' },
  ]},
  { id: 3, day: 'الثلاثاء', lessons: [
    { time: '08:00 - 08:45', subject: 'قراءة', teacher: 'أ. فاطمة' },
    { time: '09:00 - 09:45', subject: 'رياضيات', teacher: 'أ. سارة' },
    { time: '10:00 - 10:45', subject: 'قواعد', teacher: 'أ. فاطمة' },
    { time: '11:00 - 11:45', subject: 'إنجليزي', teacher: 'أ. ريم' },
  ]},
  { id: 4, day: 'الأربعاء', lessons: [
    { time: '08:00 - 08:45', subject: 'كتابة', teacher: 'أ. فاطمة' },
    { time: '09:00 - 09:45', subject: 'علوم', teacher: 'أ. نورة' },
    { time: '10:00 - 10:45', subject: 'رياضيات', teacher: 'أ. سارة' },
    { time: '11:00 - 11:45', subject: 'تربية إسلامية', teacher: 'أ. عائشة' },
  ]},
  { id: 5, day: 'الخميس', lessons: [
    { time: '08:00 - 08:45', subject: 'إملاء', teacher: 'أ. فاطمة' },
    { time: '09:00 - 09:45', subject: 'قراءة', teacher: 'أ. فاطمة' },
    { time: '10:00 - 10:45', subject: 'رياضة', teacher: 'أ. مريم' },
  ]},
];

// ===== EVENTS =====
export const eventsData = [
  { id: 1, title: 'اجتماع أولياء الأمور', date: '2026-05-05', time: '16:00', type: 'meeting', description: 'اجتماع دوري مع معلمة الصف الثالث' },
  { id: 2, title: 'يوم رياضي مفتوح', date: '2026-05-08', time: '09:00', type: 'event', description: 'يوم رياضي مفتوح لأولياء الأمور والطلاب' },
  { id: 3, title: 'لقاء مع الأخصائي النفسي', date: '2026-05-10', time: '14:00', type: 'meeting', description: 'جلسة متابعة دورية مع الأخصائي النفسي' },
  { id: 4, title: 'حفل نهاية العام', date: '2026-06-15', time: '10:00', type: 'event', description: 'حفل تكريم الطلاب المتفوقين' },
];

// ===== NOTIFICATIONS =====
export const notificationsData = [
  { id: 1, text: 'رسالة جديدة من أ. فاطمة الزهراء', time: 'منذ 10 دقائق', type: 'message', read: false },
  { id: 2, text: 'واجب جديد: تمرين التاء المربوطة', time: 'منذ ساعة', type: 'homework', read: false },
  { id: 3, text: 'ملاحظة جديدة من المعلمة عن أداء سلمى', time: 'منذ 3 ساعات', type: 'note', read: false },
  { id: 4, text: 'تذكير: اجتماع أولياء الأمور يوم 5 مايو', time: 'أمس', type: 'event', read: true },
  { id: 5, text: 'سلمى أكملت واجب حروف الجر بدرجة 95', time: 'قبل يومين', type: 'homework', read: true },
];

// ===== AUTO-REPLY MESSAGES =====
export const autoReplies = {
  'معلمة': [
    'شكراً لتواصلك، سأرد عليك قريباً',
    'سلمى تبذل مجهوداً رائعاً هذا الأسبوع!',
    'أنصح بمراجعة درس التشكيل في البيت',
    'سأرسل لك تقريراً مفصلاً نهاية الأسبوع',
  ],
  'أخصائي نفسي': [
    'أهلاً بك، سلمى تتقدم بشكل جيد',
    'أنصح بالاستمرار في الأنشطة الإبداعية',
    'سأحدد لك موعداً للجلسة القادمة',
    'لا تقلق، التطور الطبيعي يحتاج وقتاً وصبراً',
  ],
  'مرشدة طلابية': [
    'سلمى سلوكها ممتاز في المدرسة',
    'سأتابع معك أي ملاحظات جديدة',
    'أنصح بتعزيز السلوك الإيجابي في البيت أيضاً',
  ],
};
