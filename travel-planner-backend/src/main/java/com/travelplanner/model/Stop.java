package com.travelplanner.model;

public class Stop {
    protected String name;
    protected String location;

    public Stop(String name, String location) {
        this.name = name;
        this.location = location;
    }

    public String getName() { return name; }
    public String getLocation() { return location; }
}
