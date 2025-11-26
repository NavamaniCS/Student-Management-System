package com.example.Student_Mangament.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.Student_Mangament.Module.Student;
import com.example.Student_Mangament.Repository.Repositor;

@Service
public class ServiImple implements Services {

    private final Repositor repo;

    public ServiImple(Repositor repo) {
        this.repo = repo;
    }

    @Override
    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    @Override
    public Optional<Student> findById(Long id) {
        return repo.findById(id);
    }

    @Override
    public Student createStudent(Student student) {
        return repo.save(student);
    }

    @Override
    public Student updateStudent(Long id, Student student) {

        Student existing = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not Found"));

        existing.setFirstName(student.getFirstName());
        existing.setLastName(student.getLastName());
        existing.setEmail(student.getEmail());
        existing.setCourse(student.getCourse());
        existing.setYear(student.getYear());
        existing.setEnrolledDate(student.getEnrolledDate());

        return repo.save(existing);
    }

    @Override
    public void deleteStudent(Long id) {
        repo.deleteById(id);
    }

    @Override
    public List<Student> searchByName(String name) {
        return repo.findByFirstNameContaining(name);
    }
}
