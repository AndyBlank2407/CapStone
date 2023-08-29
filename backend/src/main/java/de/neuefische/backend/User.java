package de.neuefische.backend;

import lombok.Data;

import java.util.List;

@Data
public class User {
    private List<YourGoal> yourGoals;
}
