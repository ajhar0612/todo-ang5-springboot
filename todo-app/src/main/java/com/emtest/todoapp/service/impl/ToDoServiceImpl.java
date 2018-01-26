package com.emtest.todoapp.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.emtest.todoapp.entity.ToDo;
import com.emtest.todoapp.repository.ToDoRepository;
import com.emtest.todoapp.service.ToDoService;

@Service
public class ToDoServiceImpl implements ToDoService {

    @Autowired
    ToDoRepository todoRepository;

	@Override
	public List<ToDo> listAll() {
        Sort sortByCreatedAtDesc = new Sort(Sort.Direction.ASC, "id");
        return todoRepository.findAll(sortByCreatedAtDesc);
	}

	@Override
	public ToDo addToDo(ToDo toDo) {
		toDo.setCompleted(false);
        return todoRepository.save(toDo);
	}

	@Override
	public List<ToDo> updateAll(List<ToDo> todos) throws Exception {
		List<Long> toDoIdList = new ArrayList<Long>();
        for(ToDo item : todos) {
        		toDoIdList.add(item.getId());
        }
        List<ToDo> todoDataList = todoRepository.findAll(toDoIdList);
        if(todoDataList.size() != todos.size()) {
            throw new Exception("Resource Not found");
        }
        for(ToDo item : todoDataList) {
        		item.setCompleted(true);
	    }

        return todoRepository.save(todoDataList);
	}

	@Override
	public void update(Long id) throws Exception {
        ToDo todo =todoRepository.findOne(id);
        if(todo == null) {
            throw new Exception("Resource Not found");
        }
        todoRepository.delete(todo);
	}

}
