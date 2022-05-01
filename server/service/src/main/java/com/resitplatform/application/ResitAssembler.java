package com.resitplatform.application;

import com.resitplatform.api.dto.ProfileDto;
import com.resitplatform.api.dto.ResitDto;
import com.resitplatform.domain.model.Resit;
import com.resitplatform.domain.model.User;
import org.springframework.context.annotation.Profile;

public class ResitAssembler {
    public static ResitDto assemble(Resit resit) {
        Object[] participants = resit.getParticipants().toArray();
        ProfileDto[] participantsDtos = new ProfileDto[participants.length];


        for (int i = 0; i < participants.length; i++) {
            participantsDtos[i] = ProfileAssembler.assemble((User) participants[i]);
        }

        return ResitDto.builder()
                .id(resit.getId())
                .slug(resit.getSlug())
                .teacher(ProfileAssembler.assemble(resit.getResponsibleTeacher()))
                .name(resit.getName())
                .startDate(resit.getStartDate())
                .hasEnded(resit.getHasEnded())
                .description(resit.getDescription())
                .image(resit.getImage())
                .participants(participantsDtos)
                .build();
    }

}
