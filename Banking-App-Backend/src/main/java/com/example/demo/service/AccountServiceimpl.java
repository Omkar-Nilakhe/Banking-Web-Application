package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.bean.Account;
import com.example.demo.bean.User;
import com.example.demo.dao.AccountRepository;
import com.example.demo.dao.UserRepository;

@Service
public class AccountServiceimpl implements AccountService{
	
	@Autowired
	AccountRepository Arepo;
	
	@Autowired
	UserRepository Urepo;

	@Override
	public void addaccount(Account account) {
		  Arepo.save(account);
		
	}

	@Override
	public List<Account> getallaccount() {
		
		return (List<Account>)Arepo.findAll();
	}

	@Override
	public Optional<Account> getaccountbyid(Long id) {
		
		return Arepo.findById(id);
	}

	@Override
	public Account updateaccount(Account newAccount, Long id) {
		System.out.println("update account is called...");
		return Arepo.findById(id)
				.map(account-> {account.setAccountHolderName(newAccount.getAccountHolderName());
				account.setBalance(newAccount.getBalance());
					return Arepo.save(account);
				})
				.orElseGet(() -> {
					return Arepo.save(newAccount);
				});
				
	}

	@Override
	public void deleteaccountbyid(Long id) {
		Arepo.deleteById(id);
		
	}

	@Override
	public List<Account> getaccbyname(String accountHolderName) {
		
		return (List<Account>)Arepo.findAccountByaccountHolderName(accountHolderName);
	}

	@Override
	public Account credited(Long id, double amount) {
		
		Account account= Arepo.findById(id).orElseThrow(()->new RuntimeException("Account does not exists!"));
		
		double TotalAmount=account.getBalance() + amount;
		
		account.setBalance(TotalAmount);
		
		Account savedAccount =Arepo.save(account);
		
		return savedAccount;
	}

	@Override
	public Account debited(Long id, double amount) {
		
		Account account= Arepo.findById(id).orElseThrow(()->new RuntimeException("Account does not exists!"));
		
		if(account.getBalance()<amount) {
			
			 throw new RuntimeException("Insufficient Funds!");
			
		}
		double TotalAmount=account.getBalance() - amount;
		
		account.setBalance(TotalAmount);
		
		Account savedAccount =Arepo.save(account);
		
		return savedAccount;
	}

	@Override
	public User getUserByUsername(String username) {
		
		return Urepo.findByUsername(username);
	}



}
