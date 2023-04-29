package com.itheima;

import org.junit.jupiter.api.Test;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class TestJwt {
    @Test
    public void test() {
        //              header(签名算法)       payload(数据)        签名
        //                                   eyJzdWIiOiJhZG1pbiJ9
        String token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6aGFuZyJ9._1-P_TLlzQPb1_lCyGwplMZaKQ8Mcw_plBbYPZ3OX28";
        //               1                   2           3 ==> 6
        //               1                   4           3 ==> 8

        System.out.println(new String(Base64.getDecoder().decode("eyJhbGciOiJIUzI1NiJ9")));
        System.out.println(new String(Base64.getDecoder().decode("eyJzdWIiOiJ6aGFuZyJ9")));
        // admin

        String str = """
                {"sub":"admin"}""";
        System.out.println(Base64.getEncoder().encodeToString(str.getBytes(StandardCharsets.UTF_8)));
    }
}
