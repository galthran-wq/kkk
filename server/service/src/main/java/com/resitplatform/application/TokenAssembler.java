package com.resitplatform.application;

import com.resitplatform.api.dto.UserDto;
import com.resitplatform.domain.model.User;

public class TokenAssembler {

    public static UserDto assemble(User user) {
        return UserDto.builder()
                .email(user.getEmail())
                .isTeacher(user.getIs_teacher())
                .username(user.getUsername())
                .bio(user.getBio())
                .image(user.getImage())
                .build();
    }

}
