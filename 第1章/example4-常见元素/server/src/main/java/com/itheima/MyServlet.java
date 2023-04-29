package com.itheima;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

//@WebServlet("/test")
public class MyServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("enter...");
        BufferedReader reader = new BufferedReader(new InputStreamReader(req.getInputStream(), "utf-8"));
        String line = null;
        while (true) {
            line = reader.readLine();
            if (line == null) {
                break;
            }
            System.out.println(line);
        }
    }
}
