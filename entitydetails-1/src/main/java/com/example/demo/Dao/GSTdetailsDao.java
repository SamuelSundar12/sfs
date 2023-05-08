package com.example.demo.Dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.example.demo.bean.GSTdetails;

@Repository
public class GSTdetailsDao {
	@Autowired
	private SessionFactory sessionFactory;
	private Session session;
	private Transaction transaction;
	private Query q;
	
	public String addGSTdetails(GSTdetails gSTdetails ) {
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		session.save( gSTdetails);
		transaction.commit();
		session.close();
		return "SUCCESS";
	}
}
