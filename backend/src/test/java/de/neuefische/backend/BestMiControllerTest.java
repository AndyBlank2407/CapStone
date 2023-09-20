package de.neuefische.backend;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
public class BestMiControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private UserRepository userRepository;

    @Test
    @DirtiesContext
    void post() throws Exception {
        mvc.perform(MockMvcRequestBuilders.post("/api/bestmi/postUser")
                .contentType(MediaType.APPLICATION_JSON)
                .content(
                        """
                                
                                {
                                    "yourGoals":[{"id": "2","goalDescription": "BungeeJump", 
                                    "subGoals":[{"event": "getEquieeep", "time": 3, 
                                    "timeGoal": 5, "timeGoalStat": 5}]}]
                                }
                                
                                
                        """
                ))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(

                        """
                               
                               {
                                   "yourGoals":[{"id": "2","goalDescription": "BungeeJump", 
                                   "subGoals":[{"event": "getEquieeep", "time": 3, 
                                   "timeGoal": 5, "timeGoalStat": 5}]}]
                               }
                               
                               
                       """

                ));
    }



}
