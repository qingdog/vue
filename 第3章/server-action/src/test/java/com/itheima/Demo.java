package com.itheima;

import java.util.ArrayList;

public class Demo {
    public static <T extends Animal> void go1(ArrayList<T> list, T t){
        list.add(t); // 正确（读写都可以）
        for (T t1 : list) { // 正确

        }
    }

    public static void go2(ArrayList<? extends Animal> list, Animal a){
        list.add(a); // 错误
        for (Animal animal : list) { // 正确（只能读）

        }
    }

    public static void main(String[] args) {
        ArrayList<Dog> list1 = new ArrayList<>();
        ArrayList<Object> list2 = new ArrayList<>();
        go1(list1);
        go2(list1);

        C<Animal> c1 = new C<>();
        C<Dog> c2 = new C<>();
        C<Cat> c3 = new C<>();
        C<Object> c4 = new C<>();

        test(c1);
        test(c2);
        test(c3);
        test(c4);
    }

    public static void test(C<? super Animal> c){
        c.set(new Cat());
        c.set(new Animal());
    }



}
class C<T> {
    T t;
    T get() {
        return t;
    }
    void set(T t){
        this.t = t;
    }
}
class Animal {}
class Dog extends Animal {}
class Cat extends Animal {}