package de.neuefische.backend;

import lombok.Data;

import java.util.List;

@Data
public class YourGoal {

    private String goalDescription;
    private List<SubGoal> subGoals;
}
