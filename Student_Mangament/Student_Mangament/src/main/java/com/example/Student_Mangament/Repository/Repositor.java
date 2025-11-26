package com.example.Student_Mangament.Repository;

import com.example.Student_Mangament.Module.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Repositor extends JpaRepository<Student, Long> {

    // fixed spelling and added IgnoreCase for case-insensitive search
    List<Student> findByFirstNameContaining(String name);
}
