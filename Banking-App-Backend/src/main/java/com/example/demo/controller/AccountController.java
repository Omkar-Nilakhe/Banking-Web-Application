package com.example.demo.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.bean.Account;
import com.example.demo.bean.User;
import com.example.demo.service.AccountService;





@CrossOrigin("http://localhost:4200/")
@RestController
public class AccountController {
	
	@Autowired
	AccountService as;
	
	@PostMapping("/addAccount")
	public void addacc(@RequestBody Account a) {
		as.addaccount(a);
	}
	
	@GetMapping("/allAccounts")
	public List<Account> getallacc() {
		return (List<Account>)as.getallaccount();
	}
	
	@GetMapping("/getAccbyid/{id}")
	public Optional<Account> getaccbyid(@PathVariable Long id){
		return as.getaccountbyid(id);
		
	}
	
	@DeleteMapping("/deleteAcc/{id}")
	public void deleteaccbyid(@PathVariable Long id){
		as.deleteaccountbyid(id);
		
	}
	
	@PutMapping("/updateAcc/{id}")
	public Account updateacc(@RequestBody Account newAccount,@PathVariable Long id) {
		System.out.println("update account is called...");
		return as.updateaccount(newAccount, id);
		
	}
	
	@GetMapping("/getaccbyahname/{accountHolderName}")
	public List<Account> getaccbyahname(@PathVariable String accountHolderName) {
		return (List<Account>)as.getaccbyname(accountHolderName);
		
	}
	
//	(http://localhost:8082/deposit/193034)
//	it gets id from url using @Pathvariable and one value from user input json using @RequestBody
	
	@PutMapping("/deposit/{id}")  
	public Account deposit(@PathVariable Long id, @RequestBody Map<String, Double> requestBody) {
	    Double amount = requestBody.get("amount");
	    return as.credited(id, amount);
	}

	// two another way to write above code
//	@PutMapping("/deposit/{id}")  (http://localhost:8082/deposit/193034?amount=5000)
//	public Account deposit(@PathVariable Long id, @RequestParam("amount") Double amount) {
//	    return as.credited(id, amount);
//	}

//    @PutMapping("/deposit/{id}/{amount}") (http://localhost:8082/deposit/193034/5000)
//    public Account deposite(@PathVariable Long id,@PathVariable Double amount) {
//    	return as.credited(id, amount);
//    }
	
//	@RequestParam it is used to fetch the value from query like (http://localhost:8082/example?param1=value1&param2=42)
//	@PathVariable it used to fetch value from url.
//	@RequestBody it is fetch the value from the user input .

	@PutMapping("/withdraw/{id}")
	public Account withdraw(@PathVariable Long id,@RequestBody Map<String, Double> request) {
		
		Double amount=request.get("amount");
		return as.debited(id, amount);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> getuserbyname(@RequestBody User userdata) {
		User user=as.getUserByUsername(userdata.getUsername());
		if(user.getPassword().equals(userdata.getPassword())) {
			return ResponseEntity.ok(user);
		}
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
		
	}
	
}
