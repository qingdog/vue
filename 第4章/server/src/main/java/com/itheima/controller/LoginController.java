package com.itheima.controller;

import com.itheima.dto.LoginDto;
import com.itheima.dto.R;
import com.itheima.dto.UserInfoDto;
import com.itheima.service.SecretKeyService;
import com.itheima.service.UserService;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.crypto.SecretKey;
import javax.servlet.http.HttpSession;
import java.util.Map;

@RestController
public class LoginController {

    @Autowired
    private SecretKeyService secretKeyService;

    @Autowired
    private UserService userService;

    @PostMapping("/api/loginJwt")
    public R loginJwt(@RequestBody LoginDto dto) {
        userService.login(dto.username(), dto.password());
        SecretKey secretKey = secretKeyService.getSecretKey();
        String token = Jwts.builder().signWith(secretKey).setSubject(dto.username()).compact();
        return R.ok(Map.of("token", token));
    }

    @PostMapping("/api/loginSession")
    public R loginSession(@RequestBody LoginDto dto, HttpSession session) {
        userService.login(dto.username(), dto.password());
        session.setAttribute("user", dto.username());
        return R.ok("登录成功");
    }

    @GetMapping("/api/info/{username}")
    public R findUserInfo(@PathVariable String username) {
        return R.ok(userService.findUserInfo(username));
    }

    @PostMapping("/api/info")
    public R updateUserInfo(@RequestBody UserInfoDto dto) {
        userService.updateUserInfo(dto);
        return R.ok("用户信息更新成功");
    }
}
