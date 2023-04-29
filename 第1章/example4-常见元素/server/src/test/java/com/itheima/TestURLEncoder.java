package com.itheima;

import org.junit.jupiter.api.Test;

import java.nio.charset.StandardCharsets;

public class TestURLEncoder {
    @Test
    public void test() throws Exception {
        // utf-8
        byte[] bytes = "张".getBytes(StandardCharsets.UTF_8);
        System.out.println(bytes);

        for (byte b : bytes) {
            System.out.println(Integer.toHexString(Byte.toUnsignedInt(b)));
        }
    }
}
