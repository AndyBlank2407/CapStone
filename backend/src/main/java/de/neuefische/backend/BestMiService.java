package de.neuefische.backend;

import de.neuefische.backend.UserRepository;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Data
@RequiredArgsConstructor
public class BestMiService {

    private final UserRepository userRepository;

    public User addUser(User user){
       return userRepository.save(user);
    }

}
