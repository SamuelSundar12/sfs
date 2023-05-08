package com.example.demo.Dao;

import java.util.ArrayList;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.bean.Constitution;
import com.example.demo.bean.EntityTable;


@Repository
public class ConstitutionDao {
	@Autowired
	private SessionFactory sessionFactory;
	private Session session;
	private Transaction transaction;
	private Query q;
	
	public ArrayList<Constitution> getConstitution()
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		q=session.createQuery("from Constitution");
		return (ArrayList<Constitution>) q.list();
	}
public Constitution viewConstitutionById(int id) {
		
		Constitution elBean=new Constitution();
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
	Query<Constitution> q2=session.createQuery("from Constitution where id=:id");
	q2.setParameter("id", id);
	ArrayList<Constitution> all=(ArrayList<Constitution>) q2.getResultList();
	for(Constitution e1:all)
	{
		elBean=e1;
	}
	return elBean;
	}
}



