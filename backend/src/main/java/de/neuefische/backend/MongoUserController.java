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

    /*Kann über Principal quasi ein Namensschild des Cookies abrufen und dann wenn vorhandenes Cookie
    ohne nochmaligen Login darauf zugreifen oder noch authenthifiziert sein. Bei der folgenden Methode kann nur
    aus dem Controller drauf zugegriffen werden!
     */
    @GetMapping("/me")
    public String getMe1(Principal principal){
        if(principal != null){
            return principal.getName();
        }
        return "anonymous user";
    }

    @GetMapping("/me2")
    public String getMe2(){   //Name wird aus Sercurity-Context geladen!
        return SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
    }

    @PostMapping("/login")
    public String login(){
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }
}
