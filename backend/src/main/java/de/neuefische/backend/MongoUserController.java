package de.neuefische.backend;


import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class MongoUserController {

    private final MongoUserDetailsService mongoUserService;

    @PostMapping
    public String saveUser(@RequestBody MongoUser mongoUser){
        return mongoUserService.saveUser(mongoUser).getUsername();
    }


    @PostMapping("/login")
    public String login(){
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }
}
