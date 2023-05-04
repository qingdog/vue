insert into menu(id, name, icon, path, pid) values
    (100, '主页', 'el-icon-menu', '/', 0),
        (101, '菜单1', 'el-icon-menu', '/menu1', 100),
            (105, '子项1', 'el-icon-menu', '/menu1/c1', 101),
            (106, '子项2', 'el-icon-menu', '/menu1/c2', 101),
        (102, '菜单2', 'el-icon-menu', '/menu2', 100),
            (107, '子项3', 'el-icon-menu', '/menu2/c3', 102),
            (108, '子项4', 'el-icon-menu', '/menu2/c4', 102),
            (109, '子项5', 'el-icon-menu', '/menu2/c5', 102),
        (103, '菜单3', 'el-icon-menu', '/menu3', 100),
            (110, '子项6', 'el-icon-menu', '/menu3/c6', 103),
            (111, '子项7', 'el-icon-menu', '/menu3/c7', 103),
        (104, '菜单4', 'el-icon-menu', '/menu4', 100);