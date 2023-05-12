package com.itheima.dto;

import java.util.List;

public record MenuAndRoute(List<Route> routeList, List<Menu> menuTree) {
}
