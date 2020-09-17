package com.hsbc.accounts.exceptions;

public class CreateFailException extends Exception {
	
	public final static int MINIMUM_AMOUNT = 5000;
	
	public CreateFailException(String message) {
		super(message);
	}
}
