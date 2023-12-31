package de.neuefische.backend;


import de.neuefische.backend.MongoUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import de.neuefische.backend.*;


@RequiredArgsConstructor
@Service
public class MongoUserDetailsService implements UserDetailsService {


    private final MongoUserRepository mongoUserRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        MongoUser mongoUser = mongoUserRepository.findMongoUserByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User with username: "+username+" not found!"));
        return new User(mongoUser.getUsername(), mongoUser.getPassword(), List.of());
    }




    public MongoUser saveUser(MongoUser mongoUser) {
        if(mongoUserRepository.findMongoUserByUsername(mongoUser.getUsername()).equals(mongoUser.getUsername())){
            throw new IllegalArgumentException("Username already taken!");
        }


        PasswordEncoder encoder = Argon2PasswordEncoder.defaultsForSpringSecurity_v5_8();
        mongoUserRepository.save(mongoUser.withPassword(encoder.encode(mongoUser.getPassword())));
        return mongoUserRepository.findMongoUserByUsername(mongoUser.getUsername()).orElseThrow();
    }
}
