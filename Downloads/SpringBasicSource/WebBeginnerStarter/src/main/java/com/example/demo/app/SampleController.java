package com.example.demo.app;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequestMapping("/sample")
public class SampleController {

// 	private final JdbcTemplate jdbcTemplate;

// 	//Add an annotation here
// 	public SampleController(JdbcTemplate jdbcTemplate) {
// 		this.jdbcTemplate = jdbcTemplate;
// 	}

	@GetMapping("/test")
	public String test(Model model) {

		model.addAttribute("title", "Inquiry Form");

		return "test";
	}

}
