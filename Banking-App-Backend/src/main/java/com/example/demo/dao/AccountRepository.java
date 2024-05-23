package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.bean.Account;
import com.example.demo.bean.User;

public interface AccountRepository extends JpaRepository<Account, Long> {

	 List<Account> findAccountByaccountHolderName(String accountHolderName);

	
	 
	
}
