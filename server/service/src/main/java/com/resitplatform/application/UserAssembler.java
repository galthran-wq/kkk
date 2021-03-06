 
package com.resitplatform.application;

import com.resitplatform.api.dto.UserDto;
import com.resitplatform.application.service.JwtService;
import com.resitplatform.domain.model.User;

public class UserAssembler {

    // Todo it should only output token; and the client would get the information by simply decoding it.
    public static UserDto assemble(User user, JwtService jwtService) {
        return UserDto.builder()
                .email(user.getEmail())
                .isTeacher(user.getIs_teacher())
                .username(user.getUsername())
                .token(jwtService.getToken(user))
                .bio(user.getBio())
                .image(user.getImage())
                .build();
    }

}
