package com.emtest.todoapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.emtest.todoapp.entity.ToDo;

@Service
public interface ToDoService {

	List<ToDo> listAll();

	ToDo addToDo(ToDo toDo);

	List<ToDo> updateAll(List<ToDo> todos) throws Exception;

	void update(Long id) throws Exception;
    
    

}
