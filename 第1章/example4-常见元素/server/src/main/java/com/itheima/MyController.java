package com.itheima;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.crypto.SecretKey;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.nio.file.Path;
import java.time.LocalDate;
import java.util.List;

@Controller
public class MyController {

    // ------------------------ HTTP 请求

    @RequestMapping("/test")
    @ResponseBody
    public String test(User user, MultipartFile avatar) throws IOException {
        System.out.println("user:" + user);
        if (avatar != null) {
            System.out.println("avatar:" + avatar.getSize());
            avatar.transferTo(Path.of("d:\\", "1.png"));
        }
        return "收到数据";
    }

    record User(Integer id, String username, String password, String sex, List<String> fav,
                @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate birthday) {
    }

    @RequestMapping("/test2")
    @ResponseBody
    public String test2(String name, Integer age) {
        System.out.println(name + " " + age);
        return "收到:" + name + " " + age;
    }

    @RequestMapping("/test3")
    @ResponseBody
    public Req test3(@RequestBody Req req) {
        System.out.println(req);
        return req;
    }

    record Req(String name, int age) {
    }


    // ------------------------ session 原理

    @RequestMapping("/s1")
    @ResponseBody
    public String s1(HttpSession session, String name) {
        session.setAttribute("name", name);
        return "数据已存储";
    }

    @RequestMapping("/s2")
    @ResponseBody
    public String s2(HttpSession session) {
        return "取出数据" + session.getAttribute("name");
    }


    // ------------------------ jwt 原理

    SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    @RequestMapping("/j1")
    @ResponseBody
    public String j1(String name, String pass) {
        if ("zhang".equals(name) && "123".equals(pass)) {
            String token = Jwts.builder().setSubject(name).signWith(key).compact();
            return "验证身份通过:" + token;
        } else {
            return "验证身份失败";
        }
    }

    @RequestMapping("/j2")
    @ResponseBody
    public String j2(@RequestHeader String authorization) {
        try {
            System.out.println(authorization);
            Jws<Claims> jws = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(authorization);
            return "校验通过, 你是:" + jws.getBody().getSubject();
        } catch (Exception e) {
            return "校验失败";
        }
    }
}
