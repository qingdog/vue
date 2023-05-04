package com.itheima;

import io.jsonwebtoken.lang.Objects;
import org.openjdk.jol.vm.VM;

public class Test {
    public static void main(String[] args) {
        int[] a = new int[0];
        System.out.println(VM.current().addressOf(a));
        System.out.println(System.identityHashCode(a));
        System.out.println(VM.current().addressOf(a));

        System.gc();
        System.out.println(VM.current().addressOf(a));
        System.out.println(Objects.identityToString(a));
        System.out.println(a);

    }
}
