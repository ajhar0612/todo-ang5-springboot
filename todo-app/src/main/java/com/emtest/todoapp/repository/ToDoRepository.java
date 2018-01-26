package com.emtest.todoapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.emtest.todoapp.entity.ToDo;

@Repository
public interface ToDoRepository extends JpaRepository<ToDo, Long>{

}