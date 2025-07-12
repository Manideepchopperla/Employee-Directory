package com.manideep.employeedirectory;

import com.google.gson.Gson;
import freemarker.template.*;

import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws Exception {
        Configuration cfg = new Configuration(Configuration.VERSION_2_3_32);
        cfg.setDirectoryForTemplateLoading(new File("src/main/resources/templates"));
        cfg.setDefaultEncoding("UTF-8");

        // Prepare data
        List<Map<String, String>> employees = new ArrayList<>();
        employees.add(Map.of("id", "1", "firstName", "Alice", "lastName", "Smith", "email", "alice@example.com", "department", "HR", "role", "Manager"));
        employees.add(Map.of("id", "2", "firstName", "Bob", "lastName", "Johnson", "email", "bob@example.com", "department", "IT", "role", "Developer"));
        employees.add(Map.of("id", "3", "firstName", "Charlie", "lastName", "Lee", "email", "charlie@example.com", "department", "Finance", "role", "Analyst"));
        employees.add(Map.of("id", "4", "firstName", "Diana", "lastName", "King", "email", "diana@example.com", "department", "Marketing", "role", "Executive"));
        employees.add(Map.of("id", "5", "firstName", "Ethan", "lastName", "Wright", "email", "ethan@example.com", "department", "Sales", "role", "Representative"));
        employees.add(Map.of("id", "6", "firstName", "Fiona", "lastName", "Brown", "email", "fiona@example.com", "department", "HR", "role", "Recruiter"));
        employees.add(Map.of("id", "7", "firstName", "George", "lastName", "Miller", "email", "george@example.com", "department", "IT", "role", "Tester"));
        employees.add(Map.of("id", "8", "firstName", "Hannah", "lastName", "Davis", "email", "hannah@example.com", "department", "Finance", "role", "Accountant"));
        employees.add(Map.of("id", "9", "firstName", "Ian", "lastName", "Taylor", "email", "ian@example.com", "department", "Operations", "role", "Coordinator"));
        employees.add(Map.of("id", "10", "firstName", "Julia", "lastName", "White", "email", "julia@example.com", "department", "IT", "role", "Developer"));
        employees.add(Map.of("id", "11", "firstName", "Kevin", "lastName", "Moore", "email", "kevin@example.com", "department", "Marketing", "role", "Strategist"));
        employees.add(Map.of("id", "12", "firstName", "Laura", "lastName", "Martin", "email", "laura@example.com", "department", "HR", "role", "Assistant"));
        employees.add(Map.of("id", "13", "firstName", "Mike", "lastName", "Clark", "email", "mike@example.com", "department", "IT", "role", "Engineer"));
        employees.add(Map.of("id", "14", "firstName", "Nina", "lastName", "Lewis", "email", "nina@example.com", "department", "Finance", "role", "Auditor"));
        employees.add(Map.of("id", "15", "firstName", "Oscar", "lastName", "Walker", "email", "oscar@example.com", "department", "Operations", "role", "Supervisor"));
        employees.add(Map.of("id", "16", "firstName", "Paula", "lastName", "Hall", "email", "paula@example.com", "department", "Sales", "role", "Manager"));
        employees.add(Map.of("id", "17", "firstName", "Quentin", "lastName", "Allen", "email", "quentin@example.com", "department", "IT", "role", "DevOps Engineer"));
        employees.add(Map.of("id", "18", "firstName", "Rachel", "lastName", "Young", "email", "rachel@example.com", "department", "Marketing", "role", "Designer"));
        employees.add(Map.of("id", "19", "firstName", "Steve", "lastName", "Hill", "email", "steve@example.com", "department", "Finance", "role", "Controller"));
        employees.add(Map.of("id", "20", "firstName", "Tina", "lastName", "Scott", "email", "tina@example.com", "department", "HR", "role", "Trainer"));

        // Serialize as JSON
        Gson gson = new Gson();
        String employeesJson = gson.toJson(employees);

        // Prepare model
        Map<String, Object> dataModel = new HashMap<>();
        dataModel.put("employeesJson", employeesJson);

        // Render
        Template template = cfg.getTemplate("index.ftlh");
        try (Writer out = new FileWriter("output.html")) {
            template.process(dataModel, out);
        }

        System.out.println("✅ Generated output.html. Open it in your browser to see the result.");
    }
}
