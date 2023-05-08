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

  @Column(name = "ED_ENTITY_REFERENCE", length = 20)
  private String entityReference;

  @Column(name = "ED_START_DATE")
  private Date startDate;

  @Column(name = "ED_END_DATE")
  private Date endDate;

  @Column(name = "DATA_UPLOAD_TYPE", length = 1)
  private String dataUploadType;

  @Column(name = "DELIMITER", length = 1)
  private String delimiter;

  @Column(name = "ED_SPOKE_CODE")
  private Integer spokeCode;

  @Column(name = "ED_OUTREACH_CODE")
  private Integer outreachCode;

  @Column(name = "ED_DAS_EMPLOYER", length = 1)
  private String dasEmployer;

  @Column(name = "ED_SUPPLIER_REASON", length = 100)
  private String supplierReason;

  @Column(name = "ED_ENTITY_LIFE_BLOCK_RECORD_ID")
  private Integer entityLifeBlockRecordId;

  @Column(name = "BUILDER_CATEGORY", length = 10)
  private String builderCategory;

  @Column(name = "APPR_STATUS", length = 1)
  private String apprStatus;

  @Column(name = "REMARKS", length = 2000)
  private String remarks;

  @Column(name = "APPROVED_BY", length = 15)
  private String approvedBy;

  @Column(name = "APPROVED_DATE")
  private Date approvedDate;
  
  @OneToOne
  @JoinColumn(name="CERSAL_CITY")
  private City city;

  @Column(name = "CERSAL_DISTRICT")
  private Integer cersalDistrict;

  @Column(name = "MSME_APPL", length = 1)
  private String msmeAppl;

  @Column(name = "MOBILE_APP_APPLICABLE", length = 10)
  private String mobileAppApplicable;

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


//public Integer getTxnId() {
//	return txnId;
//}
//
//public void setTxnId(Integer txnId) {
//	this.txnId = txnId;
//}

public GSTdetails getgSTdetails() {
	return gSTdetails;
}

public void setgSTdetails(GSTdetails gSTdetails) {
	this.gSTdetails = gSTdetails;
}

//public String getBranchCode() {
//	return branchCode;
//}
//
//public void setBranchCode(String branchCode) {
//	this.branchCode = branchCode;
//}


public String getName() {
	return name;
}

public Branch getBranch() {
	return branch;
}

public void setBranch(Branch branch) {
	this.branch = branch;
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

//public Integer getConstitutionCode() {
//	return constitutionCode;
//}
//
//public void setConstitutionCode(Integer constitutionCode) {
//	this.constitutionCode = constitutionCode;
//}

public String getEntityReference() {
	return entityReference;
}

public void setEntityReference(String entityReference) {
	this.entityReference = entityReference;
}

public Date getStartDate() {
	return startDate;
}

public void setStartDate(Date startDate) {
	this.startDate = startDate;
}

public Date getEndDate() {
	return endDate;
}

public void setEndDate(Date endDate) {
	this.endDate = endDate;
}

public String getDataUploadType() {
	return dataUploadType;
}

public void setDataUploadType(String dataUploadType) {
	this.dataUploadType = dataUploadType;
}

public String getDelimiter() {
	return delimiter;
}

public void setDelimiter(String delimiter) {
	this.delimiter = delimiter;
}

public Integer getSpokeCode() {
	return spokeCode;
}

public void setSpokeCode(Integer spokeCode) {
	this.spokeCode = spokeCode;
}

public Integer getOutreachCode() {
	return outreachCode;
}

public void setOutreachCode(Integer outreachCode) {
	this.outreachCode = outreachCode;
}

public String getDasEmployer() {
	return dasEmployer;
}

public void setDasEmployer(String dasEmployer) {
	this.dasEmployer = dasEmployer;
}

public String getSupplierReason() {
	return supplierReason;
}

public void setSupplierReason(String supplierReason) {
	this.supplierReason = supplierReason;
}

public Integer getEntityLifeBlockRecordId() {
	return entityLifeBlockRecordId;
}

public void setEntityLifeBlockRecordId(Integer entityLifeBlockRecordId) {
	this.entityLifeBlockRecordId = entityLifeBlockRecordId;
}

public String getBuilderCategory() {
	return builderCategory;
}

public void setBuilderCategory(String builderCategory) {
	this.builderCategory = builderCategory;
}

public String getApprStatus() {
	return apprStatus;
}

public void setApprStatus(String apprStatus) {
	this.apprStatus = apprStatus;
}

public String getRemarks() {
	return remarks;
}

public void setRemarks(String remarks) {
	this.remarks = remarks;
}

public String getApprovedBy() {
	return approvedBy;
}

public void setApprovedBy(String approvedBy) {
	this.approvedBy = approvedBy;
}

public Date getApprovedDate() {
	return approvedDate;
}

public void setApprovedDate(Date approvedDate) {
	this.approvedDate = approvedDate;
}

//public Integer getCersalCity() {
//	return cersalCity;
//}
//
//public void setCersalCity(Integer cersalCity) {
//	this.cersalCity = cersalCity;
//}


public Integer getCersalDistrict() {
	return cersalDistrict;
}

public City getCity() {
	return city;
}

public void setCity(City city) {
	this.city = city;
}

public void setCersalDistrict(Integer cersalDistrict) {
	this.cersalDistrict = cersalDistrict;
}

public String getMsmeAppl() {
	return msmeAppl;
}

public void setMsmeAppl(String msmeAppl) {
	this.msmeAppl = msmeAppl;
}

public String getMobileAppApplicable() {
	return mobileAppApplicable;
}

public void setMobileAppApplicable(String mobileAppApplicable) {
	this.mobileAppApplicable = mobileAppApplicable;
}

public Constitution getConstitution() {
	return constitution;
}

public void setConstitution(Constitution constitution) {
	this.constitution = constitution;
}

  
}
