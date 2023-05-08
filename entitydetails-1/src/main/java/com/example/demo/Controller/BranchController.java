package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.BranchService;
import com.example.demo.bean.Branch;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/branch")
public class BranchController {
	@Autowired
	private BranchService brserv;
	@GetMapping("/viewbranch")
	public List<Branch>  getBranch()
	{
		return brserv. getBranch();
	}
	@GetMapping("/Branch/{branchid}")
	public Branch viewBranchBybranchid(@PathVariable(value = "branchid") int branchid)
	{
		return brserv.viewBranchBybranchid(branchid);
	}
}
