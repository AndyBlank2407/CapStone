package de.neuefische.backend;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SubGoal {

    private String event;
    private int time;
    private int timeGoal;
    private int timeGoalStat;

}
