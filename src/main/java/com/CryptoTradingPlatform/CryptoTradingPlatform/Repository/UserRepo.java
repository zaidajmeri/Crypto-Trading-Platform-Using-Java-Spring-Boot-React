package com.CryptoTradingPlatform.CryptoTradingPlatform.Repository;



//will manage out database from this repo

import com.CryptoTradingPlatform.CryptoTradingPlatform.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.JpaRepositoryConfigExtension;

public interface UserRepo extends JpaRepository<User,Long> {

}
