package de.neuefische.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("api/bestmi")
@RequiredArgsConstructor
public class BestMiController {

    private final BestMiService bestMiService;

    @PostMapping("/postUser")
    public User postUser(@RequestBody User user) {
        return bestMiService.addUser(user);
    }

    @GetMapping("/getAllGoals")
    public User getAllGoals() {
        return bestMiService.getAllGoals();
    }

    @PutMapping("/updateTime")
    public User updateUser(@RequestBody User user) {
        return bestMiService.updateGoalTime(user);
    }


}



