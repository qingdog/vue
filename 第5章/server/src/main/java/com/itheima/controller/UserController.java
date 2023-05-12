package com.itheima.controller;

import com.itheima.dto.R;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    List<Map<String, Object>> list = List.of(
            Map.of("name", "张三", "age", 18),
            Map.of("name", "李四", "age", 20),
            Map.of("name", "王五", "age", 22)
    );

    int i = 0;

    @GetMapping("/api/user")
    public R user() throws InterruptedException {
        Thread.sleep(1000);
        return R.ok(list.get(i++ % 3));
    }
}
