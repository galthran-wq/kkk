 
package com.resitplatform.application.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.resitplatform.api.dto.UserDto;
import com.resitplatform.application.TokenAssembler;
import com.resitplatform.application.UserAssembler;
import com.resitplatform.domain.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Calendar;
import java.util.Date;

@Service
public class DefaultJwtService implements JwtService {

    private final Key key;

    public DefaultJwtService(@Value("${security.jwt.secret}") String secret) {
        byte[] keyBytes = Decoders.BASE64.decode(secret);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    @Override
    public String getSubject(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    @Override
    public String getToken(User user) {

        ObjectMapper mapper = new ObjectMapper();
        String jsonUser = "";
        try {
            jsonUser = mapper.writeValueAsString(
                    TokenAssembler.assemble(user)
            );
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        Calendar c = Calendar.getInstance();
        c.add(Calendar.MONTH, 1);
        Date expiration = c.getTime();

        return Jwts.builder()
                .setSubject(user.getUsername())
                // todo should be subject; JwtFilter should parse jsonUser for username
                .claim("temp", jsonUser)
                .setExpiration(expiration)
                .signWith(key)
                .compact();
    }
}
