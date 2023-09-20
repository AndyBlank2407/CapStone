package de.neuefische.backend;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class YourGoal {

    private String id;
    private String description;
    private List<SubGoal> subGoals;
}
