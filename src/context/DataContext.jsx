import React, { createContext, useState, useContext, useEffect } from 'react';

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [payments, setPayments] = useState([]);
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    const initializeData = () => {
      if (!localStorage.getItem('initialized')) {
        const initialUsers = [
          {
            id: 1,
            email: 'admin@school.com',
            password: 'admin123',
            role: 'admin',
            name: 'Admin User',
            phone: '123-456-7890'
          },
          {
            id: 2,
            email: 'teacher1@school.com',
            password: 'teacher123',
            role: 'teacher',
            name: 'John Smith',
            subject: 'Mathematics',
            phone: '123-456-7891'
          },
          {
            id: 3,
            email: 'student1@school.com',
            password: 'student123',
            role: 'student',
            name: 'Alice Johnson',
            grade: '10th Grade',
            parentId: 4,
            phone: '123-456-7892'
          },
          {
            id: 4,
            email: 'parent1@school.com',
            password: 'parent123',
            role: 'parent',
            name: 'Robert Johnson',
            studentId: 3,
            phone: '123-456-7893'
          },
          {
            id: 5,
            email: 'teacher2@school.com',
            password: 'teacher123',
            role: 'teacher',
            name: 'Sarah Wilson',
            subject: 'Science',
            phone: '123-456-7894'
          }
        ];

        const initialCourses = [
          {
            id: 1,
            name: 'Mathematics 101',
            description: 'Fundamental concepts of algebra and geometry',
            teacherId: 2,
            schedule: 'Monday, Wednesday 9:00-10:30',
            credits: 3
          },
          {
            id: 2,
            name: 'Science Fundamentals',
            description: 'Introduction to physics and chemistry',
            teacherId: 5,
            schedule: 'Tuesday, Thursday 11:00-12:30',
            credits: 4
          },
          {
            id: 3,
            name: 'English Literature',
            description: 'Classic and contemporary literature studies',
            teacherId: null,
            schedule: 'Monday, Friday 14:00-15:30',
            credits: 3
          }
        ];

        const initialEnrollments = [
          { id: 1, studentId: 3, courseId: 1, grade: 'A', attendance: 95 },
          { id: 2, studentId: 3, courseId: 2, grade: 'B+', attendance: 88 }
        ];

        const initialPayments = [
          {
            id: 1,
            studentId: 3,
            amount: 500,
            date: '2024-01-15',
            status: 'paid',
            description: 'Semester Tuition Fee'
          },
          {
            id: 2,
            studentId: 3,
            amount: 150,
            date: '2024-01-20',
            status: 'pending',
            description: 'Lab Materials Fee'
          }
        ];

        localStorage.setItem('users', JSON.stringify(initialUsers));
        localStorage.setItem('courses', JSON.stringify(initialCourses));
        localStorage.setItem('enrollments', JSON.stringify(initialEnrollments));
        localStorage.setItem('payments', JSON.stringify(initialPayments));
        localStorage.setItem('initialized', 'true');
      }

      setUsers(JSON.parse(localStorage.getItem('users') || '[]'));
      setCourses(JSON.parse(localStorage.getItem('courses') || '[]'));
      setEnrollments(JSON.parse(localStorage.getItem('enrollments') || '[]'));
      setPayments(JSON.parse(localStorage.getItem('payments') || '[]'));
    };

    initializeData();
  }, []);

  const updateStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  // User management
  const addUser = (user) => {
    const newUser = { ...user, id: Date.now() };
    const newUsers = [...users, newUser];
    setUsers(newUsers);
    updateStorage('users', newUsers);
    return newUser;
  };

  const updateUser = (id, updates) => {
    const newUsers = users.map(user => 
      user.id === id ? { ...user, ...updates } : user
    );
    setUsers(newUsers);
    updateStorage('users', newUsers);
  };

  const deleteUser = (id) => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
    updateStorage('users', newUsers);
  };

  // Course management
  const addCourse = (course) => {
    const newCourse = { ...course, id: Date.now() };
    const newCourses = [...courses, newCourse];
    setCourses(newCourses);
    updateStorage('courses', newCourses);
    return newCourse;
  };

  const updateCourse = (id, updates) => {
    const newCourses = courses.map(course => 
      course.id === id ? { ...course, ...updates } : course
    );
    setCourses(newCourses);
    updateStorage('courses', newCourses);
  };

  const deleteCourse = (id) => {
    const newCourses = courses.filter(course => course.id !== id);
    setCourses(newCourses);
    updateStorage('courses', newCourses);
  };

  // Enrollment management
  const enrollStudent = (enrollment) => {
    const newEnrollment = { ...enrollment, id: Date.now() };
    const newEnrollments = [...enrollments, newEnrollment];
    setEnrollments(newEnrollments);
    updateStorage('enrollments', newEnrollments);
  };

  const updateEnrollment = (id, updates) => {
    const newEnrollments = enrollments.map(enrollment => 
      enrollment.id === id ? { ...enrollment, ...updates } : enrollment
    );
    setEnrollments(newEnrollments);
    updateStorage('enrollments', newEnrollments);
  };

  // Payment management
  const addPayment = (payment) => {
    const newPayment = { ...payment, id: Date.now() };
    const newPayments = [...payments, newPayment];
    setPayments(newPayments);
    updateStorage('payments', newPayments);
    return newPayment;
  };

  const updatePayment = (id, updates) => {
    const newPayments = payments.map(payment => 
      payment.id === id ? { ...payment, ...updates } : payment
    );
    setPayments(newPayments);
    updateStorage('payments', newPayments);
  };

  const value = {
    users,
    courses,
    enrollments,
    payments,
    addUser,
    updateUser,
    deleteUser,
    addCourse,
    updateCourse,
    deleteCourse,
    enrollStudent,
    updateEnrollment,
    addPayment,
    updatePayment
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}