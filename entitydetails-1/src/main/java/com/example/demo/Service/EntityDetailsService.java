package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.Dao.EntityDetailsDao;
import com.example.demo.bean.EntityDetails;

@Service
public class EntityDetailsService {
@Autowired
private EntityDetailsDao entdtdao;


public  List<EntityDetails> getEntityDetails(){
		return entdtdao.getEntityDetails();
	}
public String addEntityDetails(EntityDetails entityDetails) 
{
	return entdtdao.addEntityDetails(entityDetails);
}
}
