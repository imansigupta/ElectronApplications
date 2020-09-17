package com.hsbc.accounts.exceptions;

public class InvalidDepositException extends Exception {
	public final static int MINIMUM_DEPOSIT = 10000;
	
	public InvalidDepositException(String message) {
		super(message);
	}
}
