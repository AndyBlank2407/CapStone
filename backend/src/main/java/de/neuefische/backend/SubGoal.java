package de.neuefische.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubGoal {

    private String event;
    private int time;
    private int timeGoal;
    private int timeGoalStat;

}
