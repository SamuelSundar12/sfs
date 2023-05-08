package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Dao.GSTdetailsDao;
import com.example.demo.bean.EntityDetails;
import com.example.demo.bean.GSTdetails;

@Service
public class GSTdetailsService {
	@Autowired
	private GSTdetailsDao gstdao;
	public String addGSTdetails(GSTdetails gSTdetails) 
	{
		return gstdao.addGSTdetails(gSTdetails);
	}

}
