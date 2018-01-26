package com.emtest.todoapp.exception;

/**
 * <p>
 * This exceptions occurs when resource do not found in persist layer.
 * </p>
 * @author ajhar.shaikh
 *
 */
public class ResourceNotFoundException extends Exception {
	
	private static final long serialVersionUID = -257640101941307258L;

	public ResourceNotFoundException() {
		super("Resource Not found");
	}

}
