package de.neuefische.backend;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@Data
public class User {

    //private String name;
    private String id = "1";
    private List<YourGoal> yourGoals;


}
