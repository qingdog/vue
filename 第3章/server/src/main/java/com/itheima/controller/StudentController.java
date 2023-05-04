package com.itheima.controller;

import com.itheima.dto.R;
import com.itheima.dto.StudentQueryDto;
import com.itheima.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.Map;

@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/api/students")
    public R all() {
        return R.ok(studentService.findAll());
    }

    @GetMapping("/api/students/q")
    public R q(StudentQueryDto queryDto) {
        System.out.println(Arrays.toString(queryDto.age()));
        return R.ok(
                Map.of(
                        "list", studentService.findBy(queryDto),
                        "total", studentService.findCount(queryDto)
                )
        );
    }
}
