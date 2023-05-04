package com.itheima.service;

import com.itheima.dto.Menu;
import com.itheima.mapper.MenuMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {

    @Autowired
    private MenuMapper menuMapper;

    public List<Menu> findAll() {
        return menuMapper.findAll();
    }

    public List<Menu> findByUser(String username) {
        return menuMapper.findByUser(username);
    }
}
