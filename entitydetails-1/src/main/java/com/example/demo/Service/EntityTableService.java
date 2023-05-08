package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.Dao.EntityTableDao;
import com.example.demo.Dao.PlaceDao;
import com.example.demo.bean.Country;
import com.example.demo.bean.EntityTable;
import com.example.demo.bean.State;

@Service
public class EntityTableService {
	@Autowired
	private EntityTableDao entdao;
	
	
	 public  List<EntityTable> getEntityTable(){
			return entdao.getEntityTable();
		}
	 public EntityTable viewEntityTableById(int id)
		{
			return entdao.viewEntityTableById(id);
		}
}
