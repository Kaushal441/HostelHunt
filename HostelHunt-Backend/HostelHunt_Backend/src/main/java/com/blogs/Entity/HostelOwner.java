package com.blogs.Entity;
import java.util.List;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Setter
@Getter
@NoArgsConstructor
public class HostelOwner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String contactInfo;
    private String username;
    private String password;

//    @OneToMany(cascade = CascadeType.ALL)
//    @JoinColumn(name = "owner_id")
//    private List<Hostel> hostels;

    public HostelOwner(Long id, String name, String contactInfo, String username, String password) {
        super();
        this.id = id;
        this.name = name;
        this.contactInfo = contactInfo;
        this.username = username;
        this.password = password;
        
    }
}