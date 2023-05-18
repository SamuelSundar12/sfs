package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Service.GSTdetailsService;
import com.example.demo.bean.GSTdetails;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/gstdetails")
public class GSTdetailsController {
	@Autowired
	private GSTdetailsService gstserv ;
	@PostMapping("/addGSTdetails")
	public String addGSTdetails(@RequestBody GSTdetails gd)
	{
		gstserv.addGSTdetails(gd);
		return "GSTdetails Added Successfully";	
	}
	

}
