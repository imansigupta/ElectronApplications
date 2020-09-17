package com.hsbc.accounts.main;

import com.hsbc.accounts.Accounts;
import com.hsbc.accounts.exceptions.CreateFailException;
import com.hsbc.accounts.exceptions.InvalidDepositException;
import com.hsbc.accounts.exceptions.InvalidWithdrawlException;

public class AccountsMain {

	public static void main(String[] args) {
		Accounts account = null;
		try {
			account = new Accounts(101, 123456789, "Mansi Gupta", 5000);
			account.displayData();

			account.deposit(-10000);
			account.displayData();

			account.withdraw(1000);
			account.displayData();
		} catch (CreateFailException cf) {
			System.out.println(cf.getMessage());
		} catch (InvalidDepositException id) {
			System.out.println(id.getMessage());
		} catch (InvalidWithdrawlException iw) {
			System.out.println(iw.getMessage());
		}

	}

}
