package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.EntityDetailsService;

import com.example.demo.bean.EntityDetails;
;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/entitydetails")
public class EntityDetailsController {
	@Autowired
	private EntityDetailsService entdtserv ;
	@GetMapping("/viewEntityDetails")
	public List<EntityDetails>  getEntityDetails()
	{
		
		return entdtserv. getEntityDetails();
	}
	@PostMapping("/addEntityDetails")
	public String addEntityDetails(@RequestBody EntityDetails ed)
	{
		entdtserv.addEntityDetails(ed);
		return "EntityDetails Added Successfully";	
	}
	@PutMapping("/modifyEntityDetails")
	public String modifyEntityDetails(@RequestBody EntityDetails ed)
	{
		entdtserv.modifyEntityDetails(ed);
		return " EntityDetails Updated successfully";
	}
	@GetMapping("/viewEntityDetails/{id}")
	public EntityDetails meth3(@PathVariable(value = "id") int ID)
	{
		return entdtserv.viewEntityDetailsById(ID);
		
	}
}
