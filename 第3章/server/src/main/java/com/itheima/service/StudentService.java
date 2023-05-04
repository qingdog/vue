package com.itheima.service;

import com.itheima.dto.Student;
import com.itheima.dto.StudentQueryDto;
import com.itheima.mapper.StudentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    public List<Student> findAll() {
        return studentMapper.findAll();
    }

    public List<Student> findBy(StudentQueryDto q) {
        return studentMapper.findBy(q.name(), q.sex(), q.age(), q.offset(), q.limit());
    }

    public long findCount(StudentQueryDto q) {
        return studentMapper.findCount(q.name(), q.sex(), q.age());
    }

    @Autowired
    private StudentMapper studentMapper;
}
