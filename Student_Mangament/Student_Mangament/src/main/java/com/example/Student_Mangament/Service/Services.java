package com.example.Student_Mangament.Service;

import com.example.Student_Mangament.Module.Student;

import java.util.*;

public interface Services {

    List<Student> getAllStudents();

    Optional<Student> findById(Long id);

    Student createStudent(Student student);

    Student updateStudent(Long id, Student student);

    void deleteStudent(Long id);

    List<Student> searchByName(String name);
}
