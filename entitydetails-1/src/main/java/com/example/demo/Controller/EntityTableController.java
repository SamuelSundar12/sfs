package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Service.EntityTableService;
import com.example.demo.Service.PlaceService;
import com.example.demo.bean.Country;
import com.example.demo.bean.EntityTable;
import com.example.demo.bean.State;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/entity")
public class EntityTableController {
	@Autowired
	private EntityTableService entserv ;
	@GetMapping("/viewEntityTable")
	public List<EntityTable>  getEntityTable()
	{
		
		return entserv. getEntityTable();
	}
	@GetMapping("/EntityTable/{id}")
	public EntityTable viewEntityTableById(@PathVariable(value = "id") int id)
	{
		
		return entserv.viewEntityTableById(id);
	}
	
}
