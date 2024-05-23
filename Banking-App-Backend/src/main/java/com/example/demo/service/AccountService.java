package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.bean.Account;
import com.example.demo.bean.User;



public interface AccountService {
	
	public void addaccount(Account account);
	
	public List<Account> getallaccount();

	Account updateaccount(Account newAccount, Long id);

	public void deleteaccountbyid(Long id);

	Optional<Account> getaccountbyid(Long id);
	
	public List<Account> getaccbyname(String accountHolderName);
	
	 Account credited(Long id,double amount);
	 
	 Account debited(Long id,double amount);
	 
	 User getUserByUsername(String username);

	

}
