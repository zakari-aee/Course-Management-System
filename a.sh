#!/bin/bash

# Root folder
mkdir -p src/{components/{UI,Dashboard,Students,Teachers,Courses,Payments,Parents,Notifications},pages}

# Create main files
touch src/App.jsx src/main.jsx src/index.css

# ---------- UI Components ----------
UI_COMPONENTS=("Button" "Modal" "Card" "Input" "Select" "Table" "Toast" "Loader")
for comp in "${UI_COMPONENTS[@]}"; do
  touch "src/components/UI/${comp}.jsx"
done

# ---------- Dashboard Components ----------
DASH_COMPONENTS=("StatsCard" "RecentActivities")
for comp in "${DASH_COMPONENTS[@]}"; do
  touch "src/components/Dashboard/${comp}.jsx"
done

# ---------- Students Components ----------
STUDENT_COMPONENTS=("Students" "StudentCard" "StudentForm" "StudentDetails" "AttendanceTable" "GradesTable" "StudentExport")
for comp in "${STUDENT_COMPONENTS[@]}"; do
  touch "src/components/Students/${comp}.jsx"
done

# ---------- Teachers Components ----------
TEACHER_COMPONENTS=("Teachers" "TeacherCard" "TeacherForm" "TeacherDashboard" "TeacherSchedule")
for comp in "${TEACHER_COMPONENTS[@]}"; do
  touch "src/components/Teachers/${comp}.jsx"
done

# ---------- Courses Components ----------
COURSE_COMPONENTS=("Courses" "CourseCard" "CourseForm" "CourseDetails" "ClassSchedule")
for comp in "${COURSE_COMPONENTS[@]}"; do
  touch "src/components/Courses/${comp}.jsx"
done

# ---------- Payments Components ----------
PAYMENT_COMPONENTS=("Payments" "PaymentForm" "PaymentCard" "PaymentExport" "PaymentReminder")
for comp in "${PAYMENT_COMPONENTS[@]}"; do
  touch "src/components/Payments/${comp}.jsx"
done

# ---------- Parents Components ----------
PARENT_COMPONENTS=("ParentDashboard" "AttendanceView" "GradesView" "PaymentsView" "Notifications")
for comp in "${PARENT_COMPONENTS[@]}"; do
  touch "src/components/Parents/${comp}.jsx"
done

# ---------- Notifications Components ----------
NOTIF_COMPONENTS=("Notifications" "WhatsAppNotification")
for comp in "${NOTIF_COMPONENTS[@]}"; do
  touch "src/components/Notifications/${comp}.jsx"
done

# ---------- Pages ----------
PAGES=("Dashboard" "Students" "Teachers" "Courses" "Payments" "Parents" "Login")
for page in "${PAGES[@]}"; do
  touch "src/pages/${page}.jsx"
done

echo "All folders and empty component files created successfully!"

