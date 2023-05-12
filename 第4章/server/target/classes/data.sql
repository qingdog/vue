insert into student(name,sex,age) values
    ('宋远桥', '男', 40),
    ('俞莲舟', '男', 38),
    ('俞岱岩', '男', 32),
    ('张松溪', '男', 27),
    ('张翠山', '男', 24),
    ('殷梨亭', '男', 19),
    ('莫声谷', '男', 17);

insert into user(id,username,password) values
    (1, 'admin', '123'),
    (2, 'zhang', '123'),
    (3, 'li', '123');

insert into user_info(username, name, sex) values
    ('admin', '管理员', '男'),
    ('zhang', '张三', '男'),
    ('li', '李四', '男');

insert into role(id, name) values
    (10, '管理员'),
    (11, '运维'),
    (12, '顾客');

insert into menu(id, title, pid, icon, route_path, route_component, route_name, route_parent_name) values
    (101, '菜单1',  0,   'edit-outlined',          '/p1',    '../views/A6P1.vue',  'p1', 'main'),
    (102, '菜单2',  0,   'area-chart-outlined',    '/p2',    '../views/A6P2.vue',  'p2', 'main'),
    (103, '菜单3',  0,   'account-book-outlined',  null,     null,                  null, null) ,
    (104, '菜单31', 103, 'alert-outlined',         '/p31',   '../views/A6P31.vue', 'p31','main'),
    (105, '菜单32', 103, 'appstore-outlined',      '/p32',   '../views/A6P32.vue', 'p32','main');

insert into func(id, name) values
    (200, '功能1'),
    (201, '功能2'),
    (202, '功能3');

insert into user_role values
    (1,10),
    (2,11),
    (3,12);

insert into role_menu values
    (10, 101),
    (10, 102),
    (10, 103),
    (10, 104),
    (10, 105),
    (11, 101),
    (11, 102),
    (12, 103),
    (12, 104);
