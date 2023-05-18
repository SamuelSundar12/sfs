package com.example.demo.Dao;

import java.util.ArrayList;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import com.example.demo.bean.EntityDetails;

@Repository
public class EntityDetailsDao {
@Autowired
private SessionFactory sessionFactory;
private Session session;
private Transaction transaction;
private Query q;

public ArrayList<EntityDetails> getEntityDetails()
{
	session=sessionFactory.openSession();
	transaction=session.beginTransaction();
	q=session.createQuery("from EntityDetails");
	return (ArrayList<EntityDetails>) q.list();
}
public String addEntityDetails(EntityDetails entityDetails ) {
	session=sessionFactory.openSession();
	transaction=session.beginTransaction();
	session.save(entityDetails);
	transaction.commit();
	session.close();
	return "SUCCESS";
}
public boolean modifyEntityDetails(EntityDetails entityDetails) {
    boolean isSuccess = true;
    try {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.update(entityDetails);
        transaction.commit();
        session.close();
    } catch (Exception e) {
        isSuccess = false;
        e.printStackTrace();
    }
    return isSuccess;
}
public EntityDetails viewEntityDetailsById(int ID) {
	
	EntityDetails elBean=new EntityDetails();
	session=sessionFactory.openSession();
	transaction=session.beginTransaction();
Query<EntityDetails> q2=session.createQuery("from EntityDetails where ID=:ID");
q2.setParameter("ID", ID);
ArrayList<EntityDetails> all=(ArrayList<EntityDetails>) q2.getResultList();
for(EntityDetails e1:all)
{
	elBean=e1;
}
return elBean;
}
}
