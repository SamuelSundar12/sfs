package com.example.demo.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="HFS_GST_ENTITY_DTLS")
public class GSTdetails {
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="TXN_ID")
	  private Long txnNo;
	@Column(name = "ENTITY_TYPE", length = 10)
	  private String entityType;

	  @Column(name = "ENTITY_CODE", length = 15)
	  private String entityCode;

	  @Column(name = "ENTITY_BRANCH", length=15)
	  private Integer entityBranch;

	  @Column(name = "GST_STATE_NAME", length = 50)
	  private String gstStateName;

	  @Column(name = "GST_STATE_CODE", length=20)
	  private String gstStateCode;

	  @Column(name = "GSTIN_NO"  )
	  private String gstinNo;

	  @Column(name = "AUTHORIZED_PERSON")
	  private String authorizedPerson;
	  
	  @Column(name="GSTIN_ADDRESS")
	  private String gstinAddress;
	  
	  @Column(name="STATUS")
	  private String status;
	  
	  @Column(name="RECORD_ID")
	  private int recordId;
	  
	  @Column(name="MOBILE_NO")
	  private int mobileNo;
	  
	  @Column(name="EMAIL")
	  private String email;

	public Long getTxnNo() {
		return txnNo;
	}

	public void setTxnNo(Long txnNo) {
		this.txnNo = txnNo;
	}

	public String getEntityType() {
		return entityType;
	}

	public void setEntityType(String entityType) {
		this.entityType = entityType;
	}

	public String getEntityCode() {
		return entityCode;
	}

	public void setEntityCode(String entityCode) {
		this.entityCode = entityCode;
	}

	public Integer getEntityBranch() {
		return entityBranch;
	}

	public void setEntityBranch(Integer entityBranch) {
		this.entityBranch = entityBranch;
	}

	public String getGstStateName() {
		return gstStateName;
	}

	public void setGstStateName(String gstStateName) {
		this.gstStateName = gstStateName;
	}

	public String getGstStateCode() {
		return gstStateCode;
	}

	public void setGstStateCode(String gstStateCode) {
		this.gstStateCode = gstStateCode;
	}

	public String getGstinNo() {
		return gstinNo;
	}

	public void setGstinNo(String gstinNo) {
		this.gstinNo = gstinNo;
	}

	public String getAuthorizedPerson() {
		return authorizedPerson;
	}

	public void setAuthorizedPerson(String authorizedPerson) {
		this.authorizedPerson = authorizedPerson;
	}

	public String getGstinAddress() {
		return gstinAddress;
	}

	public void setGstinAddress(String gstinAddress) {
		this.gstinAddress = gstinAddress;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getRecordId() {
		return recordId;
	}

	public void setRecordId(int recordId) {
		this.recordId = recordId;
	}

	public int getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(int mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	  
	 
	  


}
