package com.example.demo.bean;

import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;


@Entity
@Table(name = "sa_Entity_Details")
public class EntityDetails {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  
  @OneToOne
  @JoinColumn(name="ED_ENTITY_TYPE" )
  private EntityTable entityTable;

  
  @Column(name = "ED_ENTITY_DESC", length = 100)
  private String entityCode;

 @OneToOne(cascade = CascadeType.ALL)
 @JoinColumn(name="ED_TXN_ID")
 private GSTdetails gSTdetails;
 
 @OneToOne
 @JoinColumn(name="ED_BRANCH_CODE")
 private Branch branch;

  

  @Column(name = "ED_NAME_INFO")
  private String name;

  @Column(name = "ED_ADDRESS_INFO")
  private String address;

  @Column(name = "ED_RESIDENTIAL_CODE")
  private Integer residentialCode;

  @OneToOne
  @JoinColumn(name="ED_CONSTITUTION_CODE")
  private Constitution constitution;

//  @Column(name = "ED_ENTITY_REFERENCE", length = 20)
//  private String entityReference;
//
//  @Column(name = "ED_START_DATE")
//  private Date startDate;
//
//  @Column(name = "ED_END_DATE")
//  private Date endDate;
//
//  @Column(name = "DATA_UPLOAD_TYPE", length = 1)
//  private String dataUploadType;
//
//  @Column(name = "DELIMITER", length = 1)
//  private String delimiter;
//
//  @Column(name = "ED_SPOKE_CODE")
//  private Integer spokeCode;
//
//  @Column(name = "ED_OUTREACH_CODE")
//  private Integer outreachCode;

  @Column(name = "ED_DAS_EMPLOYER", length = 1)
  private String dasEmployer;

//  @Column(name = "ED_SUPPLIER_REASON", length = 100)
//  private String supplierReason;

  @Column(name = "ED_ENTITY_LIFE_BLOCK_RECORD_ID")
  private Integer entityLifeBlockRecordId;

//  @Column(name = "BUILDER_CATEGORY", length = 10)
//  private String builderCategory;

//  @Column(name = "APPR_STATUS", length = 1)
//  private String apprStatus;
//
//  @Column(name = "REMARKS", length = 2000)
//  private String remarks;
//
//  @Column(name = "APPROVED_BY", length = 15)
//  private String approvedBy;

//  @Column(name = "APPROVED_DATE")
//  private Date approvedDate;
  
  @OneToOne
  @JoinColumn(name="CERSAL_CITY")
  private City city;

  @Column(name = "CERSAL_DISTRICT")
  private Integer cersalDistrict;

//  @Column(name = "MSME_APPL", length = 1)
//  private String msmeAppl;
//
//  @Column(name = "MOBILE_APP_APPLICABLE", length = 10)
//  private String mobileAppApplicable;
  
  @Column(name = "COUNTRY")
  private String country;
  
  @Column(name = "ED_PAN")
  private int pan;
  
  @Column(name = "STATE")
  private String state;
  
  @Column(name = "LOCATION")
  private String location;
  
  @Column(name = "PIN_CODE")
  private int pincode ;

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public EntityTable getEntityTable() {
	return entityTable;
}

public void setEntityTable(EntityTable entityTable) {
	this.entityTable = entityTable;
}

public String getEntityCode() {
	return entityCode;
}

public void setEntityCode(String entityCode) {
	this.entityCode = entityCode;
}

public GSTdetails getgSTdetails() {
	return gSTdetails;
}

public void setgSTdetails(GSTdetails gSTdetails) {
	this.gSTdetails = gSTdetails;
}

public Branch getBranch() {
	return branch;
}

public void setBranch(Branch branch) {
	this.branch = branch;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getAddress() {
	return address;
}

public void setAddress(String address) {
	this.address = address;
}

public Integer getResidentialCode() {
	return residentialCode;
}

public void setResidentialCode(Integer residentialCode) {
	this.residentialCode = residentialCode;
}

public Constitution getConstitution() {
	return constitution;
}

public void setConstitution(Constitution constitution) {
	this.constitution = constitution;
}

public String getDasEmployer() {
	return dasEmployer;
}

public void setDasEmployer(String dasEmployer) {
	this.dasEmployer = dasEmployer;
}

public Integer getEntityLifeBlockRecordId() {
	return entityLifeBlockRecordId;
}

public void setEntityLifeBlockRecordId(Integer entityLifeBlockRecordId) {
	this.entityLifeBlockRecordId = entityLifeBlockRecordId;
}

public City getCity() {
	return city;
}

public void setCity(City city) {
	this.city = city;
}

public Integer getCersalDistrict() {
	return cersalDistrict;
}

public void setCersalDistrict(Integer cersalDistrict) {
	this.cersalDistrict = cersalDistrict;
}

public String getCountry() {
	return country;
}

public void setCountry(String country) {
	this.country = country;
}

public int getPan() {
	return pan;
}

public void setPan(int pan) {
	this.pan = pan;
}

public String getState() {
	return state;
}

public void setState(String state) {
	this.state = state;
}

public String getLocation() {
	return location;
}

public void setLocation(String location) {
	this.location = location;
}

public int getPincode() {
	return pincode;
}

public void setPincode(int pincode) {
	this.pincode = pincode;
}
  
  
  
	
}