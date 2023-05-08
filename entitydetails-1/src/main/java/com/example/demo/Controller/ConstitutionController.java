package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.ConstitutionService;

import com.example.demo.bean.Constitution;
import com.example.demo.bean.EntityTable;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/constitution")
public class ConstitutionController {
	@Autowired
	private ConstitutionService conserv ;
	@GetMapping("/viewConstitution")
	public List<Constitution>  getConstitution()
	{
		
		return conserv.getConstitution();
	}
	@GetMapping("/Constitution/{id}")
	public Constitution viewConstitutionById(@PathVariable(value = "id") int id)
	{
		
		return conserv.viewConstitutionById(id);
	}
}




