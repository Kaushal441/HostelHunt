package com.blogs.Entity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String username;
    private String password;

//    @ManyToOne
//    @JoinColumn(name = "hostel_id", nullable = true)
//    private Hostel hostel;

    public Student(Long id, String name, String email, String username, String password) {
        super();
        this.id = id;
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        
    }
}