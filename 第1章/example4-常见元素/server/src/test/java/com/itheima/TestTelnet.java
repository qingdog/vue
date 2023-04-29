package com.itheima;

import java.io.*;
import java.net.Socket;
import java.nio.charset.StandardCharsets;

public class TestTelnet {

    public static void main(String[] args) throws IOException {
        Socket s = new Socket("localhost", 8080);

        new Thread(()->{
            try {
                InputStream is = s.getInputStream();
                BufferedReader reader = new BufferedReader(new InputStreamReader(is, "utf-8"));
                String line;
                System.out.println();
                while ((line = reader.readLine()) != null) {
                    System.out.println(line);
                }

            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }).start();

        String get = """
                GET /test2?name=zhang HTTP/1.0
                Host: localhost\r\n\r\n""";
        String param = "name=zhangsan";
        String post = """
                POST /test2 HTTP/1.0
                Host: localhost
                Content-Type: application/x-www-form-urlencoded
                Content-Length: """ + param.length() + "\r\n\r\n" + param;
        new Thread(()->{
            try {
                String req = post;
                System.out.println(req);
                OutputStream os = s.getOutputStream();
                os.write(req.getBytes(StandardCharsets.UTF_8));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }).start();
    }
}
