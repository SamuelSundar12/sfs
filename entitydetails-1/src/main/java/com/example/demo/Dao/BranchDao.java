package com.example.demo.Dao;

import java.util.ArrayList;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.bean.Branch;



@Repository
public class BranchDao {
	@Autowired
	private SessionFactory sessionFactory;
	private Session session;
	private Transaction transaction;
	private Query q;
	
	public ArrayList<Branch> getBranch()
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		q=session.createQuery("from Branch");
		return (ArrayList<Branch>) q.list();
	}
public Branch viewBranchBybranchid(int branchid) {
		
		Branch elBean=new Branch();
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
	Query<Branch> q2=session.createQuery("from Branch where branchid=:branchid");
	q2.setParameter("branchid", branchid);
	ArrayList<Branch> all=(ArrayList<Branch>) q2.getResultList();
	for(Branch e1:all)
	{
		elBean=e1;
	}
	return elBean;
	}
}
