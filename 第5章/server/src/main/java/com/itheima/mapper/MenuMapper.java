package com.itheima.mapper;

import com.itheima.dto.Menu;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface MenuMapper {

    @Select("select * from menu")
    List<Menu> findAll();

    @Select("""
            select m.* from menu m
                inner join role_menu rm on m.id=rm.menu_id
                where rm.role_id in
                (
                    select ur.role_id from user_role ur
                        inner join user u on ur.user_id=u.id
                        where u.username = #{username}
                )
            """)
    List<Menu> findByUser(String username);
}
