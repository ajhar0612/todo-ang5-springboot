package com.emtest.todoapp.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emtest.todoapp.entity.ToDo;
import com.emtest.todoapp.repository.ToDoRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ToDoController {


    @Autowired
    ToDoRepository todoRepository;

    @GetMapping("/todos")
    public List<ToDo> getAllTodos() {
        Sort sortByCreatedAtDesc = new Sort(Sort.Direction.ASC, "id");
        return todoRepository.findAll(sortByCreatedAtDesc);
    }

    @PostMapping("/todos")
    public ToDo createTodo(@Valid @RequestBody ToDo todo) {
        todo.setCompleted(false);
        return todoRepository.save(todo);
    }

    @GetMapping(value="/todos/{id}")
    public ResponseEntity<ToDo> getTodoById(@PathVariable("id") Long id) {
        ToDo todo = todoRepository.findOne(id);
        if(todo == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(todo, HttpStatus.OK);
        }
    }

    @PutMapping(value="/todos")
    public ResponseEntity<List<ToDo>> updateTodo(@Valid @RequestBody List<ToDo> todos) {
    		List<Long> toDoIdList = new ArrayList<Long>();
        for(ToDo item : todos) {
        		toDoIdList.add(item.getId());
        }
        List<ToDo> todoDataList = todoRepository.findAll(toDoIdList);
        if(todoDataList.size() != todos.size()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        for(ToDo item : todoDataList) {
        		item.setCompleted(true);
	    }

        List<ToDo> updatedList = todoRepository.save(todoDataList);
        return new ResponseEntity<>(updatedList, HttpStatus.OK);
    }

    @PostMapping(value="/todos/delete")
    public void deleteTodo(@RequestBody List<Long> todoIdList) {
    
        List<ToDo> todoDataList =todoRepository.findAll(todoIdList);
        todoRepository.delete(todoDataList);
        
    }
    

}
