package com.blogs.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class Hostel {

    public Hostel(Long id, String name, String location,String imageurl, int capacity, double rent, double deposit, HostelOwner owner) {
        super();
        this.id = id;
        this.name = name;
        this.location = location;
        this.capacity = capacity;
        this.rent = rent;
        this.deposit = deposit;
        this.owner = owner;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String location;
    private String imageurl;
    private int capacity;
    private double rent;
    private double deposit;

    @ManyToOne
    @JoinColumn(name = "owner_id", nullable = false)
    private HostelOwner owner;
}