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
        if(user.getId().equals(userRepository.findById(user.getId()))){
         User origUser = userRepository.findById(user.getId()).get();
         origUser.setYourGoals(user.getYourGoals());
         return origUser;
        }

        else {
            return userRepository.save(user);
        }
    }


    public User getAllGoals() {
        return userRepository.findById("1").get();
    }
}
