package com.example.Student_Mangament.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Student_Mangament.Module.Student;
import com.example.Student_Mangament.Service.Services;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "http://localhost:5173")
public class ApiController {

    private final Services service;

    public ApiController(Services service) {
        this.service = service;
    }

    // GET ALL or SEARCH
    @GetMapping
    public List<Student> getAll(@RequestParam(value = "name", required = false) String name) {
        if (name != null && !name.isBlank()) {
            return service.searchByName(name);
        }
        return service.getAllStudents();
    }

    // GET by ID
    @GetMapping("/{id}")
    public ResponseEntity<Student> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // CREATE
    @PostMapping
    public Student createStudent(@RequestBody Student student) {
        return service.createStudent(student);
    }

    // UPDATE
    @PutMapping("/{id}")
    public Student update(@PathVariable Long id, @RequestBody Student student) {
        return service.updateStudent(id, student);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.deleteStudent(id);
        return ResponseEntity.noContent().build();
    }
}
