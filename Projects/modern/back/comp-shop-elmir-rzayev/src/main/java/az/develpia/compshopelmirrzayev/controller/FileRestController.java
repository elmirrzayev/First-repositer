package az.develpia.compshopelmirrzayev.controller;

import java.io.File;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

import javax.annotation.Resource;
import javax.swing.tree.ExpandVetoException;

import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "*") 
@RequestMapping(path = "/files") 
public class FileRestController {
	@PostMapping(path = "/upload")
	   public String uploadFile(@RequestParam(name="file",required = false) MultipartFile file) {
		String fileName =file.getOriginalFilename();
		 try {
			 InputStream stream = file.getInputStream(); 
			 File java1 = new File("D:/java1");
			 if(java1.exists()) {
				 
			 }else {
				 java1.mkdir();
			 }
			 UUID uuid = UUID.randomUUID();
			 String randomName = uuid.toString();
			 String format = fileName.substring(fileName.lastIndexOf("."));
			 System.out.println(format);
			 randomName+=format;
			 fileName+=randomName;
		     Files.copy(stream, Paths.get("D:/java1/"+randomName), StandardCopyOption.REPLACE_EXISTING);
			 }
		 catch (Exception e) {
			 e.printStackTrace () ;
		 }
		   return fileName;
	}
	@GetMapping(path="/download/{filename:.+}")
	public ResponseEntity<Resource> download(@PathVariable String filename){
		try {
			Resource file = (Resource) new UrlResource(Paths.get("C:/java2").resolve(filename).toUri());
			return ResponseEntity.ok().header(org.springframework.http.HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\""+
			((UrlResource) file).getFilename()+"\"").body(file);
		}catch(Exception e) {
			e.printStackTrace();
		}
	    return null;    
		
	}
	
	}

