package com.example.demo.Dao;

import java.util.*;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import com.example.demo.bean.*;



@Repository
public class PlaceDao {
	@Autowired
	private SessionFactory sessionFactory;
	private Session session;
	private Transaction transaction;
	private Query q;
	
	
	public ArrayList<Country> getCountry()
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		q=session.createQuery("from Country");
		return (ArrayList<Country>) q.list();
	}
	public ArrayList<State> getState()
	{
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
		q=session.createQuery("from State");
		return (ArrayList<State>) q.list();
	}

	
	public Country viewCountrybyId(String countryid) {
	    Country country = null;
	    Session session = null;
	    try {
	        session = sessionFactory.openSession();
	        Query<Country> query = session.createQuery("from Country where countryid = :countryid", Country.class);
	        query.setParameter("countryid", countryid);
	        country = query.uniqueResult();
	    } finally {
	        if (session != null) {
	            session.close();
	        }
	    }
	    return country;
	}


	
	public List<State> getStateBycountryid(String countryid) {
	    System.out.println("Under DAO " + countryid);
	    Country country = viewCountrybyId(countryid);
	    if (country != null) {
	        Session session = null;
	        Transaction transaction = null;
	        try {
	            session = sessionFactory.openSession();
	            transaction = session.beginTransaction();
	            Query<State> query = session.createQuery("FROM State WHERE country.countryid = :countryid", State.class);
	            query.setParameter("countryid", countryid);
	            List<State> states = query.getResultList();
	            transaction.commit();
	            return states;
	        }  finally {
	            if (session != null) {
	                session.close();
	            }
	        }
	    }
	    return null;
	}

	
	
	
public State viewStatebyId(String stateid) {
		
		State elBean=new State();
			session=sessionFactory.openSession();
			transaction=session.beginTransaction();
		Query<State> q2=session.createQuery("from State where stateid=:stateid");
		q2.setParameter("stateid", stateid);
		ArrayList<State> all=(ArrayList<State>) q2.getResultList();
		for( State e1:all)
		{
			elBean=e1;
		}
		return elBean;
		}
public City viewCitybyId(String cityid) {
	
	City elBean=new City();
		session=sessionFactory.openSession();
		transaction=session.beginTransaction();
	Query<City> q2=session.createQuery("from City where cityid=:cityid");
	q2.setParameter("cityid", cityid);
	ArrayList<City> all=(ArrayList<City>) q2.getResultList();
	for( City e1:all)
	{
		elBean=e1;
	}
	return elBean;
	}	
	


public ArrayList<City> getCityBystateid(String stateid) {
    System.out.println("Under DAO " + stateid);
    State state = viewStatebyId(stateid);
    if (state != null) {
        session = sessionFactory.openSession();
        try {
            transaction = session.beginTransaction();
            Query<City> query = session.createQuery("FROM City WHERE state.stateid = :stateid");
            query.setParameter("stateid", stateid);
            ArrayList<City> reservations = (ArrayList<City>) query.getResultList();
            transaction.commit();
            return reservations;
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
          
        } finally {
            session.close();
        }
    }
    return null;
}
	
}
