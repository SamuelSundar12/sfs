package com.example.demo.Dao;

import java.util.ArrayList;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.example.demo.bean.Country;
import com.example.demo.bean.EntityTable;
import com.example.demo.bean.State;

@Repository
public class EntityTableDao {
	@Autowired
	private SessionFactory sessionFactory;
	private Session session;
	private Transaction transaction;
	private Query q;
	
	public ArrayList<EntityTable> getEntityTable()
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		q=session.createQuery("from EntityTable");
		return (ArrayList<EntityTable>) q.list();
	}

	public EntityTable viewEntityTableById(int id) {
		
		EntityTable elBean=new EntityTable();
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
	Query<EntityTable> q2=session.createQuery("from EntityTable where id=:id");
	q2.setParameter("id", id);
	ArrayList<EntityTable> all=(ArrayList<EntityTable>) q2.getResultList();
	for(EntityTable e1:all)
	{
		elBean=e1;
	}
	return elBean;
	}
}
