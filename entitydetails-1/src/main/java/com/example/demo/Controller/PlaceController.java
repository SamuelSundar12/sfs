package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.Service.PlaceService;
import com.example.demo.bean.Country;
import com.example.demo.bean.State;
import com.example.demo.bean.City;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin")
public class PlaceController {
	
	@Autowired
	private PlaceService plserv;
	@GetMapping("/viewcountry")
	public List<Country>  getCountry()
	{
		
		return plserv. getCountry();
	}
	@GetMapping("/viewstate")
	public List<State>  getState()
	{
		
		return plserv.getState();
	}
	
	@GetMapping("/statebyid/{id}")
	public List<State> getStateBycountryid(@PathVariable(value = "id") String countryid)
	{
		
		return plserv.getStateBycountryid(countryid);
	}
	
	@GetMapping("/citybyid/{id}")
	public List<City>  getCityBystateid(@PathVariable(value = "id") String stateid)
	{
		
		return plserv.getCityBystateid(stateid);
	}

}
