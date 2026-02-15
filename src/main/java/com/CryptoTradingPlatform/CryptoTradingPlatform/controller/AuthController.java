package com.CryptoTradingPlatform.CryptoTradingPlatform.controller;

import com.CryptoTradingPlatform.CryptoTradingPlatform.Model.User;
import com.CryptoTradingPlatform.CryptoTradingPlatform.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserRepo userRepo;


    //register method
    @PostMapping("/signup")
    public ResponseEntity<User>  responseEntity(@RequestBody User user){
        User newUser = new User();
        newUser.setEmail(user.getEmail());
        newUser.setPassWord(user.getPassWord());
        newUser.setFullName(user.getFullName());


        User savedUser = userRepo.save(newUser);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);

    }
}
