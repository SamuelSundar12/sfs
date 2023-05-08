package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Dao.ConstitutionDao;

import com.example.demo.bean.Constitution;


@Service
public class ConstitutionService {
	@Autowired
	private ConstitutionDao condao;
	
	
	 public  List<Constitution> getConstitution(){
			return condao.getConstitution();
		}
	 public Constitution viewConstitutionById(int id)
		{
			return condao.viewConstitutionById(id);
		}
	 

}




