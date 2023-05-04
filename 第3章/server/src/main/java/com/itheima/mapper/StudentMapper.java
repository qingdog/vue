package com.itheima.mapper;

import com.itheima.dto.Student;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface StudentMapper {

    @Select("select * from student")
    List<Student> findAll();

    List<Student> findBy(
            @Param("name") String name,
            @Param("sex") String sex,
            @Param("age") Integer[] age,
            @Param("offset") int offset,
            @Param("limit") int limit
    );

    long findCount(
            @Param("name") String name,
            @Param("sex") String sex,
            @Param("age") Integer[] age
    );
}
