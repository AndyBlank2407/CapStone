package de.neuefische.backend;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;

@SpringBootTest
@AutoConfigureMockMvc
public class BestMiControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private UserRepository userRepository;


    @WithMockUser
    @Test
    @DirtiesContext
    void post() throws Exception {
        mvc.perform(MockMvcRequestBuilders.post("/api/bestmi/postUser")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """
                                                
                                                {
                                                    "yourGoals":[{"id": "2","description": "BungeeJump", 
                                                    "subGoals":[{"event": "getEquieeep", "time": 3, 
                                                    "timeGoal": 5, "timeGoalStat": 5}]}]
                                                }
                                                
                                                
                                        """
                        ).with(csrf())) //for any post- and update-tests
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(

                        """
                                        
                                        {    "id": "1",
                                            "yourGoals":[{"id": "2","description": "BungeeJump", 
                                            "subGoals":[{"event": "getEquieeep", "time": 3, 
                                            "timeGoal": 5, "timeGoalStat": 5}]}]
                                        }
                                        
                                        
                                """

                ));
    }


    @Test
    @DirtiesContext
    @WithMockUser
    void getAllGoalsFromEmptyDB() throws Exception {
        YourGoal yourGoal = new YourGoal("1", "BungeeJump", List.of(new SubGoal("get Teacher", 6, 8, 8)));

        User user = new User("1", List.of(yourGoal));

        mvc.perform(MockMvcRequestBuilders.get("/api/bestmi/getAllGoals"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(
                                """
                                                                                
                                         {
                                           "id" :"1",
                                           "yourGoals" : null
                                                 }  
                                 """


                        ));

    }


    @Test
    @DirtiesContext
    @WithMockUser
    void getAllGoals() throws Exception {

        mvc.perform(MockMvcRequestBuilders.post("/api/bestmi/postUser")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """  
                                                        {
                                                            "yourGoals":[{"id": "1","description": "BungeeJump", 
                                                            "subGoals":[{"event": "getEquieeep", "time": 5, 
                                                            "timeGoal": 8, "timeGoalStat": 8}]}]
                                                        }    
                                        """
                        ).with(csrf())) //for any post- and update-tests
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(

                        """
                                        {    "id": "1",
                                            "yourGoals":[{"id": "1","description": "BungeeJump", 
                                            "subGoals":[{"event": "getEquieeep", "time": 5, 
                                            "timeGoal": 8, "timeGoalStat": 8}]}]
                                        }  
                                """

                ));

        mvc.perform(MockMvcRequestBuilders.get("/api/bestmi/getAllGoals"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(
                        """   
                                 {    "id": "1",
                                            "yourGoals":[{"id": "1","description": "BungeeJump", 
                                            "subGoals":[{"event": "getEquieeep", "time": 5, 
                                            "timeGoal": 8, "timeGoalStat": 8}]}]
                                  } 
                                """
                ));
    }


    @Test
    @DirtiesContext
    @WithMockUser
    void updateGoalTimePut() throws Exception {

        mvc.perform(MockMvcRequestBuilders.post("/api/bestmi/postUser")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """  
                                                        {
                                                            "yourGoals":[{"id": "1","description": "BungeeJump", 
                                                            "subGoals":[{"event": "getEquieeep", "time": 5, 
                                                            "timeGoal": 8, "timeGoalStat": 8}]}]
                                                        }    
                                        """
                        ).with(csrf())) //for any post- and update-tests
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(

                        """
                                        {    "id": "1",
                                            "yourGoals":[{"id": "1","description": "BungeeJump", 
                                            "subGoals":[{"event": "getEquieeep", "time": 5, 
                                            "timeGoal": 8, "timeGoalStat": 8}]}]
                                        }  
                                """

                ));


        mvc.perform(MockMvcRequestBuilders.put("/api/bestmi/updateTime")
                .contentType(MediaType.APPLICATION_JSON)
                .content(
                        """
                                {
                                                     "yourGoals":[{"id": "1","description": "BungeeJump", 
                                                     "subGoals":[{"event": "getEquieeep", "time": 1, 
                                                     "timeGoal": 1, "timeGoalStat": 8}]}]
                                                 }    
                                 """
                )
                .with(csrf())) //for any post- and update-tests
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(
                        """
                                {
                                                 "yourGoals":[{"id": "1","description": "BungeeJump", 
                                                 "subGoals":[{"event": "getEquieeep", "time": 1, 
                                                 "timeGoal": 1, "timeGoalStat": 8}]}]
                                             }   
                                """
                ));
    }


}
