package com.hsbc.accounts;

import com.hsbc.accounts.exceptions.CreateFailException;
import com.hsbc.accounts.exceptions.InvalidDepositException;
import com.hsbc.accounts.exceptions.InvalidWithdrawlException;

public class Accounts {

	private int accountId;
	private int accountNumber;
	private String name;
	private float balance;

	public Accounts(int accountId, int accountNumber, String name, float balance) throws CreateFailException {
		super();
		
		if(balance<CreateFailException.MINIMUM_AMOUNT) {
			 throw new CreateFailException("Account can be opened with the amount "+balance+" as the mininmum amount should be "+CreateFailException.MINIMUM_AMOUNT);
			
		}
		this.accountId = accountId;
		this.accountNumber = accountNumber;
		this.name = name;
		this.balance = balance;
	}

	public int getAccountId() {
		return accountId;
	}

	public int getAccountNumber() {
		return accountNumber;
	}

	public String getName() {
		return name;
	}

	public float getBalance() {
		return balance;
	}

	public void deposit(int amount) throws InvalidDepositException {
		if(amount<InvalidDepositException.MINIMUM_DEPOSIT) {
			throw new InvalidDepositException("Deposit amount can not be less than "+ InvalidDepositException.MINIMUM_DEPOSIT);
			}
		balance += amount;
	}

	public void withdraw(int amount) throws InvalidWithdrawlException{
		if(amount<0) {
			throw new InvalidWithdrawlException("You entered an invalid amount. Amount can not be less than 0");
		}
		balance-=amount;
		if(balance<5000) {
			throw new InvalidWithdrawlException("You can not withdraw the amount of "+amount+" because your balance will reach "+balance+" that is below the permissible limit");
		}
	}
	public void displayData() {
		System.out.println("Account ID: "+accountId);
		System.out.println("Account No.: "+accountNumber);
		System.out.println("Name: "+name);
		System.out.println("Balance: "+balance);
		System.out.println();
	}

}
