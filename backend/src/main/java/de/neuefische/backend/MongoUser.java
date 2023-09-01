package de.neuefische.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import lombok.With;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@Document("UserRecap")
@NoArgsConstructor
@With
public class MongoUser {

    @Id
    private String id;
    private String username;
    private String password;
}
