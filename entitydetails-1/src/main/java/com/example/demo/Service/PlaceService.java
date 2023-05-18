package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.Dao.PlaceDao;
import com.example.demo.bean.Country;
import com.example.demo.bean.State;
import com.example.demo.bean.City;



@Service
public class PlaceService {
	@Autowired
	private PlaceDao pldao;
	
	
	 public  List<Country> getCountry(){
			return pldao.getCountry();
		}
	 public  List<State> getState(){
			return pldao.getState();
		}
	 
	 public List<State> getStateBycountryid(String countryid) {
		 return pldao.getStateBycountryid(countryid);
	 }
	 
	 public ArrayList<City> getCityBystateid(String stateid) {
		 return pldao.getCityBystateid(stateid);
	 }
	 public Country ViewCountrybyid(String countryid) {
         return pldao.viewCountrybyId(countryid);
   }
   public State viewStatebyId(String stateid) {
         return pldao.viewStatebyId(stateid);
   }
   public City viewCitybyId(String cityid) {
         return pldao.viewCitybyId(cityid);
   }


}
