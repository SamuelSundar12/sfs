package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
	public String meth1(@RequestBody EntityDetails ed)
	{
		entdtserv.addEntityDetails(ed);
		return "EntityDetails Added Successfully";	
	}
}
