package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Dao.BranchDao;
import com.example.demo.bean.Branch;



@Service
public class BranchService {
@Autowired
private BranchDao brdao;
public  List<Branch> getBranch(){
	return brdao.getBranch();
}
public Branch viewBranchBybranchid(int branchid)
{
	return brdao.viewBranchBybranchid(branchid);
}
}
