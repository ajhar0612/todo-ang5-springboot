package com.emtest.todoapp.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class ToDo {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private Boolean completed;
	
	private String title;
	
	public ToDo() {
		super();
	}
	
	public ToDo(String title) {
		super();
		this.title = title;
	}
	
	public ToDo(Boolean completed, String title) {
		super();
		this.title = title;
		this.completed = completed;
	}
	
	public ToDo(Long id, Boolean completed, String title) {
		super();
		this.id = id;
		this.title = title;
		this.completed = completed;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public Boolean getCompleted() {
		return completed;
	}

	public void setCompleted(Boolean completed) {
		this.completed = completed;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	
	@Override
	public String toString() {
		return "[id: " + this.id + " title: " + this.title + " completed: " + this.completed + "]";
	}

}


