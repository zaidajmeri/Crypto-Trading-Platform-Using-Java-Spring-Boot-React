package com.CryptoTradingPlatform.CryptoTradingPlatform.Model;

import com.CryptoTradingPlatform.CryptoTradingPlatform.Domain.verification;
import jakarta.persistence.Entity;
import lombok.Data;

// import java.lang.classfile.attribute.StackMapFrameInfo;

@Data
public class TwoFactorAuth {
    private boolean isEnabled = false;
    private verification sendTo;

}
