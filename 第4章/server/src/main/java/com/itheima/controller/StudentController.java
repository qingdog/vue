package com.itheima.controller;

import com.itheima.dto.R;
import com.itheima.dto.StudentQueryDto;
import com.itheima.dto.StudentSaveDto;
import com.itheima.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/api/students")
    public R all() {
        return R.ok(studentService.findAll());
    }

    @PostMapping("/api/students")
    public R insert(@RequestBody StudentSaveDto dto) {
        studentService.insert(dto);
        return R.ok("新增成功");
    }

    @PutMapping("/api/students/{id}")
    public R update(@PathVariable int id, @RequestBody StudentSaveDto dto) {
        studentService.update(id, dto);
        return R.ok("修改成功");
    }

    @DeleteMapping("/api/students/{id}")
    public R delete(@PathVariable int id) {
        studentService.deleteById(id);
        return R.ok("删除成功");
    }

    @DeleteMapping("/api/students")
    public R delete(@RequestBody int[] ids) {
        studentService.deleteByIds(ids);
        return R.ok("删除成功");
    }

    // /api/students/q?name=&age=&page=
    @GetMapping("/api/students/q")
    public R q(StudentQueryDto queryDto) throws InterruptedException {
        return R.ok(
                Map.of(
                        "list", studentService.findBy(queryDto),
                        "total", studentService.findCount(queryDto)
                )
        );
    }
}
