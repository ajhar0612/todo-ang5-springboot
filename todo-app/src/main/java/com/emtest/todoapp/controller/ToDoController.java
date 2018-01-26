package com.emtest.todoapp.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emtest.todoapp.entity.ToDo;
import com.emtest.todoapp.exception.ResourceNotFoundException;
import com.emtest.todoapp.service.ToDoService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ToDoController {

	@Autowired
	ToDoService toDoService;

	@GetMapping("/todos")
	public List<ToDo> listAll() {
		return toDoService.listAll();
	}

	@PostMapping("/todos")
	public ToDo createTodo(@Valid @RequestBody ToDo toDo) {
		return toDoService.addToDo(toDo);
	}

	@PutMapping(value = "/todos")
	public ResponseEntity<List<ToDo>> updateTodo(@Valid @RequestBody List<ToDo> todos) {
		try {
			return new ResponseEntity<>(toDoService.updateAll(todos), HttpStatus.OK);
		} catch (ResourceNotFoundException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping(value = "/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable("id") Long id) {

		try {
			toDoService.delete(id);
			return new ResponseEntity<Void>(HttpStatus.OK);
		} catch (ResourceNotFoundException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
