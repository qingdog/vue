package com.itheima.dto;

import java.util.List;

public class Menu {
    private int id;
    private String title;
    private int pid;
    private String icon;
    private String routePath;
    private String routeComponent;
    private String routeName;
    private String routeParentName;

    private List<Menu> children;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getRoutePath() {
        return routePath;
    }

    public void setRoutePath(String routePath) {
        this.routePath = routePath;
    }

    public String getRouteComponent() {
        return routeComponent;
    }

    public void setRouteComponent(String routeComponent) {
        this.routeComponent = routeComponent;
    }

    public String getRouteName() {
        return routeName;
    }

    public void setRouteName(String routeName) {
        this.routeName = routeName;
    }

    public String getRouteParentName() {
        return routeParentName;
    }

    public void setRouteParentName(String routeParentName) {
        this.routeParentName = routeParentName;
    }

    public List<Menu> getChildren() {
        return children;
    }

    public void setChildren(List<Menu> children) {
        this.children = children;
    }
}